import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center mt-10'>
      <form className='flex flex-col lg:w-1/2 w-full gap-5'>
        <input
          type="text"
          className='mb-3 outline-0 border-b p-2 text-xl'
          placeholder='Enter Username' />
        <input
          type="text"
          className='mb-3 outline-0 border-b p-2 text-xl'
          placeholder='Enter Email Address' />
        <input
          type="text"
          className='mb-3 outline-0 border-b p-2 text-xl'
          placeholder='Enter Password' />
      </form>
    </div>
  )
}

export default Login