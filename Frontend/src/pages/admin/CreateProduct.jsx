import { useForm } from 'react-hook-form'
import { nanoid } from "nanoid"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { asynccreateproduct } from '../../store/actions/productActions'

const CreateProduct = () => {
    const { register, reset, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const CreateProductHandler = (product) => {
        product.id = nanoid()
        console.log(product);
        dispatch(asynccreateproduct(product))

        reset()
        navigate("/products")
    }

    return (
        <div className='flex justify-center items-center mt-10'>
            <form onSubmit={handleSubmit(CreateProductHandler)}
                className='flex flex-col lg:w-1/2 w-full gap-5'>
                <input
                    {...register("image")}
                    type="url"
                    className='mb-3 outline-0 border-b p-2 text-xl'
                    placeholder='Enter Image URL' />
                <input
                    {...register("title")}
                    type="text"
                    className='mb-3 outline-0 border-b p-2 text-xl'
                    placeholder='Enter Product Name' />
                <input
                    {...register("price")}
                    type="number"
                    className='mb-3 outline-0 border-b p-2 text-xl'
                    placeholder='Enter Product Price' />
                <textarea
                    {...register("description")}
                    className='mb-3 outline-0 border-b p-2 text-xl'
                    placeholder='Enter Product Description' />
                <input
                    {...register("category")}
                    type="text"
                    className='mb-3 outline-0 border-b p-2 text-xl'
                    placeholder='Enter Category' />
                <button className='bg-blue-500 p-2 rounded-md'>Create Product</button>
            </form>
        </div>
    )
}

export default CreateProduct