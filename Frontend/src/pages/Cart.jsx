import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncupdateuser } from '../store/userActions'

const Cart = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.userReducer.users)
    const products = useSelector((state) => state.productReducer.products)

    const IncreaseQuantityHandler = (index, product) => {
        const copyuser = { ...users, cart: [...users.cart] }
        copyuser.cart[index] = {
            ...copyuser.cart[index],
            quantity: copyuser.cart[index].quantity + 1
        }
        dispatch(asyncupdateuser(copyuser.id, copyuser))
    }

    const DecreaseQuantityHandler = (index, product) => {
        const copyuser = { ...users, cart: [...users.cart] }

        if (users.cart[index].quantity > 0) {
            copyuser.cart[index] = {
                ...copyuser.cart[index],
                quantity: copyuser.cart[index].quantity - 1
            }
        }else{
            copyuser.cart.splice(index, 1) 
        }
        dispatch(asyncupdateuser(copyuser.id, copyuser))
    }

    const cartItems = users.cart.map((c, index) => {
        return(
        <li className='flex p-5 items-center justify-between bg-zinc-800 mb-10' key={c.product.id}>
            <img className='w-30' src={c.product.image} alt="" />
            <span>{c.product.title}</span>
            <span>{c.product.price}</span>
            <p>
                <button 
                onClick={()=> DecreaseQuantityHandler(index, c)}>-</button>
                <span>{c.quantity}</span>
                <button
                onClick={()=> IncreaseQuantityHandler(index, c)}>+</button>
            </p>
        </li>)
    })

    return <ul className='p-5'>{cartItems}</ul>
}

export default Cart