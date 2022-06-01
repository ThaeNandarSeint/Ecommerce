import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AddProduct = () => {
    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        price: '',
        countInStock: '',
        image: ''
    })

    const handleChange = (e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const history = useNavigate();

    const sendRequest = async ()=>{
        await axios.post('https://frozen-tundra-35474.herokuapp.com/api/products',{
            name: String(inputs.name),
            description: String(inputs.description),
            price: Number(inputs.price),
            countInStock: Number(inputs.countInStock),
            image: String(inputs.image)
        }).then(res=>res.data)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        sendRequest().then(()=>history('/'))
    }
  return (
    <form className='mx-auto' onSubmit={handleSubmit} style={{width: "70%"}}>
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
            <input className='form-control' name='image' value={inputs.image} onChange={handleChange} placeholder="Image" />
        </div>
        <button className='btn btn-info' type='submit'>Add Product</button>
    </form>
  )
}
