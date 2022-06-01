import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ShowOrder } from '../Order/Order'

//component


export const Order = (props) => {
    const { _id, name, email, phone, address, region, township } = props.info;

    // modal
    const [showInfo, setShowInfo] = useState(false);
    const handleCloseInfo = () => setShowInfo(false);
    const handleShowInfo = () => setShowInfo(true);

    const [showInvoice, setShowInvoice] = useState(false);
    const handleCloseInvoice = () => setShowInvoice(false);
    const handleShowInvoice = () => setShowInvoice(true);

    // for invoice
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    const getCartTotal = ()=>{
        return cartItems.reduce((price, item)=>(item.price * item.qty)+ price, 0)
    }

    return (
        <tr>
            <td scope="row">1</td>
            <td>{name}</td>
            <td>16/04/2022</td>
            <td>
                <div className="btn btn-primary me-3" onClick={handleShowInfo}>Information</div>
                {/* information modal */}
                <Modal show={showInfo} onHide={handleCloseInfo} >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h5 className="modal-title" id="exampleModalLabel">CUSTOMER INFORMATION</h5>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="row" style={{ width: "100%" }}>
                            <div className="col-md-6">
                                <p>Customer Name</p>
                                <p>Customer Email</p>
                                <p>Customer Phone</p>
                                <p>Customer Address</p>
                                <p>State/Region</p>
                                <p>Township</p>
                            </div>
                            <div className="col-md-6">
                                <p>{name}</p>
                                <p>{email}</p>
                                <p>{phone}</p>
                                <p>{address}</p>
                                <p>{region}</p>
                                <p>{township}</p>
                            </div>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>

                <div className="btn btn-secondary" onClick={handleShowInvoice}>Invoice</div>

                {/* invoice modal */}
                <Modal show={showInvoice} onHide={handleCloseInvoice} >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h5 className="modal-title" id="exampleModalLabel">INVOICE</h5>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {cartItems.length === 0 ? (
                            <div>Your Cart is empty <Link to='/'>Go Back</Link></div>
                        ) : cartItems.map(item => (
                            <ShowOrder item={item} key={item.product} />
                        ))}

                        <hr />
                        {/* total */}
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <p>Subtotal</p>
                            <p>${getCartTotal()}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p>Shipping</p>
                            <p>0 ks</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p>Total</p>
                            <p>${getCartTotal()}</p>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </td>
            <td>
                <div className="btn btn-success me-3">Complete</div>
                <div className="btn btn-danger">Canceled</div>
            </td>
        </tr>
    )
}
