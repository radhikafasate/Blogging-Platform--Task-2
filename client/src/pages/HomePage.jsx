import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <BlogList/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default HomePage