import React from 'react'
import './NewsletterBox.css'
function NewsletterBox() {
    const onsubmitHandler=(event)=>{
        event.preventDefault();
    }
  return (
    <div className='news-letter'>
        <p>subscribe now & get 20% of</p>
        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry</p>
        <form onSubmit={onsubmitHandler}>
            <input type='email' placeholder='enter your email' />
            <button type='submit'>subscribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox