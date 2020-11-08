import React from 'react';
import Parent from './Parent.js';
import counterContext from './CounterContext';
import './App.css';

function App() {
  return (
    <counterContext.Provider value= {25} >
      <div>
        <Parent />
      </div>
    </counterContext.Provider>
  );
}

export default App;
