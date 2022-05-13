import React, { useEffect, useState } from 'react';


const ManageItem = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/car')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const handleCarDelete = (id) => {
        console.log('deleting user id', id)
    }

    return (
        <div id="Products" className='container'>
            <div className="row">
                <h1 id='products' className=' text-center mt-5' style={{ 'color': 'orangered' }}>My Products</h1>
                <div className="products-container">
                    {
                        products?.map(product => <div key={product._id} className='product-card'>
                            <img className='w-100' src={product.image} alt="" />
                            <h2>Name: {product.name}</h2>
                            <p className='fs-5'><small>{product.description}</small></p>
                            <p className='fs-4'>Price: {product.price}</p>
                            <p className='fs-4'>quantity: {product.quantity}</p>
                            <p className='fs-4'>SupplierName: {product.SupplierName}</p>
                            <button onClick={() => handleCarDelete(product._id)} className='btn btn-danger text-white fs-5'>Delete</button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageItem;