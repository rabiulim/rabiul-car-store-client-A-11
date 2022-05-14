import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const UpdateCar = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        const url = `https://immense-island-40841.herokuapp.com/car/${id}`

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
        const url = `https://immense-island-40841.herokuapp.com/update/${id}`
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
        const url = `https://immense-island-40841.herokuapp.com/update/${id}`
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
        <div className='mx-auto w-100 container my-5'>
            <div class="card mb-3 mx-auto flex "  >
                <div class="row align-items-center g-0">
                    <div class="col-md-6">
                        <img src={car.image} class="img-fluid rounded-start" alt="..." />
                        <p className='card-text fs-5'>Id:{car._id}</p>
                    </div>
                    <div class="col-md-6">
                        <div class="card-body text-start ">
                            <h5 class="card-title fs-4">Update Your Inventory</h5>
                            <p class="card-text fs-5">{car.description}</p>
                            <p class="card-text fs-5"> Name{car.name}</p>
                            <p class="card-text fs-5">price:{car.price}</p>
                            <p class="card-text fs-5">Quantity:{car.quantity}</p>
                            <p class="card-text fs-5">Supplier:{car.SupplierName}</p>
                            <button onClick={handleDelivered} className='btn btn-danger'>Delivered</button>

                            <form onSubmit={handleQuantity}>
                                <input className='border border-primary outline-none' name='quantity' type="number" placeholder='Enter Number to restock' />
                                <input className='btn btn-danger' type="submit" value="Restock" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UpdateCar;