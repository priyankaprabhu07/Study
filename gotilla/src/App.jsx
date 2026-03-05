import React from "react"
import { Route, Routes } from "react-router-dom"
import Form from "./Form"
import Users from "./Users"

function App() {
  return (
    <Routes>
     <Route path="/form" element={<Form />} />
     <Route path="/users" element={<Users />} />
    </Routes>
  )
}

export default App
