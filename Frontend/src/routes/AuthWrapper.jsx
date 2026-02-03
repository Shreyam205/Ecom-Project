import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthWrapper = (props) => {
    const {users} = useSelector((state) => state.userReducer)
    return users? props.children : <Navigate to="/login"/>
}

export const Auth2 = (props) => {
  const {users} = useSelector((state) => state.userReducer)
  return users? <Navigate to="/products"/> : props.children
}

export default AuthWrapper