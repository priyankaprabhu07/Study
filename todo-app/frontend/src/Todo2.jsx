import React, { useState } from 'react'
import { Trash2, Edit, Pencil } from 'lucide-react'
import axios from "axios";
import { useEffect } from "react";

export default function Todo2() {

    const [task, setTask] = useState("")
    const [todos, settodos] = useState([])
    const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");


    async function Addtask() {
        if (task === "") return
        if (todos.includes(task)) {
            alert("Task already exists")
            return
        }
        try {
            const response = await axios.post(
                "http://localhost:5000/api/todos",
                {
                    text: task   // 👈 sending task to backend
                }
            );

            // add newly created todo from backend
            settodos([...todos, response.data]);

            setTask("");

        } catch (error) {
            console.error("Error adding task:", error);
        }
    }

    function deleteTask(index) {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        settodos(newTodos)
    }

    async function deleteTask(id) {
    try {
        // call backend delete API with id
        await axios.delete(`http://localhost:5000/api/todos/${id}`);

        // update UI after delete
        settodos(todos.filter(todo => todo._id !== id));

    } catch (error) {
        console.error("Error deleting task:", error);
    }
}
    function edittask(index) {
        const newTodos = [...todos]
        const newtask = prompt("Enter new task")
        if (newtask === null || newtask === "") return
        newTodos[index] = newtask
        settodos(newTodos)
    }

    async function edittask(id) {
    const newtask = prompt("Enter new task");

    if (!newtask) return;

    try {
        const response = await axios.put(
            `http://localhost:5000/api/todos/${id}`,
            {
                text: newtask
            }
        );

        // update UI with updated todo
        settodos(
            todos.map(todo =>
                todo._id === id ? response.data : todo
            )
        );

    } catch (error) {
        console.error("Error updating task:", error);
    }
}

    

    const filteredTodos = todos.filter((todo) =>
        todo.text.toLowerCase().includes(search.toLowerCase())
    );


    function handleSearch() {
        setSearch(searchInput);
    }

    async function handleSearch() {
    if (!searchInput) return;

    try {
        const response = await axios.get(
            `http://localhost:5000/api/todos/search/${searchInput}`
        );

        settodos(response.data); // replace todos with searched results

    } catch (error) {
        console.error("Error searching:", error);
    }
}

    async function getTodos() {
        try {
            const response = await axios.get("http://localhost:5000/api/todos");

            console.log(response.data); // check data

            // Assuming backend returns array of todos
            settodos(response.data);

        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='mb-2 bg-amber-950 w-fit text-white p-2 rounded'>Todo2 List</div>
            <div className='mb-4 flex gap-2'  >
                <input
                    type="text"
                    placeholder="Search" className='border w-64 p-2'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <div className='gap-2 flex'>
                    {searchInput && (
                        <button onClick={() => setSearchInput("")}>Clear</button>
                    )}
                    <button className='bg-amber-950 w-fit text-white p-2 rounded' onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className='flex gap-2'>
                <input type="text" placeholder='Enter Task' className='border w-68 p-2' maxLength='15' value={task} onChange={(e) => setTask(e.target.value)} />
                <button className='bg-amber-950 w-fit text-white p-2 rounded' onClick={Addtask}>Add</button>
            </div>
            <p className='text-amber-950 font-bold'>Notes</p>
            <ul>
                {filteredTodos.length === 0 ? (
                    <p className='text-amber-950'>No tasks found</p>
                ) : (
                    todos.map((todo, index) =>
                        <div className='flex gap-36 items-center mb-2 p-2 rounded-full bg-gray-300' key={index}>
                            <li className='w-11 text-amber-950'>{todo.text}</li>
                            <div className='flex gap-2 items-center'>
                                <Trash2 onClick={() => deleteTask(todo._id)} className='cursor-pointer hover:text-red-500' />
                                <Pencil onClick={() => edittask(todo._id)} className='cursor-pointer hover:text-blue-500' />
                            </div>
                        </div>
                    ))}
            </ul>
        </div>

    )
}
