import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddItems = () => {
    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const email = event.target.email.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const SupplierName = event.target.SupplierName.value;


        const item = {
            name, email, description, price, quantity, SupplierName, image
        };

        // send data to the server
        fetch('http://localhost:5000/car', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast('car successfully added')
                event.target.reset();
            })
    }
    return (
        <div className='container text-center my-5'>
            <form onSubmit={handleAddItem} className='w-25 mx-auto' >
                <h1 className='text-dark fw-b '>Add Your Item</h1>
                <input type="text" name='image' placeholder='Image URL' /> <br />
                <input type="text" name='name' placeholder='Name' /> <br />
                <input type="email" name='email' placeholder='Your Email' required /> <br />
                <input type="text-area" name='description' placeholder='Description' required /> <br />
                <input type="text" name='price' placeholder='Price' required /> <br />
                <input type="text" name='quantity' placeholder='Quantity' required /> <br />
                <input type="text" name='price' placeholder='Price' required /> <br />
                <input type="text" name='SupplierName' placeholder='SupplierName' required /> <br />
                <button className='addItem' type="submit">Add Item</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddItems;