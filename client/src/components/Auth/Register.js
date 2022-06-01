import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Register = () => {
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
        await axios.post('http://localhost:4000/admin/signup', {
            name: inputs.name,
            email: inputs.email,
            password: inputs.password
        }).then(res => res.data)
    }

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history('/dashboard'))
    }
    return (
        <form onSubmit={handleSubmit} className='mx-auto' style={{ width: '70%' }}>
            <input type='text' className='form-control mb-3' name='name' value={inputs.name} onChange={handleChange} placeholder='Name' />
            <input type='email' className='form-control mb-3' name='email' value={inputs.email} onChange={handleChange} placeholder='Email' />
            <input type='password' className='form-control mb-3' name='password' value={inputs.password} onChange={handleChange} placeholder='password' />

            <button className='btn btn-info' type='submit'>Submit</button>
        </form>
    )
}