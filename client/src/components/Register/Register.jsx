import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const history = useNavigate();

    // register
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const sendRequest = async () => {
        await axios.post('https://frozen-tundra-35474.herokuapp.com/users/signup', {
            name: inputs.name,
            email: inputs.email,
            password: inputs.password
        }).then(res => res.data)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history('/payment'))
    }

    return (
        <div className="" id="register">
            <form onSubmit={handleSubmit} className="mb-3 needs-validation" novalidate>
                <div className="form-group mb-3">
                    <input type="text" name="name" id="" className="form-control" value={inputs.name} onChange={handleChange} placeholder="Your name အမည်" required />
                    <div className="invalid-feedback mb-3">
                        required
                    </div>
                </div>
                <div className="form-group mb-3">
                    <input type="email" name="email" id="" value={inputs.email} onChange={handleChange} className="form-control" placeholder="Email" required />
                    <div className="invalid-feedback">
                        required
                    </div>
                </div>
                <div className="form-group mb-3">
                    <input type="text" name="password" id="" value={inputs.password} onChange={handleChange} className="form-control" placeholder="Password" required />
                    <div className="invalid-feedback">
                        required
                    </div>
                </div>
                <button type="submit" className="btn btn-info me-3 form-control">Register</button>
            </form>
            <span className="text-secondary me-2">Already have an account?</span>
            <div className='cursor d-inline'>Login Here</div>
        </div>
    )
}