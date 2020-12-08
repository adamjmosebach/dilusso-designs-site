import React, { useState } from 'react';
import Element from './components/Element';
import Banner from './components/Banner';
import './App.css';

import BlueCircleLeavesFrame from './assets/BlueCircleLeavesFrame.png';
import BlueGoldFloralDesignFrame from './assets/BlueGoldFloralDesignFrame.png';
import GoldBlueLeavesFrame from './assets/GoldBlueLeavesFrame.png';
import GoldCircleFrame from './assets/GoldCircleFrame.png';
import HexagonDesign from './assets/HexagonDesign.png';
import PinkGoldLeavesFrame from './assets/PinkGoldLeavesFrame.png';
// import RoseGoldLeaveFrame from './assets/RoseGoldLeaveFrame.png';

function App() {
  const [names, setNames] = useState('');
  const [bg, setBg] = useState('white');
  const [blueCircleLeavesFrameFontSize, updateBlueCircleLeavesFrameFontSize] = useState(2.5);
  const [blueGoldFloralDesignFrameFontSize, updateBlueGoldFloralDesignFrameFontSize] = useState(2.5);
  const [goldBlueLeavesFrameFontSize, updateGoldBlueLeavesFrameFontSize] = useState(2.5);
  const [goldCircleFrameFontSize, updateGoldCircleFrameFontSize] = useState(2.5);
  const [hexagonDesignFontSize, updateHexagonDesignFontSize] = useState(3.5);
  const [pinkGoldLeavesFrameFontSize, updatePinkGoldLeavesFrameFontSize] = useState(2.5);
  const [roseGoldLeaveFrameFontSize, updateRoseGoldLeaveFrameFontSize] = useState(2.5);
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
        updateBlueCircleLeavesFrameFontSize(
          blueCircleLeavesFrameFontSize + 0.1
        );
        break;
      case 'BlueGoldFloralDesignFrame':
        updateBlueGoldFloralDesignFrameFontSize(
          blueGoldFloralDesignFrameFontSize + 0.1
        );
        break;
      case 'GoldBlueLeavesFrame':
        updateGoldBlueLeavesFrameFontSize(goldBlueLeavesFrameFontSize + 0.1);
        break;
      case 'GoldCircleFrame':
        updateGoldCircleFrameFontSize(goldCircleFrameFontSize + 0.1);
        break;
      case 'HexagonDesign':
        updateHexagonDesignFontSize(hexagonDesignFontSize + 0.1);
        break;
      case 'PinkGoldLeavesFrame':
        updatePinkGoldLeavesFrameFontSize(pinkGoldLeavesFrameFontSize + 0.1);
        break;
      case 'RoseGoldLeaveFrame':
        updateRoseGoldLeaveFrameFontSize(roseGoldLeaveFrameFontSize + 0.1);
        break;
      default:
        updateBlueCircleLeavesFrameFontSize(
          blueCircleLeavesFrameFontSize + 0.1
        );
        updateBlueGoldFloralDesignFrameFontSize(
          blueGoldFloralDesignFrameFontSize + 0.1
        );
        updateGoldBlueLeavesFrameFontSize(goldBlueLeavesFrameFontSize + 0.1);
        updateGoldCircleFrameFontSize(goldCircleFrameFontSize + 0.1);
        updateHexagonDesignFontSize(hexagonDesignFontSize + 0.1);
        updatePinkGoldLeavesFrameFontSize(pinkGoldLeavesFrameFontSize + 0.1);
        updateRoseGoldLeaveFrameFontSize(roseGoldLeaveFrameFontSize + 0.1);
        break;
    }
  }

  function handleDownFont() {
    switch (selectedImage) {
      case 'BlueCircleLeavesFrame':
        updateBlueCircleLeavesFrameFontSize(
          blueCircleLeavesFrameFontSize - 0.1
        );
        break;
      case 'BlueGoldFloralDesignFrame':
        updateBlueGoldFloralDesignFrameFontSize(
          blueGoldFloralDesignFrameFontSize - 0.1
        );
        break;
      case 'GoldBlueLeavesFrame':
        updateGoldBlueLeavesFrameFontSize(goldBlueLeavesFrameFontSize - 0.1);
        break;
      case 'GoldCircleFrame':
        updateGoldCircleFrameFontSize(goldCircleFrameFontSize - 0.1);
        break;
      case 'HexagonDesign':
        updateHexagonDesignFontSize(hexagonDesignFontSize - 0.1);
        break;
      case 'PinkGoldLeavesFrame':
        updatePinkGoldLeavesFrameFontSize(pinkGoldLeavesFrameFontSize - 0.1);
        break;
      case 'RoseGoldLeaveFrame':
        updateRoseGoldLeaveFrameFontSize(roseGoldLeaveFrameFontSize - 0.1);
        break;
      default:
        updateBlueCircleLeavesFrameFontSize(
          blueCircleLeavesFrameFontSize - 0.1
        );
        updateBlueGoldFloralDesignFrameFontSize(
          blueGoldFloralDesignFrameFontSize - 0.1
        );
        updateGoldBlueLeavesFrameFontSize(goldBlueLeavesFrameFontSize - 0.1);
        updateGoldCircleFrameFontSize(goldCircleFrameFontSize - 0.1);
        updateHexagonDesignFontSize(hexagonDesignFontSize - 0.1);
        updatePinkGoldLeavesFrameFontSize(pinkGoldLeavesFrameFontSize - 0.1);
        updateRoseGoldLeaveFrameFontSize(roseGoldLeaveFrameFontSize - 0.1);
        break;
    }
  }

  return (
    <div className='App-div'>
      <Banner
        handleNameChange={handleNameChange}
        handleBgChange={handleBgChange}
        handleUpFont={handleUpFont}
        handleDownFont={handleDownFont}
      />      
      <div className='display-elements' style={{ backgroundColor: bg }}>
        <Element
          image={BlueCircleLeavesFrame}
          names={names}
          fontColor='gold'
          fontSize={blueCircleLeavesFrameFontSize}
          imgName='BlueCircleLeavesFrame'
          setSelectedImage={setSelectedImage}
        />
        <Element
          image={BlueGoldFloralDesignFrame}
          names={names}
          fontColor='black'
          fontSize={blueGoldFloralDesignFrameFontSize}
          imgName='BlueGoldFloralDesignFrame'
          setSelectedImage={setSelectedImage}
          shift='0.5'
        />
        <Element
          image={GoldBlueLeavesFrame}
          names={names}
          fontColor='green'
          fontSize={goldBlueLeavesFrameFontSize}
          imgName='GoldBlueLeavesFrame'
          setSelectedImage={setSelectedImage}
          shift='3'
        />
        <Element
          image={GoldCircleFrame}
          names={names}
          fontColor='brown'
          fontSize={goldCircleFrameFontSize}
          imgName='GoldCircleFrame'
          setSelectedImage={setSelectedImage}
          shift='1.5'
        />
        <Element
          image={HexagonDesign}
          names={names}
          fontColor='silver'
          fontSize={hexagonDesignFontSize}
          imgName='HexagonDesign'
          setSelectedImage={setSelectedImage}
        />
        <Element
          image={PinkGoldLeavesFrame}
          names={names}
          fontColor='pink'
          fontSize={pinkGoldLeavesFrameFontSize}
          imgName='PinkGoldLeavesFrame'
          setSelectedImage={setSelectedImage}
          shift='1.25'
        />
        {/* <Element
          image={RoseGoldLeaveFrame}
          names={names}
          fontColor='seagreen'
          fontSize={roseGoldLeaveFrameFontSize}
          imgName='RoseGoldLeaveFrame'
          setSelectedImage={setSelectedImage}
        /> */}
      </div>
    </div>
  );
}

export default App;
