import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { asyncdeleteuser, asyncupdateuser } from '../../store/userActions'

const UserProfile = () => {

    const {
        userReducer: {users},
    } = useSelector((state) => state)


    const { register, reset, handleSubmit } = useForm({
        defaultValues: {
            username: users?.username,
            email: users?.email,
            password: users?.password,
        }
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const UpdateUserHandler = (user) => {
        dispatch(asyncupdateuser(users.id, user))
    }

    const DeleteHandler = () => {
        dispatch(asyncdeleteuser(users.id))
        navigate("/login")
    }

  return users ? (
    <div className='p-3 flex flex-col gap-10 items-center justify-center'>
        <div>
            <h1 className='text-5xl'>{users.username}</h1>
            <small className='font-thin text-2xl'>{users.email}</small>
        </div>
        <form onSubmit={handleSubmit(UpdateUserHandler)}
                className='flex flex-col lg:w-1/2 w-full gap-5'>
                <input
                    {...register("username")}
                    type="text"
                    className='mb-3 outline-0 border-b p-2 text-xl'
                    placeholder='John Doe' />
                <input
                    {...register("email")}
                    type="email"
                    className='mb-3 outline-0 border-b p-2 text-xl'
                    placeholder='john@doe.com' />
                <input
                    {...register("password")}
                    type="password"
                    className='mb-3 outline-0 border-b p-2 text-xl'
                    placeholder='Password' />
                <button className='bg-blue-500 p-2 rounded-md'>
                    Update User
                </button>
            </form>
            <button
            className=" bg-red-500 p-2 rounded-md"
            onClick={DeleteHandler}>
                Delete User
            </button>
    </div>
  ) : <div className='p-3'>Loading...</div>
}

export default UserProfile