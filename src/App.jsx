import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Navbar } from './Components/ForAll/Navbar'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Dashboard from "./Pages/Dashboard"
import OpenRoute from './Components/core/Auth/OpenRoute'



function App() {


  return (
   <div className=' w-screen min-h-screen bg-[#012D4D] flex flex-col font-Bebas'>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
   </div>
  )
}

export default App
