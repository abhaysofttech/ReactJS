import React from 'react'
import Radium from 'radium'
// This is an example of functional components
const person = (props) => {
    //  return <p>It's for test the version of app would be random {Math.floor(Math.random() * 30)} .</p>
    const style = {
        '@media(min-width:500px)':{
            width:'450px'
        }
    }
    return (
        <div style={style}>
            <p onClick={props.click}>I'm {props.name} and my age is {props.age}.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}
            value={props.name}/>
        </div>

    )
};

export default Radium(person);