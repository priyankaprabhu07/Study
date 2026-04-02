import { ImagePlus, Upload } from "lucide-react";
import React, { useRef, useState } from 'react'

export default function PhotoEdit() {

  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  return (

    <div className='flex flex-col h-screen w-full items-center justify-center bg-gradient-to-r from-purple-900 via-slate-900 to-pink-900'>

      <ImagePlus size={70} className="mb-1 text-pink-300" />

      <h1 className='text-6xl text-pink-500' style={{ fontFamily: 'Cinzel, serif' }}>
        Photo Edit
      </h1>

      <p className='text-pink-400 mt-1 italic'>
        edit your images with ease!
      </p>

      <button
        onClick={handleClick}
        className='mt-6 flex items-center bg-pink-400 rounded-lg hover:bg-pink-500 px-4 py-4 text-white'
      >
        <Upload size={20} className="mr-2 text-white" />
        Upload Image
      </button>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {image && (
        <img
          src={image}
          alt="Preview"
          className="mt-6 max-w-md rounded-lg shadow-lg"
        />
      )}

    </div>
  )
}