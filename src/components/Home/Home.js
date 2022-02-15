import React, { useEffect, useState } from 'react';
import HomeCart from '../HomeCart/HomeCart';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./allService.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='container'>
            <div className='poster mt-3'>
                <h1>Online Course Hunter</h1>
                <p>Start your dream today</p>
                <p>Please select your suitable course. There are many online courses please select any one...</p>
            </div>
            {/* card items  */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {
                    products.slice(0,4).map(product => <HomeCart
                    key = {product.key}
                    product = {product}
                    ></HomeCart>)
                }
            </div>
        </div>
    );
};

export default Home;