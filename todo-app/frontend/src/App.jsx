import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Todo from "./Todo"
import Todo2 from "./Todo2"
import Login from "./Login"
import Register from "./Register"
import Passwordgen from "./Passwordgen"
import Photoedit from "./photoedit"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo2" element={<Todo2 />} />
        <Route path="/passwordgen" element={<Passwordgen />} />
        <Route path="/photoedit" element={<Photoedit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
