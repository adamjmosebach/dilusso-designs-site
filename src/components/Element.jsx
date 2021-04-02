import React from 'react';
import './Element.css';

function Element({
  image,
  nameInit,
  names,
  date,
  fontColor,
  shift,
  fontSize,
  imgName,
  setSelectedImage,
}) {
  if (nameInit === 'names') {
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
  } else { //inits
    return (
      <div className='element-div' onClick={() => setSelectedImage(imgName)}>
        <h4
          className={`init1 ${shift}`}
          style={{
            color: fontColor,
            fontSize: `9vw`,
            marginLeft: `${shift}vw`,
          }}
        >
          {names.charAt(0)}
          <br></br>
        </h4>
        <h4
          className={`initAnd ${shift}`}
          style={{
            color: fontColor,
            fontSize: `3vw`,
            marginLeft: `${shift}vw`,
          }}
        >
          {names.charAt(1)}
          <br></br>
        </h4>
        <h4
          className={`init2 ${shift}`}
          style={{
            color: fontColor,
            fontSize: `9vw`,
            marginLeft: `${shift}vw`,
          }}
        >
          {names.charAt(2)}
          <br></br>
        </h4>
        <h3
          className={`names ${shift} date`}
          style={{
            color: fontColor,
            fontSize: `${fontSize}vw`,
            marginLeft: `${shift}vw`,
          }}
        >
          <br></br>
          <br></br>
          {date}
        </h3>
        <img src={image} alt={image} className='element-image' />
      </div>
    );
  }
}

export default Element;
