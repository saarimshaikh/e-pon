import React from 'react'
import { FaBars, FaBeer } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className='py-2 px-10 bg-gray-100 flex justify-between border-b border-gray-300'>
            <div className='flex gap-5 items-center'>
                <FaBars className='text-gray-500 border border-gray-300 rounded p-1 size-6 cursor-pointer' />
                <div className='relative flex items-center w-max text-gray-400 select-none'>
                    <p className='font-extrabold'>e</p>
                    <p className='text-[10px] font-extrabold uppercase underline'>pon</p>
                </div>
            </div>
            <div className='flex items-center gap-4 text-gray-500'>
                {/* Navbar component add your designs */}
            </div>
        </div>
    )
}

export default Navbar
