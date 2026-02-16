import React from 'react'
import { assets } from '../assets/assets'
import {useLocation} from 'react-router-dom'

const Footer = () => {
  const location=useLocation()
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-15 mx-10 md:mx-25 lg:mx-35 flex-row justify-between mb-10'>
        <div className="about">
          <img src={assets.logo} alt="logo" className='w-40'/>
          <p className='text-sm text-neutral-600 p-1.5 '>This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.</p>
        </div>
        <div className="links">
          <h5 className='font-medium text-lg'>Quick Links</h5>
          <ul className='text-sm text-neutral-600 p-1.5'>
            <li onClick={()=>{}} className='hover:cursor-pointer hover:underline my-1'>Home</li>
            <li onClick={()=>{}} className='hover:cursor-pointer hover:underline my-1'>Contact Us</li>
            <li onClick={()=>{}} className='hover:cursor-pointer hover:underline my-1'>FAQs</li>
          </ul>
        </div>
        <div className="help">
          <h5 className='font-medium text-lg'>Quick Links</h5>
        </div>
        <div className="follow">
          <h5 className='font-medium text-lg'>Quick Links</h5>
        </div>
      </div>
  
      <div className='bottom-1.5 flex items-center justify-center text-neutral-500 border-t border-neutral-400 py-5 mx-10'>Copyright 2026 &copy; BlogOra-RPF - All Rights Reserved</div>
    </div>
  )
}

export default Footer
