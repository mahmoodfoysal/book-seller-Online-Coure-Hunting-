import React from 'react';
import error from '../../image/error.png'

const NotFound = () => {
    return (
        <div>
            <img className='container-fluid' src={error} alt="" />
        </div>
    );
};

export default NotFound;