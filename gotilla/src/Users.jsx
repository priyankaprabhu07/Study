import React from 'react'
import { useState } from 'react'

export default function Users() {

  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/users')
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

    return (
      <div>
        <p>Name</p>
        <p>Place</p>
        <p>email</p>
        <p>Course</p>
        <p>phone no</p>
        <p>DOB</p>

        <p>{users}</p>
      </div>
    )
  }
