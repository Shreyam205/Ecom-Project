import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asynclogoutuser } from '../store/userActions'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.userReducer.users)
  // console.log(user);

  const LogoutHandler = () => {
      dispatch(asynclogoutuser())
      navigate("/")
  }
  

  return (
    <nav className='flex justify-center lg:justify-end items-center gap-5 lg:gap-10 p-3 bg-zinc-800'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      {user ? (
        <>
          {user && user?.isAdmin && <NavLink to="/admin/create-product">
              Create Product
          </NavLink>}
          
          <NavLink to="/user-profile">Profile</NavLink>
          <button onClick={LogoutHandler}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>)}
    </nav>
  )
}

export default Navbar