'use client'

import React, { createContext, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const Sidebar = () => {
    const ref = useRef<Element | null>(null)

    useEffect(() => {
        document.documentElement.classList.add('sidebar-open')
        ref.current = document.querySelector("#container")
        return () => {
            document.documentElement.classList.remove('sidebar-open')
        }
    }, [])

    return ref.current ? createPortal(
        <div className='absolute left-0 top-0 w-60 p-4 bg-gray-50 border-r border-gray-300 shadow-lg h-full'>
            {/* Your sidebar content here */}
            <div>

            </div>
            <div className=''>
                asd
            </div>
            {/* Add more sidebar content here */}
        </div>,
        ref.current
    ) : null
}

export default Sidebar