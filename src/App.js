import React, { useState } from 'react';
import Parent from './Parent.js';
import counterContext from './CounterContext';
import './App.css';

function App() {

  let countState = useState(0);
  // let [count, setCount] = useState(30)

  return (
    <counterContext.Provider value= {countState} >
      <div>
        <Parent />
      </div>
    </counterContext.Provider>
  );
}

export default App;
