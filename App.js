import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <Nav/>
          <div className="jumbotron">
            <h1 className="text-center">Welcome</h1>
            <h3 className="text-center">About Company</h3> 
          </div>
          <div className="col">
              <Form/>          
          </div>
        </div>
      </div>
    );
  }
}

export default App;
