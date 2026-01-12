import { useEffect } from 'react'
import { asynccurrentuser } from "./store/userActions";
import { useDispatch } from 'react-redux';
import Mainroutes from './routes/Mainroutes';
import Navbar from './components/Navbar';

const App = () => {
  // const getproducts = async () => {
  //   try {
  //     const res = await axios.get("/products")
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynccurrentuser())
  }, [] )

  // const data = useSelector((state) => state);
  // console.log(data);

  

  // useEffect(() => {
  //   // getproducts()
  //   dispatch(asyncgetusers())
  // }, [])

  return (
    <div>
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App