import React from 'react';
import { useEffect, useState } from 'react';
import Products from '../Products/Products';
const Home = () => {
    const [products,setProduct] = useState([])

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(response=>response.json())
      .then(data=>setProduct(data))
    },[])
    console.log(products)
    return (
        <div>
            {
                products.map(pd=><Products products={pd} key={pd.id}></Products>)
            }
        </div>
    );
};

export default Home;