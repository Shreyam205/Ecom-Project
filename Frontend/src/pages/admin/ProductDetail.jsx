import { useSelector, useDispatch } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

const ProductDetail = () => {
    const {id} = useParams()
    const products = useSelector((state) => state.productReducer.products)
    const product = products?.find((product) => product.id == id)
    console.log(product);


    const { register, reset, handleSubmit } = useForm({
        defaultValues: {
            image: product?.image,
            title: product?.title,
            price: product?.price,
            category: product?.category,
            description: product?.description,
        }
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const UpdateProductHandler = (product) => {
        dispatch(asyncupdateproduct(product))
    }

    
  return product?(
    <>
    <div className="flex p-5 gap-5">
        <img src={product.image} 
            alt="loading"
            className="w-1/2"
         />
        <div className="flex flex-col gap-5">
            <h1>{product.title}</h1>
            <h2>₹{product.price}</h2>
            <p>{product.description}</p>
            <button>Add to cart</button>
        </div>
    </div>
    <div className='flex justify-center items-center mt-10'>
            <form onSubmit={handleSubmit(UpdateProductHandler)}
                className='flex flex-col lg:w-1/2 w-full gap-5'>
                <input
                    {...register("image")}
                    type="url"
                    className='mb-3 outline-0 border-b p-2 text-xl'
                    placeholder='Enter Image URl' />
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
    </>
  ) : "Loading..."
}

export default ProductDetail