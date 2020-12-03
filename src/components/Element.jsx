import React from 'react'
import './Element.css'

function Element({ image, names, fontColor, bg, shift, fontSize, imgName, setSelectedImage }) {

  return (
    <div className='element-div' onClick={() => setSelectedImage(imgName)}>
      <h4 className={`names ${shift}`} style={{ color: fontColor, fontSize: `${fontSize}vw` }}>{names}</h4>
      <img src={image} alt={image} className='element-image' style={{ backgroundColor: bg }} />
    </div>
  )
}

export default Element

