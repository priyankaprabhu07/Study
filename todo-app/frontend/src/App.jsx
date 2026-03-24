import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Todo from "./Todo"
import Todo2 from "./Todo2"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo2" element={<Todo2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
