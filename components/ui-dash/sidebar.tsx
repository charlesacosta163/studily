import React from 'react'
import Link from 'next/link';

import { PiNotebook } from "react-icons/pi";
import { BiHomeSmile } from "react-icons/bi";
import { PiGearSix } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className='hidden md:block max-w-[250px] w-full py-8'>
        <h1 className="logo text-center">Studily</h1>

        <div className='flex flex-col font-medium mt-4'>
            <Link href='/dashboard' className='menu-item'><BiHomeSmile /> Dashboard</Link>
            <Link href= '/assignments' className='menu-item'><PiNotebook /> Assignments</Link>
            <Link href= '/settings' className='menu-item'><PiGearSix /> Settings</Link>
        </div>
    </div>
  )
}

export default Sidebar