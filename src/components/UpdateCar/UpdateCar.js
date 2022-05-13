import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const UpdateCar = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        const url = `http://localhost:5000/car/${id}`

        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))

    }, [updated])
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
                if (data.modifiedCount) {
                    setUpdated(!updated);
                }
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
                if (data.modifiedCount) {
                    setUpdated(!updated);
                }
            })
    }

    return (
        <div className='mx-auto w-100 container'>
            <div class="card mb-3 mx-auto flex "  >
                <div class="row align-items-center g-0">
                    <div class="col-md-6">
                        <img src={car.image} height={'300px'} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-6">
                        <div class="card-body text-start ">
                            <h5 class="card-title">Update Car</h5>
                            <p class="card-text">{car.description}</p>
                            <p class="card-text">{car.name}</p>
                            <p class="card-text">price:{car.price}</p>
                            <p class="card-text">Quantity:{car.quantity}</p>
                            <button onClick={handleDelivered} className='btn btn-danger'>Delivered</button>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <form onSubmit={handleQuantity}>
                                <input className='border border-primary outline-none' name='quantity' type="number" />
                                <input className='btn btn-primary' type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UpdateCar;