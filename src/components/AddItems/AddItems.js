import React from 'react';

const AddItems = () => {
    return (
        <div className='container text-center my-5'>
            <form className='w-25 mx-auto' >
                <h1 className='text-dark fw-b '>Add Your Item</h1>
                <input type="text" name='name' placeholder='Name' /> <br />
                <input type="email" name='email' placeholder='Your Email' required /> <br />
                <input type="text" name='password' placeholder='Description' required /> <br />
                <input type="text" name='password' placeholder='Quantity' required /> <br />
                <input type="text" name='password' placeholder='Price' required /> <br />
                <button className='signup-submit' type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddItems;