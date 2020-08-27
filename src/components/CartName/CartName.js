import React from 'react';
import './CartName.css'

const CartName = (props) => {
    const added = props.addCourse;
    const total = (added.reduce((total,e)=>total + e.price, 0)).toFixed(2);
    return (
        <div className='price'>
            <p>Course Added: {added.length} </p>
            <p>Total Price: {total}</p>
        </div>
    );
};

export default CartName;

//<h3>Course: {props.handleCourse.length}</h3>
//<p>Price:{props.handleCourse.price.reduce((total,price)=>total+price,0)}</p>