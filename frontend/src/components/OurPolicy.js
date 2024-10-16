import React from 'react'
import './OurPolicy.css'
import {assets} from "../assets/assets";

function OurPolicy() {
  return (
    <div className='ourpolicy'>
        <div className='policy-content'>
            <img src={assets.exchange_icon} alt="" className='policy-img'/>
            <p className='policy-para'>Easy Exchange policy</p>
            <p className='policy-para'>We offer hassle free exchange olicy</p>
        </div>
        <div className='policy-quality'>
            <img src={assets.quality_icon} alt="" className='policy-img'/>
            <p className='policy-para'>7 days return policy</p>
            <p className='policy-para'>We provide 7 day return olicy</p>
        </div>
        <div className='policy-support'>
            <img src={assets.support_img} alt="" className='policy-img'/>
            <p className='policy-para'>best customer support policy</p>
            <p className='policy-para'>We provide 24/7 customer support policy</p>
        </div>
    </div>
  )
}

export default OurPolicy