import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateCar = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/car/${id}`

        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))

    }, [])
    const handleQuantity = (event) => {
        event.preventDefault();
        const previousQuantity = parseInt(car.quantity)

        const quantity = parseInt(event.target.quantity.value);
        const updateQuantity = previousQuantity + quantity
        console.log('quantity', quantity)
        const url = `http://localhost:5000/update/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ quantity: updateQuantity })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    const handleDelivered = () => {
        const previousQuantity = parseInt(car.quantity)
        const updateQuantity = previousQuantity - 1;
        const url = `http://localhost:5000/update/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ quantity: updateQuantity })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (

        <div>
            <h1>update user: {car.name}</h1>
            <form onSubmit={handleQuantity}>
                <input className='border' name='quantity' type="number" />
                <button type='submit'>Add Quantity</button>
            </form>
            <table className='border w-100'>
                <thead>

                    <tr>
                        <th>Image</th>

                        <th>Quantity</th>
                        <th>SupplierName</th>
                        <th>Price</th>
                        <th>id</th>
                        <th>Delivered</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img height={"50px"} src={car.image} alt="" /></td>
                        <td>{car.quantity}</td>
                        <td>{car.SupplierName}</td>
                        <td>{car.price}</td>
                        <td>{car.id}</td>
                        <td><button onClick={handleDelivered}>Delivered</button></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default UpdateCar;