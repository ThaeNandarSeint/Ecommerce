import axios from "axios";
import React, { useEffect, useState } from "react"
import { Modal } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom'

export const Product = ({ productId, name, imageUrl, description, price, countInStock }) => {
    // modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // redirect
    const history = useNavigate()
    // handle delete
    const handleDelete = async () => {
        await axios
            .delete(`https://frozen-tundra-35474.herokuapp.com/api/products/${productId}`)
            .then((res) => res.data)
            .then(() => history("/"))
            .then(() => history("/dashboard"))
    }
    const [inputs, setInputs] = useState({
        productId: productId,
        name: name,
        imageUrl: imageUrl,
        description: description,
        price: price,
        countInStock: countInStock
    })

    // update    
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        console.log(inputs);
    }    

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history('/'))
    }

    const sendRequest = async () => {
        await axios.put(`https://frozen-tundra-35474.herokuapp.com/api/products/${productId}`, {
            name: String(inputs.name),
            description: String(inputs.description),
            price: Number(inputs.price),
            countInStock: Number(inputs.countInStock),
            imageUrl: String(inputs.imageUrl)
        }).then((res) => res.data)
    }

    return (
        <tr>
            <th scope="row">1</th>
            <td>
                <img className="product-img" src={imageUrl} alt="" />
            </td>
            <td>{name}</td>
            <td>${price}</td>
            <td>
                <i className="fa-solid fa-eye me-3 fs-5"></i>
                <div className="fa-solid fa-pen-to-square me-3 fs-5 text-warning" onClick={handleShow}></div>
                {/* invoice modal */}
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form onSubmit={handleSubmit} className="needs-validation">
                            <div className='form-group mb-3'>
                                <input className='form-control' name='name' value={inputs.name} onChange={handleChange} placeholder="Product Name" />
                            </div>
                            <div className='form-group mb-3'>
                                <input className='form-control' name='description' value={inputs.description} onChange={handleChange} placeholder="Product description" />
                            </div>
                            <div className='form-group mb-3'>
                                <input className='form-control' type="number" name='price' value={inputs.price} onChange={handleChange} placeholder="Price" />
                            </div>
                            <div className='form-group mb-3'>
                                <input className='form-control' type="number" name='countInStock' value={inputs.countInStock} onChange={handleChange} placeholder="Count In Stock" />
                            </div>
                            <div className='form-group mb-3'>
                                <input className='form-control' name='imageUrl' value={inputs.imageUrl} onChange={handleChange} placeholder="Image" />
                            </div>
                            <button type="submit" className="btn btn-info me-3">Edit</button>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
                <i className="fa-solid fa-trash-can me-3 fs-5 text-danger" onClick={handleDelete}></i>
            </td>
        </tr>
    )
}
