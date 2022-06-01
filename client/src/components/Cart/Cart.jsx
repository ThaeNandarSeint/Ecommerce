import React from 'react'
import { Link } from 'react-router-dom'

export const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    console.log(item);
    return (
        <tr>
            <th scope="row"><i className="fa-solid fa-circle-xmark fs-5 text-danger" onClick={()=>removeHandler(item.product)}></i></th>
            <td>
                <img className="cart-img me-2" src={item.imageUrl} alt="" />
                <span>{item.name}</span>
            </td>
            <td id="price">MMK {item.price}</td>
            <td>
                <select style={{width: "50px"}} value={item.qty} onChange={(e)=>qtyChangeHandler(item.product, e.target.value)}>
                    {[...Array(item.countInStock).keys()].map(x=>(
                        <option key={x+1} value={x+1}>{x+1}</option>
                    ))}
                </select>
            </td>
        </tr>
    )
}
