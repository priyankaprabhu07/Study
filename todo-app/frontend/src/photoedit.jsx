
import { ImagePlus, Upload } from "lucide-react";
import React, { useRef } from 'react'

export default function photoedit() {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };
  return (

    <div className='flex flex-col h-screen w-full items-center justify-center bg-gradient-to-r from-purple-900 via-slate-900 to-pink-900'>
      <ImagePlus size={70} className="mb-1 text-pink-300" />

      <h1 className='text-6xl text-pink-500' style={{ fontFamily: 'Cinzel, serif' }}>Photo Edit</h1>
      <p className='text-pink-400 mt-1 italic'>edit your images with ease!</p>
      <button onClick={handleClick} className='mt-6 flex items-center bg-pink-300 rounded-lg hover:bg-pink-400 px-4 py-4 text-white'><Upload size={20} className="mr-2 text-white" />Upload Image</button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

    </div>
  )
}
