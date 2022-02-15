import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ServicesCart = (props) => {
    const { img, name, fee, week, type, certificate } = props.product;
    const cart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <div className="col">
                <div className="card mt-3 p-2 cart-background rounded">
                    <img src={img} className="card-img-top img-size" alt="Course Img" />
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-text">Type: {type}</p>
                        <p>Week: {week}</p>
                        <p><small>Certificate: {certificate}</small></p>
                        <p><small>Fee: {fee}</small></p>
                        <button className='btn btn-primary mx-auto'>{cart} Enroll</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;