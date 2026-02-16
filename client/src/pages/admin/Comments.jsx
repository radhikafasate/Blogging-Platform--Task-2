import React, { useEffect, useState } from 'react'
import { assets, comments_data } from '../../assets/assets'
import CommentTableItem from '../../components/admin/CommentTableItem'

const Comments = () => {
  const [comments,setComments]=useState([])
  const [filter,setFilter]=useState('Not Approved')

  const fetchComments = async()=>{
    setComments(comments_data)
  }

  useEffect(()=>{
    fetchComments()
  },[])

  return (
    <div className='flex-1 pt-2 px-5 sm:pt-12 sm:pl-10  bg-purple-50'>
      <div className='flex justify-between items-center max-w-3xl'>
        <h1 className='text-primary'>Comments</h1> 
        <div className='flex gap-3'>
          <button onClick={()=>{setFilter('Approved')}} className={`border rounded-full text-xs px-2.5 py-0.5 hover:cursor-pointer transition-all ${filter==='Approved'?'text-primary  text-lg border-2 border-primary bg-primary/10':'text-gray-700'}`}>Approved</button>
          <button onClick={()=>{setFilter('Not Approved')}} className={`border rounded-full text-xs px-2.5 py-0.5 hover:cursor-pointer transition-all ${filter==='Not Approved'?'text-primary text-lg border-2 border-primary bg-primary/10 ':'text-gray-700'}`}>Not Approved</button>
        </div>
      </div>

      <div className='relative h-4/5 max-w-4xl overflow-x-auto mt-4 bg-white shadow rounded-lg scrollbar-hide'>
        <table className='w-full border-collapse text-sm text-gray-500 mt-2.5'>
          <thead className='text-black text-xs text-left'>
            <tr>
              <th className='px-6 py-3' scope='col'>BLOG TITLE & COMMENT</th>
              <th className='px-6 py-3 max-sm:hidden' scope='col'>DATE</th>
              <th className='px-6 py-3' scope='col'>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {comments.filter((comment)=>{
              if (filter==='Approved') return comment.isApproved===true
              return comment.isApproved===false
            }).map((comment)=>{
              return (<CommentTableItem comment={comment} fetchComments={fetchComments}/>)
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Comments
