import React from 'react'
import Home from './components/Home'
import Homi from './components/Homi'
import Blog from './components/Blog'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Homi />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
