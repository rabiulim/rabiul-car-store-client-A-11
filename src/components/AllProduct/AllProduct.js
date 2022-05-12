import React from 'react';


const AllProduct = ({ product }) => {
    const { id, name, price, description, image, quantity, SupplierName } = product;
    return (
        <div className='product-card'>
            <img className='w-100' src={image} alt="" />
            <h2>Name: {name}</h2>
            <p className='fs-5'><small>{description}</small></p>
            <p className='fs-4'>Price: {price}</p>
            <p className='fs-4'>quantity: {quantity}</p>
            <p className='fs-4'>SupplierName: {SupplierName}</p>
            <button className='btn btn-danger text-white fs-5'>Delete</button>
        </div>
    );
};

export default AllProduct;