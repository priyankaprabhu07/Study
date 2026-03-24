import React, { useState } from 'react'
import { Trash2, Edit, Pencil } from 'lucide-react'

export default function Todo2() {

    const [task, setTask] = useState("")
    const [todos, settodos] = useState([])
    const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");


    function Addtask() {
        if (task === "") return
        if (todos.includes(task)) {
            alert("Task already exists")
            return
        }
        settodos([...todos, task])
        setTask("")
    }

    function deleteTask(index) {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        settodos(newTodos)
    }
    function edittask(index) {
        const newTodos = [...todos]
        const newtask = prompt("Enter new task")
        if (newtask === null || newtask === "") return
        newTodos[index] = newtask
        settodos(newTodos)
    }

    const filteredTodos = todos.filter((todo) =>
        todo.toLowerCase().includes(search.toLowerCase())
    );


    function handleSearch() {
        setSearch(searchInput);
    }

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
                    filteredTodos.map((todo, index) =>
                        <div className='flex gap-36 items-center mb-2 p-2 rounded-full bg-gray-300' key={index}>
                            <li className='w-11 text-amber-950'>{todo}</li>
                            <div className='flex gap-2 items-center'>
                                <Trash2 onClick={() => deleteTask(index)} className='cursor-pointer hover:text-red-500' />
                                <Pencil onClick={() => edittask(index)} className='cursor-pointer hover:text-blue-500'/>
                            </div>
                        </div>
                    ))}
            </ul>
        </div>

    )
}
