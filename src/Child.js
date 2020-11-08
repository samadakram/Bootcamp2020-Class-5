import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () =>{

    let counterValue = useContext(counterContext);

    return(
        <div>
            <h1>Welcome to the React World</h1>
            <h2>Counter Value : {counterValue} </h2>
        </div>
    );
}

export default Child;