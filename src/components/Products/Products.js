import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const handleNavigateUpdateDetails = (id) => {
        navigate(`/car/${id}`)
    }

    useEffect(() => {
        fetch('https://immense-island-40841.herokuapp.com/car')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div id="Products" className='container '>
            <div className="row">
                <h1 id='products' className=' text-center mt-5' style={{ 'color': 'orangered' }}>Top Products</h1>
                <div className="products-container">
                    {
                        products?.slice(0, 6).map(product => <div className='product-card overflow-hidden'>
                            <img className='w-100' src={product.image} alt="" />
                            <h2>Name: {product.name}</h2>
                            <p className='fs-5'><small>{product.description}</small></p>
                            <p className='fs-4'>Price: {product.price}</p>
                            <p className='fs-4'>quantity: {product.quantity}</p>
                            <p className='fs-4'>SupplierName: {product.SupplierName}</p>
                            <Button className="btn btn-danger" onClick={() => handleNavigateUpdateDetails(product._id)}>
                                Update Inventory
                            </Button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;