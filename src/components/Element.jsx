import React from 'react'
import './Element.css'

function Element({image}) {
  return (
    <div className='element-div'>
      <img src={image} alt='Gold Circle Frame' className='element-image' />
    </div>
  )
}

export default Element

