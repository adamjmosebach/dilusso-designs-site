import React from 'react';
import Element from './components/Element';
import './App.css';

import BlueCircleLeavesFrame from './assets/BlueCircleLeavesFrame.png';
import BlueGoldFloralDesignFrame from './assets/BlueGoldFloralDesignFrame.png';
import GoldBlueLeavesFrame from './assets/GoldBlueLeavesFrame.png';
import GoldCircleFrame from './assets/GoldCircleFrame.png';

function App() {
  return (
    <div className='App-div'>
      <h1>Dilusso Elements</h1>
      <form>
        <input
          type='text'
          name='names'
          placeholder='Type your names here...'
          className='name-input'
        ></input>
      </form>
      <div className='display-elements'>
        <Element image={BlueCircleLeavesFrame} />
        <Element image={BlueGoldFloralDesignFrame} />
        <Element image={GoldBlueLeavesFrame} />
        <Element image={GoldCircleFrame} />
      </div>
    </div>
  );
}

export default App;
