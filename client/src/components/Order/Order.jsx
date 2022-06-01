import React from 'react'

export const ShowOrder = ({ item }) => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mt-2">
                <img className="cart-img me-2" src={item.imageUrl} alt="" />
                <p>{item.name}</p>
                <p>MMK {item.price}</p>
            </div>
        </div>
    )
}
