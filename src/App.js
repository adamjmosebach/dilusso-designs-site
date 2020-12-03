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
  const [blueCircleLeavesFrameFontSize, updateBlueCircleLeavesFrameFontSize] = useState(1.5);
  const [blueGoldFloralDesignFrameFontSize, updateBlueGoldFloralDesignFrameFontSize] = useState(1.5);
  const [goldBlueLeavesFrameFontSize, updateGoldBlueLeavesFrameFontSize] = useState(1.5);
  const [goldCircleFrameFontSize, updateGoldCircleFrameFontSize] = useState(1.5);
  const [selectedImage, setSelectedImage] = useState('');

  function handleNameChange(e) {
    setNames(e.target.value);
  }

  function handleBgChange(e) {
    setBg(e.target.value);
  }

  function handleUpFont() {
    switch (selectedImage) {
      case 'BlueCircleLeavesFrame':
        updateBlueCircleLeavesFrameFontSize(blueCircleLeavesFrameFontSize + 0.1);
        break;
      case 'BlueGoldFloralDesignFrame':
        updateBlueGoldFloralDesignFrameFontSize(blueGoldFloralDesignFrameFontSize + 0.1);
        break;
      case 'GoldBlueLeavesFrame':
        updateGoldBlueLeavesFrameFontSize(goldBlueLeavesFrameFontSize + 0.1);
        break;
      case 'GoldCircleFrame':
        updateGoldCircleFrameFontSize(goldCircleFrameFontSize + 0.1);
        break;
      default:
        updateBlueCircleLeavesFrameFontSize(blueCircleLeavesFrameFontSize + 0.1);
        updateBlueGoldFloralDesignFrameFontSize(blueGoldFloralDesignFrameFontSize + 0.1);
        updateGoldBlueLeavesFrameFontSize(goldBlueLeavesFrameFontSize + 0.1);
        updateGoldCircleFrameFontSize(goldCircleFrameFontSize + 0.1);
        break;
    }
  }

  function handleDownFont() {
    switch (selectedImage) {
      case 'BlueCircleLeavesFrame':
        updateBlueCircleLeavesFrameFontSize(blueCircleLeavesFrameFontSize - 0.1);
        break;
      case 'BlueGoldFloralDesignFrame':
        updateBlueGoldFloralDesignFrameFontSize(blueGoldFloralDesignFrameFontSize - 0.1);
        break;
      case 'GoldBlueLeavesFrame':
        updateGoldBlueLeavesFrameFontSize(goldBlueLeavesFrameFontSize - 0.1);
        break;
      case 'GoldCircleFrame':
        updateGoldCircleFrameFontSize(goldCircleFrameFontSize - 0.1);
        break;
      default:
        updateBlueCircleLeavesFrameFontSize(blueCircleLeavesFrameFontSize - 0.1);
        updateBlueGoldFloralDesignFrameFontSize(blueGoldFloralDesignFrameFontSize - 0.1);
        updateGoldBlueLeavesFrameFontSize(goldBlueLeavesFrameFontSize - 0.1);
        updateGoldCircleFrameFontSize(goldCircleFrameFontSize - 0.1);
        break;
    }
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
        <Element
          image={BlueCircleLeavesFrame}
          names={names}
          fontColor='gold'
          bg={bg}
          fontSize={blueCircleLeavesFrameFontSize}
          imgName='BlueCircleLeavesFrame'
          setSelectedImage={setSelectedImage}
        />
        <Element
          image={BlueGoldFloralDesignFrame}
          names={names}
          fontColor='black'
          bg={bg}
          fontSize={blueGoldFloralDesignFrameFontSize}
          imgName='BlueGoldFloralDesignFrame'
          setSelectedImage={setSelectedImage}
        />
        <Element
          image={GoldBlueLeavesFrame}
          names={names}
          fontColor='green'
          shift='right'
          bg={bg}
          fontSize={goldBlueLeavesFrameFontSize}
          imgName='GoldBlueLeavesFrame'
          setSelectedImage={setSelectedImage}
        />
        <Element
          image={GoldCircleFrame}
          names={names}
          fontColor='brown'
          bg={bg}
          fontSize={goldCircleFrameFontSize}
          imgName='GoldCircleFrame'
          setSelectedImage={setSelectedImage}
        />
      </div>
    </div>
  );
}

export default App;
