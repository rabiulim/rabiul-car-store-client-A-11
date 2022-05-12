import React, { useEffect, useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';
import Product from '../Product/Product';

const ManageItem = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div id="Products" className='container'>
            <div className="row">
                <h1 id='products' className=' text-center mt-5' style={{ 'color': 'orangered' }}>My Products</h1>
                <div className="products-container">
                    {
                        products?.map(product => <AllProduct
                            key={product.id}
                            product={product}
                        >
                        </AllProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageItem;