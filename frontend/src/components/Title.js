import React from 'react'
import './Title.css'
function Title({text1,text2}) {
  return (
    <div className='title'>
        <p className='text-title'>{text1}</p><span className='text-title'>{text2}</span>
    </div>
  )
}

export default Title