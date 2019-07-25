import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Radium,{StyleRoot} from 'radium'

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Abhay', age: '31' },
      { name: 'Kanchan', age: '29' },
      { name: 'Advik', age: '1' }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('It was Clicked');
    this.setState({
      persons: [
        { name: newName, age: '31' },
        { name: 'Kanchan Narnaware', age: '20' },
        { name: 'Advik Narnaware', age: '1' }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: '31' },
        { name: 'Kanchan Narnaware', age: '20' },
        { name: 'Advik Narnaware', age: '1' }
      ]
    })
  }

  togglePersonsHandler = () => {
    console.log("Click show")
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  render() {
    const style = {
      backgroundColor: 'White',
      font: 'inherit',
      ':hover':{
        backgroundColor:'red',
        cursor:'pointer'
      }
    }
    let persons = null;
    if (this.state.showPersons) {
      persons =
        <div >
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} age={person.age}
              click={() => this.deletePersonHandler(index)} key={person.age} />
          })}

        </div>
    }
    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, this is an React App</h1>
        <button onClick={() => this.switchNameHandler('Abhay Narnaware')}>Switch Name</button>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Person</button>

        {persons}

      </div>
      </StyleRoot>
    );
  }

}

export default Radium(App);
