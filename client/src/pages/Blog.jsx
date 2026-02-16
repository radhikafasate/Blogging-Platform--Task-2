import React, { useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {blog_data,assets, comments_data} from '../assets/assets'
import Navbar from '../components/Navbar.jsx'
import moment from 'moment';
import Footer from '../components/Footer.jsx';
import Loading from '../components/Loading.jsx';


// var moment = require('moment'); // require
// moment().format(); 

const Blog= () => {
  const {id}=useParams()

  const [data,setData]=useState(null)
  const [comments,setComments]=useState([])
  const [name,setName]=useState('')
  const [content,setContent]=useState('')

  const fetchBlogData = async ()=>{
    const data = blog_data.find(item => item._id === id)
    setData(data) 
  }

  const fetchComments=async ()=>{
    setComments(comments_data)
  }

  const addComment=async(e)=>{
    e.preventDefault();
  }

  useEffect(()=>{
    fetchBlogData()
    fetchComments()
  },[])  

  return data ? (
    <div className="relative">
      <img src={assets.gradientBackground} alt="" className='absolute top-0 w-full -z-1 opacity-80'/>
      <Navbar/>
      <div className='flex flex-col items-center mt-12 mx-15'>
        <p className='text-lg text-purple-700 text-center'>Published on {moment(data.createdAt).format('MMMM Do YYYY')}</p>
        <p className=' text-center text-2xl md:text-4xl lg:text-5xl font-semibold text-primary my-2.5 lg:w-[70%]'>{data.title}</p>
        <p className='mt-1.5 text-purple-950 text-center md:w-[70%]'>{data.subTitle}</p>
        <p className='bg-purple-300 rounded-full px-1.5 my-2.5 text-primary'>Amit Agarwal</p>
        <img src={data.image} alt="" className='md:h-80 my-8 md:my-15 lg:h-96 rounded-2xl'/>
      </div>

      <div dangerouslySetInnerHTML={{__html:data.description}} className='rich-text lg:w-[60%] lg:mx-80 mx-20 my-2 mb-25 flex flex-col justify-center'></div>

      <div className="commentSection mb-15 lg:max-w-4xl  md:mx-30 lg:mx-80 ">
        <p className='font-bold text-lg mb-4.5'>Comments ({comments.length})</p>
        {comments.map((item,index)=>(
          <div className='flex flex-col mb-4 rounded-2xl bg-purple-100 p-2.5'>
            <div className='flex items-center gap-2'>
              <img src={assets.user_icon} alt="" className='aspect-square w-[3%]'/>
              <p className='font-medium text-lg'>{item.name}</p>
            </div>
            <div className='flex justify-between mx-10 text-neutral-600'>
                <p className=''>{item.content}</p>
                <p className=''>{moment(item.createdAt).fromNow()}</p>
            </div>
          </div>
          ))}
        <p className='font-bold mb-4.5 mt-12 text-primary'>Add your Comment</p>
        <form onSubmit={addComment} action="" className='flex flex-col gap-4'>
          <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Name' className='outline-none border border-primary p-2.5 w-[60%] rounded-xl' required/>
          <textarea onChange={(e)=>setContent(e.target.value)} value={content} placeholder='Comment' className='outline-none border border-primary p-2.5 w-[60%] rounded-xl h-48' required />
          <button className='rounded-2xl bg-primary text-white p-1 md:p-1.5 cursor-pointer transition-all flex items-center justify-center justify-items-center w-30'>Submit</button>
        </form> 
      </div>

      <div className="shareblog my-24 max-w-3xl md:mx-30 lg:mx-80 ">
        <p className='font-semibold my-4 text-primary'>Share this article on social media</p>
        <div className="flex gap-2">
          <img src={assets.facebook_icon} width={50} alt="" />
          <img src={assets.twitter_icon} width={50} alt="" />
          <img src={assets.googleplus_icon} width={50} alt="" />
        </div>
      </div>

      <Footer/>
    </div>
  ):
  <Loading/>
}

export default Blog
