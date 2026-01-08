import { useForm } from 'react-hook-form'
import { nanoid } from "nanoid"
import { Link } from 'react-router-dom'

const Login = () => {

  const { register, reset, handleSubmit } = useForm()

  const LoginHandler = (user) => {
    console.log(user);
  }
  
  return (
    <div className='flex justify-center items-center mt-10'>
      <form onSubmit={handleSubmit(LoginHandler)}
        className='flex flex-col lg:w-1/2 w-full gap-5'>
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
        <button className='bg-blue-500 p-2 rounded-md'>Login</button>
        <p className='flex justify-end gap-5'>Don't have an account? 
          <Link className='text-blue-500' to="/register">Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login