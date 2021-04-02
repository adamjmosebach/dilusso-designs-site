import React from 'react';
import './Element.css';

function Element({
  image,
  names,
  date,
  fontColor,
  shift,
  fontSize,
  imgName,
  setSelectedImage,
}) {
  return (
    <div className='element-div' onClick={() => setSelectedImage(imgName)}>
      <h4
        className={`names ${shift}`}
        style={{
          color: fontColor,
          fontSize: `${fontSize}vw`,
          marginLeft: `${shift}vw`,
        }}
      >
        {names}
        <br></br>
      </h4>
      <h3
        className={`names ${shift}`}
        style={{
          color: fontColor,
          fontSize: `${fontSize}vw`,
          marginLeft: `${shift}vw`,
        }}
      >
        <br></br>
        {date}
      </h3>
      <img src={image} alt={image} className='element-image' />
    </div>
  );
}

export default Element;
