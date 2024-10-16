import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import './Cart.css'


function Cart() {
  const {products,currency,cartItems,updateQuantity,navigate}=useContext(ShopContext);
  const [cartData,setCartData]=useState([]);

  useEffect(()=>{
    const tempData=[];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item]>0){
          tempData.push({
            _id:items,
            size:item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData)
  },[cartItems])
  return (
    <div className='cart'>
           <div className='cart-heading'>
            <Title text1={'Cart'} text2={'Products'} />
            
           </div>
           <div className='cart-product'>
            {
              cartData.map((item,index)=>{
                const productData=products.find((product)=>product._id===item._id);

                return(
                  <div className='product-image' key={index}>
                    <div>
                      <img src={productData.image[0]} alt="" />
                      <div>
                        <p className='product-name'>{productData.name}</p>
                        <div className='product-details'>
                        <p>{currency}{productData.price}</p>
                        <p>{item.size}</p>
                        </div>
                      </div>
                    </div>
                    <input 
                    onChange={(e)=>e.target.value=== '' || e.target.value=== '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))} type='number' className='product-quantity' min={1} defaultValue={item.quantity} />
                < img onClick={()=>updateQuantity(item._id,item.size,0)} src={assets.bin_icon} alt="" />

                  </div>
                )
              })
            }

           </div>

           <div className='cart-total'>
              <CartTotal/>
                <button className='checkout-btn' onClick={()=>navigate('/place-order')}>Proceed to Checkout</button>

           </div>

    </div>
  )
}

export default Cart