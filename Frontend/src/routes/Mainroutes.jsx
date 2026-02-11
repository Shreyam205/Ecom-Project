import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateProduct from "../pages/admin/CreateProduct";
import ProductDetail from "../pages/admin/ProductDetail";
import PageNotFound from '../pages/PageNotFound'
import UserProfile from "../pages/user/UserProfile";
import AuthWrapper, { Auth2 } from "./AuthWrapper";
import Cart from "../pages/Cart";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />

      <Route
        path="/login"
        element={
          <Auth2>
            <Login />
          </Auth2>
        } />
      <Route
        path="/register"
        element={
          <Auth2>
            <Register />
          </Auth2>
        } />

      <Route
        path="/admin/create-product"
        element={
          <AuthWrapper>
            <CreateProduct />
          </AuthWrapper>
        } />
      <Route
        path="/user-profile"
        element={
          <AuthWrapper>
            <UserProfile />
          </AuthWrapper>
        } />
      <Route
        path="/product/:id"
        element={
          <AuthWrapper>
            <ProductDetail />
          </AuthWrapper>
        } />
      <Route
        path="/cart"
        element={
          <AuthWrapper>
            <Cart />
          </AuthWrapper>
        } />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default Mainroutes