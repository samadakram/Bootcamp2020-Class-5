import React, { useState } from 'react';
import Parent from './Parent.js';
import counterContext from './CounterContext';
import './App.css';

function App() {

  let [count, setCount] = useState(30)

  return (
    <counterContext.Provider value= {count} >
      <div>
        <Parent />
      </div>
    </counterContext.Provider>
  );
}

export default App;
