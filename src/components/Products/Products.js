import React from 'react';
import './Products.css'
const Products = (props) => {
    const {title,price,image} = props.products
     return (
        <div className="products-list">
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{price}$</p>
        </div>
    );
};

export default Products;