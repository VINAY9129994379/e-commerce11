import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import './ProductItem.css'

function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext); // Corrected 'currency' context

  return (
    <div className='product-item'>
      <Link to={`/product/${id}`}>
        <div className='product-container'>
          <img className='product-img' src={image[0]} alt={name} /> {/* Corrected 'product-img' */}
        </div>
        <p className='item-name'>
          {name}
        </p>
        <p>{currency} {price}</p> {/* Corrected 'currency' */}
      </Link>
    </div>
  );
}

export default ProductItem;
