import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

//component
import { ShowOrder } from '../../components/Order/Order'

// action
import { addToCart, removeFromCart } from '../../redux/actions/cartActions'

export const ShowOrderScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    const getCartTotal = ()=>{
        return cartItems.reduce((price, item)=>(item.price * item.qty)+ price, 0)
    }

    return (
        <div className="col-md-6 mb-5">
            <span className="fs-5 me-3">YOUR ORDER</span>
            <small onclick="showCart()" className="text-danger cursor">EDIT SHOPPING CART</small>
            <hr />

            {cartItems.length === 0 ? (
                <div>Your Cart is empty <Link to='/'>Go Back</Link></div>
            ) : cartItems.map(item => (
                <ShowOrder item={item} key={item.product} />
            ))}

            <hr />
            {/* total */}
            <div className="d-flex justify-content-between align-items-center mt-3">
                <p>Subtotal</p>
                <p>MMK {getCartTotal()}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <p>Shipping</p>
                <p>MMK 0</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <p>Total</p>
                <p>MMK {getCartTotal()}</p>
            </div>
        </div>
    )
}
