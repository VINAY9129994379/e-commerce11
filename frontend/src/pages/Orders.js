import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import './Orders.css'

function Orders() {
  const {products,currency}=useContext(ShopContext);

  return (
    <div className='orders'>
      <div className='orders-container'>
        <div className='orders-heading'>
          <Title text1={'MY'} text2={'ORDERS'} />

        </div>
       <div className='orders-products'>
        {
          products.slice(1,4).map((item,index)=>(
            <div key={index} className=' order-products-contain'>
              <div className='order-product-contain-image'>
                <img src={item.image[0]} alt=""/>
                <div className='products-name'>
                  <p>{item.name}</p>
                  <div className='product-name-list'>
                    <p>{currency}{item.price}</p>
                    <p>Quantity:1</p>
                    <p>Size:M</p>
        

                  </div>
                  <p>Date:<span>30 sep 2024</span></p>
                </div>
              </div>
              <div className='orders-shipping'>
                <div className='order-shipping-track'>
                  <p className='shipping'></p>
                  <p> Ready to Ship</p>

                </div>
                <button className='oder-tracking'>Track Order</button>

              </div>
            </div>
          ))
        }

       </div>


      </div>
    </div>
  )
}

export default Orders