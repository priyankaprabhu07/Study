import React, { useState } from 'react'

export default function Passwordgen() {
    const [password, setPassword] = useState('')
    const [copied, setCopied] = useState(false)
    const [length, setLength] = useState(10)
    const [options, setOptions] = useState({
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true
    })

    const handleGenerate = () => {
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const lowercase = 'abcdefghijklmnopqrstuvwxyz'
        const numbers = '0123456789'
        const symbols = '!@#$%^&*()'

        let chars = ''
        if (options.uppercase) chars += uppercase
        if (options.lowercase) chars += lowercase
        if (options.numbers) chars += numbers
        if (options.symbols) chars += symbols

        let pwd = ''
        for (let i = 0; i < length; i++) {
            pwd += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        setPassword(pwd)
        setCopied(false)
    }

    const handleCopy = () => {
        if (!password) return
        navigator.clipboard.writeText(password)
        setCopied(true)
    }

    return (
        <div className='h-screen w-full flex items-center justify-center bg-linear-to-br from-purple-400 to-pink-400'>
            <div className='w-96 bg-white rounded-lg shadow-2xl p-8'>
                <h1 className='text-2xl font-bold mb-6 text-center text-gray-800'>Password Generator</h1>
                
                <div className='flex gap-2 mb-6'>
                    <input 
                        className='flex-1 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500' 
                        type='text' 
                        value={password}
                        readOnly
                        placeholder='Generated password'
                    />
                    <button 
                        onClick={handleCopy}
                        className='bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded font-semibold transition'
                    >
                        {copied ? 'Copied' : 'Copy'}
                    </button>
                </div>

                <div className='mb-6'>
                    <p className='text-gray-700 font-semibold mb-2'>Password Length</p>
                    <input 
                        type="range" 
                        min="5"
                        max="50"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500'
                    />
                    <p className='text-gray-600 mt-2'>Length: {length}</p>
                </div>

                <div className='mb-8 space-y-3'>
                    <label className='flex items-center gap-3 cursor-pointer'>
                        <input 
                            type='checkbox' 
                            checked={options.uppercase}
                            onChange={(e) => setOptions({...options, uppercase: e.target.checked})}
                            className='w-4 h-4 cursor-pointer'
                        /> 
                        <span className='text-gray-700'>Uppercase</span>
                    </label>
                    <label className='flex items-center gap-3 cursor-pointer'>
                        <input 
                            type='checkbox'
                            checked={options.lowercase}
                            onChange={(e) => setOptions({...options, lowercase: e.target.checked})}
                            className='w-4 h-4 cursor-pointer'
                        /> 
                        <span className='text-gray-700'>Lowercase</span>
                    </label>
                    <label className='flex items-center gap-3 cursor-pointer'>
                        <input 
                            type='checkbox'
                            checked={options.numbers}
                            onChange={(e) => setOptions({...options, numbers: e.target.checked})}
                            className='w-4 h-4 cursor-pointer'
                        /> 
                        <span className='text-gray-700'>Numbers</span>
                    </label>
                    <label className='flex items-center gap-3 cursor-pointer'>
                        <input 
                            type='checkbox'
                            checked={options.symbols}
                            onChange={(e) => setOptions({...options, symbols: e.target.checked})}
                            className='w-4 h-4 cursor-pointer'
                        /> 
                        <span className='text-gray-700'>Symbols</span>
                    </label>
                </div>

                <button 
                    onClick={handleGenerate}
                    className='w-full bg-linear-to-r from-purple-400 to-pink-400 text-white font-bold py-3 rounded-lg hover:opacity-90 transition'
                >
                    Generate
                </button>
            </div>
        </div>
    )
}
