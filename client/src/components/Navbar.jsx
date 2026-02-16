import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  
  const navigate=useNavigate();
  
  return (
    <div className='flex items-center justify-between p-3 px-5 sm:mt-3 sm:mx-20 border-b border-gray-300'>
      <img onClick={()=>navigate('/')} src={assets.logo} alt="logo" className='sm:h-9.5 h-8 w-32 sm:w-44 cursor-pointer'/>
      <button onClick={()=>navigate('/admin')} className='p-1 cursor-pointer text-sm rounded-full justify-center items-center gap-2 flex bg-primary text-white md:w-30 w-25 py-2.5'>Login
        <img src={assets.arrow} alt="" className='w-4'/>
      </button>
    </div>
  )
}

export default Navbar
