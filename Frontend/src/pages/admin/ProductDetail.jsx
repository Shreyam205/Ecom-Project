import { useSelector, useDispatch } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { asyncdeleteproduct, asyncupdateproduct } from "../../store/actions/productActions"

const ProductDetail = () => {
    const {id} = useParams()
    const {
        productReducer: {products},
        userReducer: {users},
    } = useSelector((state) => state)
    const product = products?.find((product) => product.id == id)
    console.log(product, users);


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
        dispatch(asyncupdateproduct(id, product))
    }

    const DeleteHandler = () => {
        dispatch(asyncdeleteproduct(id))
        navigate("/products")
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
    {users && users?.isAdmin && <div className='flex justify-center items-center p-5 mt-10 gap-10'>
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
                <button className='bg-blue-500 p-2 rounded-md'>Update Product</button>
            </form>
            <button
            className=" bg-red-500 p-2 rounded-md"
            onClick={DeleteHandler}>
                Delete Product
            </button>
        </div>}
    
    </>
  ) : "Loading..."
}

export default ProductDetail