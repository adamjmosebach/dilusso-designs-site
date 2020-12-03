import React from 'react'
import './Element.css'

function Element( { image, names } ) {
  return (
    <div className='element-div'>
      <h4 className='names'>{names}</h4>
      <img src={image} alt={image} className='element-image' />
    </div>
  )
}

export default Element

