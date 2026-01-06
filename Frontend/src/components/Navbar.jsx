import React from 'react'
 import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-end items-center lg:gap-10'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/help">Help</NavLink>
    </nav>
  )
}

export default Navbar