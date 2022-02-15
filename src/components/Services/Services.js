import React, { useEffect, useState } from 'react';
import ServicesCart from '../ServicesCart/ServicesCart';

const Services = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./allService.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {
                    products.map(product => <ServicesCart
                    key = {product.key}
                    product = {product}
                    ></ServicesCart>)
                }
            </div>
        </div>
    );
};

export default Services;