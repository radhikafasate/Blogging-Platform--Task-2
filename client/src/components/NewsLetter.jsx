import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col items-center gap-5 mb-25 md:mt-5 mt-3 mx-12'>
      <h1 className='text-4xl font-semibold text-purple-950'>Ideas, Delivered Instantly!..</h1>
      <p className='text-gray-600'>Subscribe to stay updated with smart blogs, emerging tech, and exclusives.</p>
      <form className='flex items-center justify-between justify-items-center p-1 pl-1.5 border border-neutral-500 max-md:w-[70%] md:w-[60%] lg:w-[45%] md:h-13 h-10  rounded-xl overflow-hidden'>
        <input type="text" placeholder='Enter your Email' className='w-full ml-1.5 outline-none'/>
        <button type='submit' className='rounded-xl bg-primary text-white p-1 md:p-2.5 cursor-pointer transition-all flex items-center justify-center justify-items-center'>Subscribe</button>
    </form>
    </div>
  )
}

export default NewsLetter
