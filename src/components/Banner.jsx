import React from 'react';
import './Banner.css';
import S27Logo from '../assets/S27_logo.png';

function Banner( {handleNameChange, handleBgChange, handleUpFont, handleDownFont,} ) {
  return (
    <div>
      <img src={S27Logo} alt='Studio 27 logo' className='s27-logo' />
      <h1>Dilusso Elements</h1>
      <div className='input-fields-all'>
        <div className='input-section'>
          <span className='input-heading'>Names: </span>
          <input
            type='text'
            name='names'
            placeholder='Type your names here...'
            className='name-input'
            onChange={(e) => handleNameChange(e)}
          ></input>
        </div>
        <div className='input-section'>
          <span className='input-heading'>Background Color: </span>
          <select name='bgSelect' onChange={(e) => handleBgChange(e)}>
            <option value='white'>White</option>
            <option value='blue'>Blue</option>
            <option value='red'>Red</option>
            <option value='purple'>Purple</option>
            <option value='grey'>Grey</option>
          </select>
        </div>
        <div className='input-section'>
          <span className='input-heading'>Font: </span>
          <button onClick={() => handleUpFont()}>Up</button>
          <button onClick={handleDownFont}>Down</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
