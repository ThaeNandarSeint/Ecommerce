import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShowOrderScreen } from '../Order/OrderScreen'

export const CustomerInfoScreen = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        region: '',
        township: ''
    })

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const history = useNavigate();

    const sendRequest = async () => {
        await axios.post('https://frozen-tundra-35474.herokuapp.com/api/infos/', {
            name: String(inputs.name),
            email: String(inputs.email),
            phone: String(inputs.phone),
            address: String(inputs.address),
            region: String(inputs.region),
            township: String(inputs.township)
        }).then(res => res.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history('/'))
    }
    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className="col-md-6" id="form">
                    <span className="fs-5">Information</span>
                    <hr />

                    {/* form */}
                    <form onSubmit={handleSubmit} className="needs-validation" novalidate>                        
                        <div className="form-group mb-3">
                            <label for="name" className="form-label">Your Name</label>
                            <input type="text" name="name" id="" className="form-control" placeholder="Your Name" value={inputs.name} onChange={handleChange} required />
                            <div className="invalid-feedback">
                                required
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label for="name" className="form-label">Contact Information</label>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="email" name="email" value={inputs.email} onChange={handleChange} className="form-control" placeholder="Your  Email" required />
                                    <div className="invalid-feedback">
                                        required
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="phone" value={inputs.phone} onChange={handleChange} className="form-control" placeholder="Phone" required />
                                </div>
                                <div className="invalid-feedback">
                                    required
                                </div>
                            </div>
                        </div>
                        <label for="name" className="form-label">Details</label>
                        <div className="form-group mb-3">
                            <input type="text" name="address" value={inputs.address} onChange={handleChange} className="form-control" placeholder="Delivery Address ပို့ပေးရမည့်လိပ်စာ" required />
                            <div className="invalid-feedback">
                                required
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" name="region" value={inputs.region} onChange={handleChange} className="form-control" placeholder="State/Region" required />
                                    <div className="invalid-feedback">
                                        required
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="township" value={inputs.township} onChange={handleChange} className="form-control" placeholder="Township" required />
                                    <div className="invalid-feedback">
                                        required
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success" id="continue">Continue to payment</button>
                    </form>
                </div>
                <ShowOrderScreen />
            </div>
        </div>
    )
}
