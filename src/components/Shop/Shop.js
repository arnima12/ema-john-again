import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCarts] = useState([]);
    useEffect(() =>{
        fetch('products.json')
  .then(response => response.json())
  .then(data => setProducts(data))
    },[])
    const handleClick = (product) => {
       
        const newCart = [...cart,product];
        setCarts(newCart);
    }

    return (
        <div className="shopContainer">
        <div className="productsContainer">
           {
            products.map(product => <Product key={product.id} product={product} handleClick={handleClick}></Product> )
           }
        </div>
            <div className="orderContainer">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;