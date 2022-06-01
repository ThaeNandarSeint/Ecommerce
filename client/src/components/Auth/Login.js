import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

export const Login = () => {
    const [user, setUser] = useState({})
    const auth = useAuth()

    const [inputs, setInputs] = useState({
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
        await axios.post('http://localhost:5000/api/login', {
            email: inputs.email,
            password: inputs.password
        }).then(res => res.data).then((data)=>setUser(data.admin))
    }

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();        
        sendRequest().then(()=>auth.login(user)).then(() => history('/dashboard'))
    }
    
    return (
        <div className="mb-5">
            <h1 class="text-center text-danger my-3">You need to login first!</h1>
            <form onSubmit={handleSubmit} className='mx-auto' style={{ width: '70%' }}>
                <input type='email' className='form-control mb-3' name='email' value={inputs.email} onChange={handleChange} placeholder='Email' />
                <input type='password' className='form-control mb-3' name='password' value={inputs.password} onChange={handleChange} placeholder='password' />

                <button className='btn btn-info' type='submit'>Login</button>
            </form>
        </div>
    )
}