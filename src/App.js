import React, { Component } from 'react';
import {Container , Button}from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Container>
              <h3>Hello!</h3>
              <Button content='Click me!' color='teal'/>
          </Container>
      </div>
    );
  }
}

export default App;
