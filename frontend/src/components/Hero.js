import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='herocontainer'>
        <div className='hero-left'>
            <p className='heaiding'>Best prices</p>
            <h1>Incredible Prices<br/>On All Your<br/>Favorites Items</h1>
            <p>Get more for less on selected brands </p>
            <button className='btn'>Shop Now</button>
        </div>
        <div className='hero-right'>
            <img src='https://media.istockphoto.com/id/1144194202/video/woman-looking-at-the-goods-in-the-online-clothing-store-smart-phone-online-shopping-slow.jpg?s=640x640&k=20&c=tQ2GLqbfMwluSpH-ETGslyBxGUytCU87egHbJnmqnrk='alt='' className='tranceparency-image'/>

        </div>
    </div>
  )
}

export default Hero