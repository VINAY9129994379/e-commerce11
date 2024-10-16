import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import './LatestCollection.css'
import Title from './Title';

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]); // Corrected useState syntax

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 8)); // Slicing first 10 products
    }
  }, [products]); // Dependency array includes 'products'

  return (
    <div className='collection'>
      <div className='collection-contain'>

           <div className='top-text'>
            <Title text={'BEST'} text2={'SELLERS'} />
            <p className='text-para'>
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is dummy text of the industry.
            </p>
        </div>
        <div className='product-collection'>
        {latestProducts.map((item, index) => ( 
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>

  </div>
    </div>
  );
}

export default LatestCollection;
