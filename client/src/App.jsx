import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Blog from './pages/Blog'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/AddBlog'
import Comments from './pages/admin/Comments'
import ListBlog from './pages/admin/ListBlog'
import Login from './components/admin/Login'
import 'quill/dist/quill.snow.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/blog/:id' element={<Blog/>}></Route>
        <Route path='/admin' element={true?<Layout/>:<Login/>}>
          <Route index element={<Dashboard/>}></Route>
          <Route path='addBlog' element={<AddBlog/>}></Route>
          <Route path='listBlog' element={<ListBlog/>}></Route>
          <Route path='comments' element={<Comments/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
