import React from 'react'
import BrandLogo from '@/app/_components/ui-constants/BrandLogo'
import { Button } from '@/app/_components/ui/button'
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <section className='container max-w-[600px] flex flex-col items-center gap-4 rounded-lg p-4 sm:p-8 shadow-lg bg-white'>
        <BrandLogo />

        <h2 className='text-2xl font-semibold tracking-tight'>Welcome to Studily</h2>
        <p className='text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sequi.</p>

        <Button variant='default' className='flex items-center gap-2'><FaGoogle /> Sign In With Google</Button>
    </section>
  )
}

export default LoginPage