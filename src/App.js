import React, { useState } from 'react';
import Element from './components/Element';
import './App.css';

import BlueCircleLeavesFrame from './assets/BlueCircleLeavesFrame.png';
import BlueGoldFloralDesignFrame from './assets/BlueGoldFloralDesignFrame.png';
import GoldBlueLeavesFrame from './assets/GoldBlueLeavesFrame.png';
import GoldCircleFrame from './assets/GoldCircleFrame.png';

function App() {

  const [names, setNames] = useState('');

  function handleChange(e) {
    setNames(e.target.value);
  }

  return (
    <div className='App-div'>
      <h1>Dilusso Elements</h1>
      <form>
        <input
          type='text'
          name='names'
          placeholder='Type your names here...'
          className='name-input'
          onChange={(e) => handleChange(e)}
        ></input>
      </form>
      <div className='display-elements'>
        <Element image={BlueCircleLeavesFrame} names={names}/>
        <Element image={BlueGoldFloralDesignFrame} names={names} />
        <Element image={GoldBlueLeavesFrame} names={names} />
        <Element image={GoldCircleFrame} names={names} />
      </div>
    </div>
  );
}

export default App;
