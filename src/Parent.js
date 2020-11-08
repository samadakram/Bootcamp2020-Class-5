import React from 'react';
import Child from './Child.js';

const Parent = (props) =>{
    return(
        <div>
            <Child greet={props.greet} name={props.name} />
        </div>
    );
}

export default Parent;