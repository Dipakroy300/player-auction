import React from 'react';
import './Product.css'

const Product = (props) => {
//  console.log(props.Product)
    const {picture,age,name,email,phone,address,born,price}=props.product;
    return (
        <div className='player'>
            <img src={picture} alt="" />
            <h4>Name:{name}</h4>
            <p>Price:{price}</p>
            <p>Email:{email}</p>
            <p>Born:{born}</p>
            <p>Age :{age}</p>
            <p>Phone:{phone}</p>
            <p>Address:{address}</p>
            <button className='btn'>Purchase</button>
        </div>
    );
};

export default Product;