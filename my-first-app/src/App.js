import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Abhay', age: '31' },
      { name: 'Advik', age: '1' }
    ]
  }

  switchNameHandler = () => {
    console.log('It was Clicked');
    this.setState({
      persons: [
        { name: 'Abhay Narnaware', age: '31' },
        { name: 'Advik Narnaware', age: '1' }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, this is an React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name="Abhay" age="31"><b>TEst</b>My passion: My Work</Person>
      </div>
    );
  }

}

export default App;
