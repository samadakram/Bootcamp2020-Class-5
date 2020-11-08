import React from 'react';

const Child = (props) =>{
    return(
        <div>
            <h1>Welcome to the {props.greet} </h1>
            <h2>I am <i> {props.name} </i> </h2>
        </div>
    );
}

export default Child;