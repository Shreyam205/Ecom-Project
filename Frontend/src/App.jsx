import React, { useEffect } from 'react'
import axios from './api/axiosconfig'
import { asyncgetusers } from "./store/userActions";
import { useDispatch, useSelector } from 'react-redux';

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
  
  return (
    <div>App</div>
  )
}

export default App