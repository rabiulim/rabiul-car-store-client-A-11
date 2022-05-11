import React from 'react';

const Product = ({ product }) => {
    const { id, name, price, discription, image, quantity } = product;
    return (
        <div>
            <img className='w-100' src={image} alt="" />
            <h2>{name}</h2>
            <p className='fs-4'>Service-fee: {price}</p>
            <p className='fs-5'><small>{discription}</small></p>
            <button className='btn btn-danger text-white fs-5'>Delivered</button>
        </div>
    );
};

export default Product;