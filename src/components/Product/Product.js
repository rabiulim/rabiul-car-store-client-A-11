// import React from 'react';
// import { Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './Product.css'
// const Product = ({ product }) => {
//     const navigate = useNavigate();
//     const handleNavigateUpdateDetails = (id) => {
//         navigate(`/car/${id}`)
//     }
//     const { _id, name, price, description, image, quantity, SupplierName } = product;
//     return (
//         <div className='product-card'>
//             <img className='w-100' src={image} alt="" />
//             <h2>Name: {name}</h2>
//             <p className='fs-5'><small>{description}</small></p>
//             <p className='fs-4'>Price: {price}</p>
//             <p className='fs-4'>quantity: {quantity}</p>
//             <p className='fs-4'>SupplierName: {SupplierName}</p>
//             <Button className="btn btn-danger" onClick={() => handleNavigateUpdateDetails(_id)}>
//                 Update Inventory
//             </Button>
//         </div>
//     );
// };

// export default Product;