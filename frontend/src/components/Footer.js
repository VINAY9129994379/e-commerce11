import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
        <div className='footer-right'>
            <h1 className='logo'>FOREVER.</h1>
            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry..</p>
        </div>
        <div className='footer-center'>
            <p>Company</p>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div className='footer-right'>
            <p>GET IN TOUCH</p>
            <ul>
                <li>+91-9129994379</li>
                <li>vinay@gmail.com</li>
            </ul>
        </div>
    </div>
    <div className='footer-copyright'>
        <p>Copyright 2024@ foever.com-All right reserved..</p>
    </div>
    </div>
  )
}

export default Footer