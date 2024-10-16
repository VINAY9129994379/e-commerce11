import React, { useContext, useEffect, useState } from 'react'
import './RelatedProduct.css'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';
function RelatedProduct({category,subCategory}) {
    const {products}=useContext(ShopContext);
    const [related,setRelated]=useState([]);

    useEffect(()=>{
        let productsCopy=products.slice();
        productsCopy=productsCopy.filter((item)=>category===item.category);

        productsCopy=productsCopy.filter((item)=>subCategory===item.subCategory);

        setRelated(productsCopy.slice(0,4));

        
    },[products])

  return (
    <div className='related-product'>
        <div className='related-text'>
            <Title  text1={'Related'} text2={'Products'}/>
        </div>
        <div className='related-products'>
            {
                related.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />

                ))
            }
        </div>

    </div>
  )
}

export default RelatedProduct