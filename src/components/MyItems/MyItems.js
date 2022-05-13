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
    return (
        <div id="Products" className='container'>
            <div className="row">
                <h1 id='products' className=' text-center mt-5' style={{ 'color': 'orangered' }}>Your Products</h1>
                <div className="products-container">
                    {
                        products?.map(product => <div className='product-card'>
                            <img className='w-100' src={product.image} alt="" />
                            <h2>Name: {product.name}</h2>
                            <p className='fs-5'><small>{product.description}</small></p>
                            <p className='fs-4'>Price: {product.price}</p>
                            <p className='fs-4'>quantity: {product.quantity}</p>
                            <p className='fs-4'>SupplierName: {product.SupplierName}</p>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItems;