import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { OrderScreen } from '../../screens/admin/OrderScreen'
import { ProductScreen } from '../../screens/admin/ProductScreen'

export const Dashboard = () => {
    const [products, setProducts] = useState(true)
    const [orders, setOrders] = useState(false)

    const showProduct = ()=>{
        setProducts(true)
        setOrders(false)
    }
    const showOrder = ()=>{
        setOrders(true)
        setProducts(false)
    }
    return (
        <div className="row admin-container">
            <div className="col-md-2 sidebar">
                <Link className="fs-2 text-decoration-none" to="/dashboard">Ecommerce</Link>
                <div className="d-flex flex-column justify-content-between">
                    <div onClick={showProduct} className="d-flex justify-content-evenly sidebar-icon dashboard">
                        <i className="fa-brands fa-fort-awesome fs-3"></i>
                        <h5 className="mt-2">Dashboard</h5>
                    </div>
                    <div onClick={showProduct} className="d-flex justify-content-evenly sidebar-icon">
                        <i className="fa-solid fa-users fs-3"></i>
                        <h5 className="mt-2">Customers</h5>
                    </div>
                    <div onClick={showProduct} className="d-flex justify-content-evenly sidebar-icon">
                        <i className="fa-solid fa-clipboard-list fs-3"></i>
                        <h5 className="mt-2">Products</h5>
                    </div>
                    <div onClick={showOrder} className="d-flex justify-content-evenly sidebar-icon">
                        <i className="fa-solid fa-bag-shopping fs-3"></i>
                        <h5 className="mt-2">Orders</h5>
                    </div>
                    <div className="d-flex justify-content-evenly sidebar-icon">
                        <i className="fa-solid fa-user fs-3"></i>
                        <h5 className="mt-2">Accounts</h5>
                    </div>
                </div>
            </div>
            <div className="col-md-10">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Dashboard</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex mx-auto">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <img className="rounded-circle me-3" src="/images/moon.jpeg" alt="" style={{width: "50px", height: "50px"}} />
                                <h4 className="mt-3">Admin</h4>
                        </div>
                    </div>
                </nav>
                <div className="d-flex justify-content-evenly mt-3">
                    <div onclick="location.href='admin_home'" className="cursor d-flex justify-content-evenly align-items-center admin-box" style={{width: "30%"}}>
                        <div className="my-3">
                            <h1 className="text-danger">54</h1>
                            <p className="text-center">Customers</p>
                        </div>
                        <i className="fa-solid fa-users fs-2"></i>
                    </div>
                    <div onclick="location.href='admin_home'" className="cursor d-flex justify-content-evenly align-items-center admin-box" style={{width: "30%"}}>
                        <div className="">
                            <h1 className="text-danger">79</h1>
                            <p className="text-center">Products</p>
                        </div>
                        <i className="fa-solid fa-clipboard-list fs-2"></i>
                    </div>
                    <div onclick="location.href='admin_order'" className="cursor d-flex justify-content-evenly align-items-center admin-box" style={{width: "30%"}}>
                        <div className="">
                            <h1 className="text-danger">124</h1>
                            <p className="text-center">Orders</p>
                        </div>
                        <i className="fa-solid fa-bag-shopping fs-2"></i>
                    </div>
                </div>
                {
                    products ? (<ProductScreen />) : (<OrderScreen />)
                }            
            </div>
        </div>
    )
}
