import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {asyncupdateuser} from '../store/userActions'

const Products = () => {
  const dispatch = useDispatch()
  const {
    userReducer: { users },
    productReducer: { products },
  } = useSelector((state) => state)

  const AddtoCartHandler = (id) => {
    const copyuser = { ...users, cart: [...users.cart] }
    const x = copyuser.cart.findIndex((c) => c.productId == id)

    if (x == -1) {
      copyuser.cart.push({ productId: id, quantity: 1 })
    } else {
      copyuser.cart[x] = {
        productId: id,
        quantity: copyuser.cart[x].quantity + 1,
      }
    }
    console.log(copyuser);
    dispatch(asyncupdateuser(copyuser.id, copyuser))
  }

  const renderproduct = products.map(product => {
    return <div className='w-[15%] p-5 border rounded-md' key={product.id}>
      <img className='w-full h-[10em] object-cover' src={product.image} alt="Loading Image..." />
      <h1>{product.title}</h1>
      <small>{product.description.slice(0, 20)}...</small>
      <p>{product.price}</p>
      <button onClick={() => AddtoCartHandler(product.id)}>Add to Cart</button>
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