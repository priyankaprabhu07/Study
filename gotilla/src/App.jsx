import React from "react"
import { useEffect } from "react"
import { useState } from "react"

function App() {

  const [name,setName] = useState('Name is Loading...')

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/data')
    const data = await response.json()
    setName(data.message)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      <p className="text-xl font-bold bg-green-500 w-fit text-blue-500">Express Learning</p>
      <p>{name}</p>
    </>
  )
}

export default App
