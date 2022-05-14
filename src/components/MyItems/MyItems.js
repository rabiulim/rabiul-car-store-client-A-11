import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [products, setProducts] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;
    const url = `http://localhost:5000/productsbyuser?email=${email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    const handleDelete = (id) => {
        console.log(id)
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting user with id, ', id);
            const url = `http://localhost:5000/car/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <table className='border w-100'>
                <thead>

                    <tr>
                        <th>Image</th>

                        <th>Car Name</th>
                        <th>Quantity</th>
                        <th>SupplierName</th>
                        <th>Price</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr>
                            <td><img height={"50px"} src={product.image} alt="" /></td>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.SupplierName}</td>
                            <td>{product.price}</td>
                            <td><button onClick={() => handleDelete(product._id)} className='btn btn-danger'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyItems;