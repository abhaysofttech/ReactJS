import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons =
        <div >
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />
          })}
         
        </div>
    }
    return (
      <div className="App">
        <h1>Hi, this is an React App</h1>
        <button onClick={() => this.switchNameHandler('Abhay Narnaware')}>Switch Name</button>
        <button onClick={this.togglePersonsHandler}>Toggle Person</button>

        {persons}

      </div>
    );
  }

}

export default App;
