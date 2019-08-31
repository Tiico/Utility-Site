import React, { Component } from 'react';
import logo from './logo.svg'
import './App.css'
import Weather from './components/Weather/weather'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>
        <Weather lat="59.4024341" lon="17.9464824" />
      </div>
    );
  }
}

export default App;