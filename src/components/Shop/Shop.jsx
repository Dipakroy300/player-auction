import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {


    const [ products , setProducts]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
           <div className='container-shop'>
            {
                products.map(product=> <Product 
                key={product.id}
                product={product}
                ></Product>)
            }
          </div>
            <h1>  </h1>
        </div>
    );
};

export default Shop;