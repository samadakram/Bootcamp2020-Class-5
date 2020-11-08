import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () =>{

    let counterValue = useContext(counterContext);

    return(
        <div>
            <h1>Welcome to the React World</h1>
            <h2>Counter Value : {counterValue[0]} </h2>
            <br/>
            <button onClick={()=> {counterValue[1](++counterValue[0])} } >Increment</button>
        </div>
    );
}

export default Child;