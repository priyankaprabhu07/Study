import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        data
      );

      if (res.data.message === "Login successful") {
        alert("Login success");

        // save user
        localStorage.setItem("user", JSON.stringify(res.data.user));

        navigate("/todo2");
      } else {
        alert(res.data.message);
      }

    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-4'>
      <h1 className='font-bold'>Login</h1>

      <div className='flex flex-col items-center gap-2 w-40'>

        <input
          className='border p-1'
          type="email"
          placeholder='Email'
          value={data.email}
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />

        <input
          className='border p-1'
          type="password"
          placeholder='Password'
          value={data.password}
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        <button
          onClick={handleLogin}
          className='bg-blue-500 rounded-md text-white w-fit p-2'
        >
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <Link to="/register" className='text-blue-500'>
            Register
          </Link>
        </p>

      </div>
    </div>
  )
}