import React from 'react';
import { Carousel } from 'react-bootstrap';
import ExtraSection1 from '../ExtraSection/ExtraSection1';
import ExtraSection2 from '../ExtraSection/ExtraSection2';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <div>
                <div className="banner">
                    <Carousel>
                        <Carousel.Item>
                            <img height={"600px"}
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Welcome to Our Car Store</h3>
                                <p>If you looking very Awesome car , you are most welcome in our Store.So Expole our Stock.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img height={"600px"}
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Cool Car is waiting For you</h3>
                                <p>Every Cool car collection is available our Stock. So exploe our Stock.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img height={"600px"}
                                className="d-block w-100"
                                src="https://media.istockphoto.com/photos/car-is-standing-on-the-breakdown-lane-asphalt-and-tyre-italy-picture-id1319939893?b=1&k=20&m=1319939893&s=170667a&w=0&h=KkJ0ADibE2zQIBqyXtwnV-pTEukfGPkHQz3y483n3fA="
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Cool mileage in our Stock</h3>
                                <p>Our car stock is famous for great mileage . So don't late come in Our Stock</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>
            </div>
            <Products></Products>
            <ExtraSection1></ExtraSection1>
            <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;