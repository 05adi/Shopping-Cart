import React from 'react'
import { NavBar } from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { useSelector } from 'react-redux'
export const App = () => {
  const {cart} = useSelector( (state) => state);
  
  return (
    <div>
      <nav className='sticky top-0 z-10'>
        <NavBar />
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>

  )
}
