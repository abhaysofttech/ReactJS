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
    this.setState({showPersons : !doesShow});
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, this is an React App</h1>
        <button onClick={() => this.switchNameHandler('Abhay Narnaware')}>Switch Name</button>
        <button onClick={this.togglePersonsHandler}>Toggle Person</button>
        {
          this.state.showPersons === true ?
            <div >
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age} />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Abhay Narnaware')}
                changed={this.nameChangeHandler} />

              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age} />

              <Person name="Abhay" age="31"><b>TEst</b>My passion: My Work</Person>
            </div> : null
        }

      </div>
    );
  }

}

export default App;
