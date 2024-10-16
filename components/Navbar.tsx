import React from 'react'
import { FaBars, FaBeer } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className='h-[10vh] py-2 px-10 bg-gray-50 flex justify-between border-b border-gray-300'>
            <div className='flex gap-5 h-max'>
                <FaBars className='text-gray-500 border border-gray-300 rounded p-1 size-6 cursor-pointer' />
                <span className='relative flex items-center h-max w-max text-gray-400 select-none'>
                    <p className='font-extrabold'>e</p>
                    <p className='text-[10px] font-extrabold uppercase underline'>pon</p>
                </span>
            </div>
            <div className='flex items-center gap-4 text-gray-500'>
                {/* Navbar component add your designs */}
            </div>
        </nav>
    )
}

export default Navbar
