import React, { useContext } from 'react'
import './CartTotal.css'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
function CartTotal() {
    const {currency,delivery_fee,getCartAmount}=useContext(ShopContext);
  return (
    <div className='cart-total'>

         <div className='cart-total-container'>
        <div className='cart-text'>
            <Title text1={'Cart'} text2={'Total'} />
        </div>

            <div className='cart-container-details'>
                <p>subtotal</p>
                <p>{currency}{getCartAmount()}.00</p>
            </div>
            <hr/>
            <div className='cart-container-details'>
                <p>Shipping fee</p>
                <p>{currency}{delivery_fee}</p>
            </div>
            <hr/>
            <div className='cart-container-details'>
                <p>Total</p>
                <p>{currency}{getCartAmount()=== 0 ? 0 : getCartAmount() + delivery_fee}</p>
            </div>
            <hr/>

        </div>
    </div>
  )
}

export default CartTotal