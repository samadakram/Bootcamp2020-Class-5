import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () =>{

    let counterValue = useContext(counterContext);

    return(
        <div>
            <h1>Welcome to the React World</h1>
            <h2>Counter Value : {counterValue} </h2>
            <br/>
            <button onClick={()=> {console.log("Chal raha hai Bhai")} } >Increment</button>
        </div>
    );
}

export default Child;