import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import './About.css'

function About() {
  return (
    <div className='about'>
      <div className='about-text'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>
      <div className='about-contain'>
        <img src={assets.about_img} alt=''/>
        <div>
          <p>Forever was born out of a passion for innovation for and a desire ti revolution</p>
          <p>Since our inception, we have worked tirelessly to curate a diverse selection  </p>
          <b>Our Mission</b>
          <p>Our Mission at forever is to empower customers with choise, convenience, and </p>
        </div>
      </div>
      <div className='about-description'>
        <Title text1={'WHY'} text2={'Choose US'} />

      </div>
      <div className='description-text'>
        <div className='description-right'>
          <b>Quality Assurance:</b>
          <p>we meticulously select and vet each product to express</p>
        </div>
        <div className='description-middle'>
          <b>Convenience:</b>
          <p>we meticulously select and vet each product to express</p>
        </div>
        <div className='description-left'>
          <b>Exceptional Customer Service:</b>
          <p>we meticulously select and vet each product to express</p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About