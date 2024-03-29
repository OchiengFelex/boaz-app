import { useState } from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element ={<About/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
