import React, { useState, useEffect } from 'react'
import { Trash2, Pencil } from 'lucide-react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Todo2() {

    const [task, setTask] = useState("")
    const [todos, settodos] = useState([])
    const [searchInput, setSearchInput] = useState("")

    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    // ✅ DRAG FUNCTIONS
    function handleDragStart(e, index) {
        e.dataTransfer.setData("dragIndex", index);
    }

    function handleDrop(e, index) {
        const dragIndex = e.dataTransfer.getData("dragIndex");

        const newTodos = [...todos];
        const draggedItem = newTodos[dragIndex];

        newTodos.splice(dragIndex, 1);
        newTodos.splice(index, 0, draggedItem);

        settodos(newTodos);
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    // ✅ ADD TASK
    async function Addtask() {
        if (!task) return

        try {
            const res = await axios.post("http://localhost:5000/api/todos", {
                text: task,
                userId: user._id
            })

            settodos([...todos, res.data])
            setTask("")

        } catch (err) {
            console.log(err)
        }
    }

    // ✅ DELETE
    async function deleteTask(id) {
        try {
            await axios.delete(`http://localhost:5000/api/todos/${id}`)
            settodos(todos.filter(t => t._id !== id))
        } catch (err) {
            console.log(err)
        }
    }

    // ✅ EDIT
    async function edittask(id) {
        const newtask = prompt("Enter new task")
        if (!newtask) return

        try {
            const res = await axios.put(
                `http://localhost:5000/api/todos/${id}`,
                { text: newtask }
            )

            settodos(todos.map(t => t._id === id ? res.data : t))

        } catch (err) {
            console.log(err)
        }
    }

    // ✅ CHECKBOX TOGGLE
    async function toggleComplete(id, status) {
        try {
            const res = await axios.put(
                `http://localhost:5000/api/todos/${id}`,
                { completed: !status }
            )

            settodos(todos.map(t => t._id === id ? res.data : t))

        } catch (err) {
            console.log(err)
        }
    }

    // ✅ GET TODOS
    async function getTodos() {
        try {
            const res = await axios.get(`http://localhost:5000/api/todos/${user._id}`)
            settodos(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    // ✅ SEARCH
    async function handleSearch() {
        if (!searchInput) return getTodos()

        try {
            const res = await axios.get(
                `http://localhost:5000/api/todos/search/${searchInput}`
            )
            settodos(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    // ✅ AUTH CHECK
    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (!storedUser) {
            navigate("/login");
        } else {
            getTodos();
        }
    }, []);

    // ✅ LOGOUT
    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    }

    return (
        <div className='w-full min-h-screen flex flex-col items-center'>

            {/* 🔥 TOP BAR */}
            <div className='w-full flex justify-center items-center bg-amber-950 text-white p-4'>
                <h1 className='font-bold'>Todo2 List</h1>

                <div className='flex items-center gap-4 absolute right-4'>
                    <p>👤 {user?.name}</p>
                    <button
                        onClick={handleLogout}
                        className='bg-white text-amber-950 px-3 py-1 rounded'
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* CONTENT */}
            <div className='flex flex-col items-center mt-6'>

                {/* SEARCH */}
                <div className='flex gap-2 mb-4'>
                    <input
                        type="text"
                        placeholder="Search"
                        className='border w-64 p-2'
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button onClick={handleSearch} className='bg-amber-950 text-white p-2 rounded'>
                        Search
                    </button>
                </div>

                {/* ADD */}
                <div className='flex gap-2 mb-3'>
                    <input
                        type="text"
                        placeholder="Enter Task"
                        className='border w-64 p-2'
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button onClick={Addtask} className='bg-amber-950 text-white p-2 rounded'>
                        Add
                    </button>
                </div>

                <p className='font-bold text-amber-950 mb-2'>Notes</p>

                {/* ✅ DRAG & DROP TODOS */}
                {todos.map((todo, index) => (
                    <div
                        key={todo._id}
                        className='flex items-center gap-3 bg-gray-300 p-2 rounded-full mb-2'
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDrop={(e) => handleDrop(e, index)}
                        onDragOver={handleDragOver}
                    >


                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleComplete(todo._id, todo.completed)}
                        />

                        <span className={`w-40 ${todo.completed ? 'line-through text-gray-500' : ''}`}>{todo.text}</span>

                        <Trash2 onClick={() => deleteTask(todo._id)} className='cursor-pointer hover:text-red-500' />
                        <Pencil onClick={() => edittask(todo._id)} className='cursor-pointer hover:text-blue-500' />

                    </div>
                ))}

            </div>
        </div>
    )
}