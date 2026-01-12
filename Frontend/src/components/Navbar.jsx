import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const user = useSelector((state) => state.userReducer.users)
  // console.log(user);

  return (
    <nav className='flex justify-center lg:justify-end items-center gap-5 lg:gap-10 p-3 bg-zinc-800'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      {user ? (
        <>
          <NavLink to="/admin/create-product">Create Product</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>)}
    </nav>
  )
}

export default Navbar