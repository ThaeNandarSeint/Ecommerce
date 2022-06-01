import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// component
import { Product } from '../../components/Product/Product'

// action
import { getProducts as listProducts } from '../../redux/actions/productActions'

export const HomeScreen = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className="mb-5">
            <h2 className="text-center mt-5 mb-3 text-green">Best-selling <span className="text-danger">Products</span></h2>
            <div className='container d-flex flex-wrap justify-content-between'>
                {
                    loading ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) :
                        (products.map((product) =>
                            <Product
                                key={product._id}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                image={product.image}
                                productId={product._id}
                            />))
                }
            </div>
        </div>
    )
}