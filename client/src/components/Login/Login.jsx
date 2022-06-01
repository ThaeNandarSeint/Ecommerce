import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const history = useNavigate();
    // login
    const [inputLogins, setInputLogins] = useState({
        email: '',
        password: ''
    })
    const handleLoginChange = (e) => {
        setInputLogins((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const sendLoginRequest = async () => {
        await axios.post('https://frozen-tundra-35474.herokuapp.com/users/login', {
            email: inputLogins.email,
            password: inputLogins.password
        }).then(res => res.data)
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        sendLoginRequest().then(() => history('/payment'))
    }

    // logout 
    const logoutRequest = async () => {
        const res = await axios.post('https://frozen-tundra-35474.herokuapp.com/users/logout', null)
        if (res.status == 200) {
            return res
        }

        return new Error("Unable to logout. Please try again")
    }
    const handleLogout = () => {
        logoutRequest().then(() => history('/'))
    }

    return (
        <div className="" id="login">
            <form onSubmit={handleLoginSubmit} className="mb-3 needs-validation" novalidate>
                <div className="form-group mb-3">
                    <input type="email" name="email" onChange={handleLoginChange} value={inputLogins.email} className="form-control" placeholder="Email" required />
                    <div className="invalid-feedback">
                        required
                    </div>
                </div>
                <div className="form-group mb-3">
                    <input type="text" name="password" onChange={handleLoginChange} value={inputLogins.password} className="form-control" placeholder="Password" required />
                    <div className="invalid-feedback">
                        required
                    </div>
                </div>
                <button type="submit" className="btn btn-info me-3 form-control">Login</button>
            </form>
            <div className="mb-2">
                <span className="text-secondary me-2">New customer?</span>
                <div className='cursor d-inline'>Create your account</div>
            </div>
            <div className='mb-2'>
                <span className="text-secondary me-2">Lost password?</span>
                <span>Recover password</span>
            </div>
            <div className='cursor' onClick={handleLogout}>
                <span>Logout</span>
            </div>
        </div>
    )
}
