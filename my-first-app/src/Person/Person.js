import React from 'react'

// This is an example of functional components
const person = (props) => {
    //  return <p>It's for test the version of app would be random {Math.floor(Math.random() * 30)} .</p>
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and my age is {props.age}.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}
            value={props.name}/>
        </div>

    )
};

export default person;