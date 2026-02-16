import React, { useEffect } from 'react'

const Login = () => {
  const handleSubmit=async(e)=>{
    e.preventDefault()
  }

  const [email,setEmail]=useEffect('')
  const [password,setPassword]=useEffect('')

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-xl'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full py-6 text-center'>
            <h1 className='text-3xl font-bold text-primary/60'><span className='text-primary'>Admin</span> Login</h1>
            <p className='font-light text-neutral-600'>Enter your credentials to access the admin panel</p>
          </div>
          <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600'>
            <div className='flex flex-col'>
              <label>Email</label>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" required placeholder='your email id' className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
            </div>
            <div className='flex flex-col'>
              <label>Password</label>
              <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" required placeholder='your password' className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
            </div>
            <button type='submit' className='rounded-4xl w-full bg-primary text-white p-1 md:p-2.5 cursor-pointer transition-all flex items-center justify-center justify-items-center'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
