import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      title: 'Simple React CRUD App',
      act: 0,
      index: '',
      data: []
    }
  }



  render() {
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="your name" className="formField" />
          <input type="text" ref="address" placeholder="your address" className="formField" />
          <button onClick={this.fSubmit} className="myButton">Submmit </button>
        </form>
        <pre>
        
        </pre>
      </div>
    );
  }
}

export default App;
