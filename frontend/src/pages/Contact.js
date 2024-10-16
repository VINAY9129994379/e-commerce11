import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='contact-text'>
        <Title text1={'Contact'} text2={'Us'} />

      </div>
      <div className='contact-container'>
        <img src={assets.contact_img} alt=''/>
        <div className='contact-dtails'>
          <p>Our Store</p>
           <p>435456 mohali station <br/>suit 350 punjab</p>
           <p>tel:9129994379<br/>Email:vinay2272001@gmail.com</p>
           <p>Careers at Forever</p>
           <p>Learn more about our team and job openings</p>

           <button className='explore-btn'>Explore Jobs</button>
        </div>
         
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact