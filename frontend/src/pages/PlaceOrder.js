import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import './PlaceOrder.css';
import { ShopContext } from '../context/ShopContext';

function PlaceOrder() {
  const [method, setMethod] = useState('cod');
  const {navigate}=useContext(ShopContext);

  return (
    <div className='place-order'>
      <div className='order-container'>
        <div className='order-heading'>
          <Title text1={'Delivery'} text2={'Information'} />
        </div>
        <div className='order-details'>
          <input type='text' placeholder='Your Name' />
          <input type='text' placeholder='Last Name' />
        </div>
        <input type='email' placeholder='Email' />
        <input type='text' placeholder='Street' />
        <div className='order-details'>
          <input type='text' placeholder='City' />
          <input type='text' placeholder='State' />
        </div>
        <div className='order-details'>
          <input type='number' placeholder='Zipcode' />
          <input type='text' placeholder='Country' />
        </div>
        <input type='number' placeholder='Phone' />
      </div>

      <div className='order-right-side'>
        <div className='order-contain'>
          <CartTotal />
        </div>
        <div className='order-payment-method'>
          <Title text1={'Payment'} text2={'Method'} />
          <div 
            onClick={() => setMethod('stripe')} 
            className={`order-payment-container-stripe ${method === 'stripe' ? 'bg-green-400' : ''}`}
          >
            <p>
              <img src={assets.stripe_logo} alt="Stripe" />
            </p>
          </div>
          <div 
            onClick={() => setMethod('razorpay')} 
            className={`order-payment-container-razorpay ${method === 'razorpay' ? 'bg-green-400' : ''}`}
          >
            <p>
              <img src={assets.razorpay_logo} alt="Razorpay" />
            </p>
          </div>
          <div 
            onClick={() => setMethod('cod')} 
            className={`order-payment-container-cash ${method === 'cod' ? 'bg-green-400' : ''}`}
          >
            <p>CASH ON DELIVERY</p>
          </div>
        </div>
        <div className='order-place'>
          <button  onClick={()=>navigate('/orders')} className='order-btn'>Place Order</button>

        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
