import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddProduct } from '../../components/Admin/AddProduct'
import { Product } from '../../components/Admin/Product'

// component

// action
import { getProducts as listProducts } from '../../redux/actions/productActions'

export const ProductScreen = () => {
    // toggle
    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState(false)
    const toggleAddBtn = () => {
        setAdd(!add);
    }

    // get products
    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div id="products">
            <div className="d-flex justify-content-between mt-5">
                <h3 className="">Recent Projects</h3>
                <div className="btn btn-info" onClick={toggleAddBtn}>Add Product</div>
            </div>
            {
                add ? (
                    <AddProduct />
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Image</th>
                                <th scope="col">Product Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) :
                                    (products.map((product) =>
                                        <Product
                                            key={product._id}
                                            name={product.name}
                                            description={product.description}
                                            price={product.price}
                                            imageUrl={product.image}
                                            countInStock={product.countInStock}
                                            productId={product._id}
                                        />))
                            }
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}
