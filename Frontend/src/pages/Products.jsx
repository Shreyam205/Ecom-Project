import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Products = () => {
  const products = useSelector((state) => state.productReducer.products)
  console.log(products);

  const renderproduct = products.map(product => {
    return <div className='w-[15%] p-5 border rounded-md' key={product.id}>
      <img className='w-full h-[10em] object-cover' src={product.image} alt="Loading Image..." />
      <h1>{product.title}</h1>
      <small>{product.description.slice(0, 20)}...</small>
      <p>{product.price}</p>
      <button>Add to Cart</button>
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