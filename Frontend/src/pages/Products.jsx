import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {asyncupdateuser} from '../store/userActions'

const Products = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.userReducer.users)
  const products = useSelector((state) => state.productReducer.products)

  const AddtoCartHandler = (product) => {
    const copyuser = { ...users, cart: [...users.cart] } //deep-copy
    const x = copyuser.cart.findIndex((c) => c?.product?.id == product.id)

    if (x == -1) {
      copyuser.cart.push({ product, quantity: 1 })
    } else {
      copyuser.cart[x] = {
        product,
        quantity: copyuser.cart[x].quantity + 1,
      }
    }
    dispatch(asyncupdateuser(copyuser.id, copyuser))
  }

  const renderproduct = products.map(product => {
    return <div className='w-[15%] p-5 border rounded-md' key={product.id}>
      <img className='w-full h-[10em] object-cover' src={product.image} alt="Loading Image..." />
      <h1>{product.title}</h1>
      <small>{product.description.slice(0, 20)}...</small>
      <p>{product.price}</p>
      <button onClick={() => AddtoCartHandler(product)}>Add to Cart</button>
      <Link className=' block w-full text-center' to={`/product/${product.id}`}>More Info</Link>
    </div>
  })

  return (
    products.length > 0 ?
      <div className='overflow-hidden flex flex-wrap p-3 gap-5 justify-center'>{renderproduct}</div>
      : <div className='p-3'>Loading...</div>
  )
}

export default Products