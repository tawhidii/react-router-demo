import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'
const Products = (props) => {
    const {title,price,image,id} = props.products
     return (
        <div className="products-list">
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{price}$</p>
            <button className="product-button"><Link style={{textDecoration:"none"}} to={`/products/${id}`}>Show Details </Link> </button>
        </div>
    );
};

export default Products;