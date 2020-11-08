import React, {useReducer} from 'react';
import CounterReducer from './CounterReducer'

const Child2 = () =>{

    let [state, dispatch] = useReducer(CounterReducer, 10);

    return(
        <div>
            <h1>value of Reducer is : {state} </h1>
            <button onClick={()=> dispatch('INCREMENT') } >Increment Reducer</button>
        </div>
    );
}

export default Child2;