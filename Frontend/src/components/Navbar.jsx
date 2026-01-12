import React from 'react'
 import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-center lg:justify-end items-center gap-5 lg:gap-10 p-3 bg-zinc-800'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/help">Help</NavLink>
    </nav>
  )
}

export default Navbar