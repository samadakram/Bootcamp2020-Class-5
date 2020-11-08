import React from 'react';
import Parent from './Parent.js';
import './App.css';
import counterContext from './CounterContext.js';

function App() {
  return (
      <counterContext.Provider value={10} >
      <div>
        <Parent />
      </div>
    </counterContext.Provider>
  );
}

export default App;
