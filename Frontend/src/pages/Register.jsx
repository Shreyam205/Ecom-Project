import { useForm } from 'react-hook-form'
import { nanoid } from "nanoid"
import { Link, useNavigate } from 'react-router-dom'
import { asyncregisteruser } from '../store/userActions'
import {useDispatch} from 'react-redux'

const Register = () => {

  const { register, reset, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const RegisterHandler = (user) => {
    user.id = nanoid()
    user.isAdmin = false
    console.log(user);
    dispatch(asyncregisteruser(user))

    reset()
    navigate("/login")
  }
  
  return (
    <div className='flex justify-center items-center mt-10'>
      <form onSubmit={handleSubmit(RegisterHandler)}
        className='flex flex-col lg:w-1/2 w-full gap-5'>
        <input
          {...register("username")}
          type="text"
          className='mb-3 outline-0 border-b p-2 text-xl'
          placeholder='Enter Username' />
        <input
        {...register("email")}
          type="email"
          className='mb-3 outline-0 border-b p-2 text-xl'
          placeholder='Enter Email Address' />
        <input
        {...register("password")}
          type="password"
          className='mb-3 outline-0 border-b p-2 text-xl'
          placeholder='Enter Password' />
        <button className='bg-blue-500 p-2 rounded-md'>Register</button>
        <p className='flex justify-end gap-5'>Already have an account? 
          <Link className='text-blue-500' to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Register