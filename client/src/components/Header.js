import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import axios from 'axios'
import { useSelector } from 'react-redux'

// components
import { Carousel } from './Carousel/Carousel'
import { Search } from './Search/Search'
import { Login } from './Login/Login'
import { Register } from './Register/Register'

export const Header = () => {
    // increase cart count
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    // toggle
    const [login, setLogin] = useState(false)
    const showLogin = () => {
        setLogin(true);
    }
    const showRegister = () => {
        setLogin(false)
    }
    // modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light header">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Ecommerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Hot Deals</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Category</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="cursor me-3 p-2" onClick={handleShow}>
                            <i className="fa-solid fa-user d-block text-center text-danger"></i>
                            <small>Account</small>
                        </div>
                        {/* modal */}
                        <Modal show={show} onHide={handleClose} >
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    {/* <h5 className="modal-title" id="modalText">REGISTER</h5> */}
                                </Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                {
                                    login ? (
                                        <Login />
                                    ) : (
                                        <Register />
                                    )
                                }

                            </Modal.Body>

                            <Modal.Footer>

                            </Modal.Footer>
                        </Modal>

                        <div className="cursor me-3 p-2" onclick="location.href='/favourite'">
                            <i className="fa-solid fa-heart d-block text-center text-danger"></i>
                            <small>Favourite</small>
                        </div>
                        <Link className="cursor me-3 p-2" to='/cart'>
                            <div style={{ position: 'relative' }}>
                                <span className="text-decoration-none cartCount">{getCartCount()}</span>
                                <i className="fa-solid fa-cart-arrow-down d-block text-center text-danger"></i>
                                <small>Cart</small>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="" style={{ position: "relative" }}>
                {/* carousel */}
                <Carousel />
                {/* search */}
                <Search />
                {/* side text */}
                <div className="text-purple" style={{ width: "500px", position: "absolute", top: "25%", left: "15%" }}>
                    <h1>SHOP COMPUTERS & ACCESSORIES</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis facilis dolorem voluptate porro ducimus voluptatum cum aliquam sint excepturi sapiente!</p>
                    <a href="#" className="btn btn-info">View Item</a>
                </div>
            </div>
        </div>
    )
}