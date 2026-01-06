import React, { useEffect } from 'react'
import axios from './api/axiosconfig'
import { asyncgetusers } from "./store/userActions";
import { useDispatch, useSelector } from 'react-redux';
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

  const data = useSelector((state) => state  );
  console.log(data);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    // getproducts()
    dispatch(asyncgetusers())
  }, [])
  
  return (<div>
    <Navbar/>
    <Mainroutes/>
    </div>
  )
}

export default App