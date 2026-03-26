import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:5000/api/users/register",
                data
            );

            alert(res.data.message);
            navigate("/login");

        } catch (error) {
            alert(error.response?.data?.message || "Error registering user");
        }
    };

    return (
        <div className='h-screen w-full flex flex-col items-center justify-center'>
            <h1 className='font-bold text-xl mb-4'>Register</h1>

            <form
                onSubmit={handleSubmit}
                className='flex flex-col items-center gap-3 w-64'
            >

                <input
                    className='border p-2 w-full'
                    placeholder='Name'
                    type='text'
                    value={data.name}
                    onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                    }
                />

                <input
                    className='border p-2 w-full'
                    placeholder='Email'
                    type='email'
                    value={data.email}
                    onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                    }
                />

                <input
                    className='border p-2 w-full'
                    placeholder='Password'
                    type='password'
                    value={data.password}
                    onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                    }
                />

                <button
                    type="submit"
                    className='bg-blue-600 rounded text-white py-2 px-4 w-full'
                >
                    Register
                </button>

                <p>
                    Already a user?{" "}
                    <Link className='text-blue-600' to='/login'>
                        Login
                    </Link>
                </p>

            </form>
        </div>
    )
}