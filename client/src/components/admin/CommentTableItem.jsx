import React from 'react'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'

const CommentTableItem = ({comment,fetchComments}) => {
    const {blog,createdAt,_id}=comment
    const BlogDate = new Date(createdAt) 
    
    return (
    <tr className='border-y border-gray-300'>
      <td className='px-6 py-4'>
        <b className='font-medium text-gray-600'>Blog</b>:{blog.title}
        <br />
        <br />
        <b className='font-medium text-gray-600'>Name</b>:{comment.name}
        <br />
        <b className='font-medium text-gray-600'>Comment</b>:{comment.content}
      </td>
      <td className='px-6 py-4 max-sm:hidden'>
        {BlogDate.toLocaleDateString()}
      </td>
      {(!comment.isApproved)?
      <td>
        <div className='flex gap-2.5 pl-3.5'>
        <img src={assets.tick_icon} alt="" className='w-5 hover:cursor-pointer'/>
        <img src={assets.bin_icon} alt="" className='w-5 hover:cursor-pointer' />
        </div>
        </td>
      :
      <td>
        <div className='flex gap-1.5'>
        <div className='bg-green-200 text-xs border border-green-900 text-green-800 text-center rounded-full p-1 flex items-center hover:cursor-pointer'>Approved</div>
        <img src={assets.bin_icon} alt="" className='w-5 hover:cursor-pointer' />
        </div>
      </td>
}      
    </tr>

  )
}

export default CommentTableItem
