import React, { useEffect, useState } from 'react';


const ManageItem = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://immense-island-40841.herokuapp.com/car')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const handleCarDelete = (id) => {
        console.log('deleting user id', id)
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting user with id, ', id);
            const url = `https://immense-island-40841.herokuapp.com/car/${id}`;
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
        <div id="Products" className='container'>
            <div className="row">
                <h1 id='products' className=' text-center mt-5' style={{ 'color': 'orangered' }}>My Products</h1>
                <div className="products-container">
                    {
                        products?.map(product => <div key={product._id} className='product-card overflow-hidden'>
                            <img className='w-100 ' src={product.image} alt="" />
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