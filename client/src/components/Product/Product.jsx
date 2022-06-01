import React from "react"
import { useDispatch } from "react-redux";
import {Link, useNavigate} from 'react-router-dom'

// action
import { addToCart } from '../../redux/actions/cartActions'

export const Product = ({ productId, name, image, description, price }) => {

    return (
        <div className="border trend-box mt-3">
            <img src={image} className="trend-img" alt="..." />
            <div className="text-center p-2">
                <h5 className="">{name}</h5>
                <h5 className="text-danger">MMK {price}</h5>
                <div className="d-flex justify-content-evenly">
                    <img className="trend-icon" src="/images/heart1.png" alt="" />
                    <img className="trend-icon product" src="/images/cart1.png" alt="" />
                    <Link to={`/product/${productId}`}><img className="trend-icon" src="/images/view.png" alt="" /></Link>
                </div>
            </div>
        </div>
    )
}
