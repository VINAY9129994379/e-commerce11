import React, { useContext, useEffect, useState } from 'react'
import './BestSeller.css'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
function BestSeller() {
    const {products}=useContext(ShopContext);
    const [bestseller,setBestSeller]=useState([]);
    useEffect(()=>{
        const bestProduct=products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[products])
  return (
    <div className='bestseller'>
        <div className='seller-text'>
            <Title text={'BEST'} text2={'SELLERS'} />
            <p className='text-para'>
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is dummy text of the industry.
            </p>
        </div>
        <div className='bestseller-product'>
            {
                bestseller.map((item,index)=>(
 
                 
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller