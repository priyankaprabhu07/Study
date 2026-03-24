import React, { useState } from 'react'

export default function Todo() {

    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])

    function addTask() {
        if (task === "") return
        setTodos([...todos, task])
        setTask("")
    }

    function deleteTask(index) {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <>
            <h1>Todo List</h1>
            <input type="text" placeholder='Enter Task' value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>Add</button>
            <h2>Notes</h2>
            <ul>
                {todos.map((todo, index) => (
                    <div className='flex gap-36 items-center'>
                        <li key={index}>{todo}</li>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                ))}
            </ul>
        </>
    )
}
