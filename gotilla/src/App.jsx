import React from "react"
import { useEffect } from "react"
import { useState } from "react"

function App() {

  const [name,setName] = useState('No Name')
  const [age,setAge] = useState('No Age')
  const [place,setPlace] = useState('No Place')

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/test')
    const data = await response.json()
    setName(data.name)
    setAge(data.age)
    setPlace(data.place)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      <p className="text-xl font-bold bg-green-500 w-fit text-blue-500">Express Learning</p>
      <p>{name}</p>
      <p>{age}</p> 
      <p>{place}</p>
    </>
  )
}

export default App
