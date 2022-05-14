import React from 'react';
import { Link } from 'react-router-dom';
import './ExtraSection1.css'

const ExtraSection1 = () => {

    return (
        <div className='container two'>
            <div >
                <img className="img" src={"https://st2.depositphotos.com/1004713/8657/i/600/depositphotos_86579280-stock-photo-car-agent-showing-vehicle-to.jpg"} alt="" />
            </div>
            <div className="tet">
                <h2>Ouer Best Service</h2>
                <p>Rent a car luxury dubai. Supercars. Exclusive SUVs. Booking in Few Clicks. Try Now! Best Luxury Car Rental Dubai. Free Delivery to Hotel/Airport. No Hidden Fees! Long-Term Rental Discount. No Hidden Payments. Only Luxurious Cars. Easy to Rent. Various Payment Methods. Clients' Reviews on Site.</p>
                <Link to='/manage-item'><button className='btn btn-primary'>More info</button></Link>
            </div>
        </div>
    );
};
export default ExtraSection1;