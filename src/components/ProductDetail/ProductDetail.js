import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'
const ProductDetail = () => {
    const {productId} = useParams()
    
    const [productDetail,setProductDetail] = useState({})
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response=>response.json())
        .then(data=>setProductDetail(data))
    },[])
    console.log(productDetail)
    const {title,category,image,description,price} = productDetail
    return (
        <div className="product-details">
            <h3>{title}</h3>
            <img src={image} alt="" />
            <h3>Category Name : {category}</h3>
            <p>{description}</p>
            <h4>Price : {price} $ (USD)</h4>
        </div>
    );
};

export default ProductDetail;