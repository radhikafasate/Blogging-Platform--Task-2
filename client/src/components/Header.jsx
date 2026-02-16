import React from 'react'
import {assets} from '../assets/assets'

const Header = () => {
  return (
    <div className='relative mx-8 sm:mx-16 xl:mx-24 md:mt-14'>
      <div className='flex flex-col relative justify-center items-center my-10 gap-7'>
        <div className='border border-purple-400 bg-purple-200 rounded-full px-5 py-0.75 flex gap-2'>New:AI feature integrated <img src={assets.star_icon} alt="" className=''/></div>
        <h1 className='text-4xl font-bold text-center text-purple-950'>Your Own <span className='text-purple-500'>Blogging</span> Platform <br /><span className='max-sm:hidden'>Where Ideas Take Voice</span></h1>
        <p className='text-center text-purple-800 text-sm'>Where ideas meet intelligence.
Blogora-RPF helps you write better, faster, and with clarity <br /> powered by AI, driven by you.</p>
        
        <form className='flex items-center justify-between justify-items-center p-1 pl-1.5 border border-neutral-500 max-md:w-[70%] md:w-[60%] lg:w-[35%] md:h-13 h-10  rounded-full overflow-hidden'>
          <input type="text" placeholder='Search for blogs' required className='w-full ml-1.5 outline-none'/>
          <button type='submit' className='rounded-4xl bg-primary text-white p-1 md:p-2.5 cursor-pointer transition-all flex items-center justify-center justify-items-center'>Search</button>
        </form>
        
      </div>
      <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50 w-full h-150 ' />
    </div>
  )
}

export default Header
