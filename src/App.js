import React, { useState } from 'react';
import Element from './components/Element';
import './App.css';

import BlueCircleLeavesFrame from './assets/BlueCircleLeavesFrame.png';
import BlueGoldFloralDesignFrame from './assets/BlueGoldFloralDesignFrame.png';
import GoldBlueLeavesFrame from './assets/GoldBlueLeavesFrame.png';
import GoldCircleFrame from './assets/GoldCircleFrame.png';

function App() {
  const [names, setNames] = useState('');
  const [bg, setBg] = useState('white');
  const [fontSize, updateFontSize] = useState(1.5)

  function handleNameChange(e) {
    setNames(e.target.value);
  }

  function handleBgChange(e) {
    setBg(e.target.value);
  }

  function handleUpFont() {
    updateFontSize(fontSize + 0.5);
  }

  function handleDownFont() {
    updateFontSize(fontSize - 0.5);
  }

  return (
    <div className='App-div'>
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
      <div className='display-elements'>
        <Element image={BlueCircleLeavesFrame} names={names} />
        <Element image={BlueGoldFloralDesignFrame} names={names} />
        <Element
          image={GoldBlueLeavesFrame}
          names={names}
          fontColor='blue'
          shift='right'
          bg={bg}
          fontSize={fontSize}
        />
        <Element
          image={GoldCircleFrame}
          names={names}
          fontColor='gold'
          bg={bg}
          fontSize={fontSize}
        />
      </div>
    </div>
  );
}

export default App;
