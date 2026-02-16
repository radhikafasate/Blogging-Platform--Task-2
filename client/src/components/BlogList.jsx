import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import BlogCard from './BlogCard'


const BlogList = () => {

  const [menu,setMenu]=useState('All')

  return (
    <div className='flex flex-col items-center gap-10'>
      <div className="menulist text-neutral-600 flex md:gap-7 gap-2.5 mx-10">
        {blogCategories.map((item)=>(
          <div key={item} className='relative'>
            <button onClick={()=>setMenu(item)} className={`cursor-pointer ${menu === item && 'text-white px-4 pt-0.5' }`}>{item}</button>
            {menu===item && (<div className='absolute top-0 left-0 right-0 bg-primary rounded-full h-7 -z-1'></div>)}
          </div>
        ))}
      </div>
      <div className="blogitems grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {blog_data.filter((blog)=> menu==="All" ? true : blog.category === menu).map((blog)=><BlogCard key={blog._id} blog={blog}/>)}
      </div>
    </div>
  )
}

export default BlogList
