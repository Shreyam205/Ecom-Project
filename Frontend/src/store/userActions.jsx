import axios from '../api/axiosconfig'
import { loaduser } from './reducers/userSlice';

export const asyncgetusers = () => async (dispatch, getState) => {
  try {

    console.log(getState());

    const res = await axios.get("/users")
    dispatch(loaduser(res.data))
  } catch (error) {
    console.log(error);
  }
}


export const asyncregisteruser = (user) => async(dispatch, getState) => {
  try {
    const res = await axios.post("/users", user)
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
