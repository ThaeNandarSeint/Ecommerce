import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

//component
import { CartItem } from '../../components/Cart/Cart'

// action
import { addToCart, removeFromCart } from '../../redux/actions/cartActions'

export const CartScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const removeHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const getCartTotal = () => {
        return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0)
    }

    return (
        <div className="container mt-4 mb-5" id="cart">
            <p className="">You have <span className="text-danger">3 items</span> in your order</p>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">NAME</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">QUANTITY</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.length === 0 ? (
                        <div>Your Cart is empty <Link to='/'>Go Back</Link></div>
                    ) : cartItems.map(item => (
                        <CartItem item={item} key={item.product} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler} />
                    ))}
                </tbody>
            </table>

            <p className="text-end" style={{ transform: "translateX(-68px)" }}>Total: <span className="fs-3 ms-3">MMK {getCartTotal()}</span></p>
            <div className="d-flex justify-content-between">
                <Link to='/'>
                    <div className="btn btn-success"><i className="fa-solid fa-angle-left me-3"></i>Continue Shopping</div>
                </Link>
                <Link to='/info'>
                    <div className="btn btn-success">Shipping Info <i className="fa-solid fa-angle-right ms-3"></i></div>
                </Link>
            </div>
        </div>
    )
}
