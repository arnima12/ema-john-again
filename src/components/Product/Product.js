
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const{name,img,ratings,seller,price} = props.product;
    
    return (
        <div className="product">
            <img src= {img} alt="" />
            <div className="productInfo">
                <h6 className="productName">{name}</h6>
                <p>Price: {price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={() => props.handleClick(props.product)} className="btnCart"><p>Add to Cart</p> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Product;