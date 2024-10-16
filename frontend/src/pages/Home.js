import React from 'react'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import LatestCollection from '../components/LatestCollection'

function Home() {
  return (
    <div className='home'>
      <Hero/>
      <br/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home