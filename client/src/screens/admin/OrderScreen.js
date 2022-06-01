import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Order } from '../../components/Admin/Order'

const URL = "http://localhost:5000/api/infos"

const fetchHandler = async () => {
    return await axios.get(URL)
        .then((res) => res.data)
}

export const OrderScreen = () => {

    const [infos, setInfos] = useState()
    useEffect(() => {
        fetchHandler().then((data) => setInfos(data.infos))
    }, [])
    console.log(infos);

    return (
        <div>
            <div className="mt-5">
                <span className="fs-4 me-3">Orders</span>
                <small>15 Orders found</small>
            </div>
            <div className="d-flex justify-content-start mt-3">
                <div className="text-primary me-5">Delivery</div>
                <div className="text-primary">Pickup</div>
            </div>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">View</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {infos && infos.map((info, i) => (
                        <Order info={info} key={i} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
