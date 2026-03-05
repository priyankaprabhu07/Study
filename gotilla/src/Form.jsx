import React from 'react'

export default function Form() {

  function handleSubmit() {
    alert('Form submitted!');
  }

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='bg-emerald-600 border  w-fit h-auto flex flex-col items-center justify-center p-6 rounded-lg'>
        <h1 className='mb-4 font-bold text-2xl'>FORM</h1>
        <div className='mb-4 flex justify-between items-center w-full'>
          <p>First Name :</p>
          <input className='border p-2 m-1 w-64 text-black rounded' type="text" />
    
          <p>Last Name :</p>
          <input className='border p-2 m-1 w-64 text-black rounded' type="text" />
        </div>
        <div className='mb-4'>
          <p>Email :</p>
          <input className='border p-2 m-1 w-64 text-black rounded' type="email" />
        </div>
        <div className='mb-4'>
          <p>Phone no :</p>
          <input className='border p-2 m-1 w-64 text-black rounded' type="tel" />
        </div>
        <div className='mb-4'>
          <p>Place :</p>
          <select className='border p-2 m-1 w-64 text-black rounded'>
            <option value=""></option>
            <option value="Mysuru">Mysuru</option>
            <option value="manglore">Manglore</option>
            <option value="banglore">Banglore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>
        <div className='mb-4'>
          <p>Course :</p>
          <select className='border p-2 m-1 w-64 text-black rounded'>
            <option value=""></option>
            <option value="bca">BCA</option>
            <option value="bcom">BCom</option>
            <option value="bba">BBA</option>
            <option value="mca">MCA</option>
          </select>
        </div>
        <div className='mb-4'>
          <p>DOB :</p>
          <input className='border p-2 m-1 w-64 text-black rounded' type="date" />
        </div>
        <button onClick={handleSubmit} className='bg-amber-200 cursor-pointer p-2 rounded-3xl hover:bg-amber-400 transition duration-300 ease-in-out'>Submit</button>
      </div>
    </div>
  )
} 