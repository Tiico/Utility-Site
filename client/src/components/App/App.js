import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from '../Header/header'
import RouterView from '../../components/Router-view/router-view'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }
  componentDidMount(){
  }



  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <Container id="container">
            <RouterView/>
          </Container>
        </Router>
      </div>
    ); 
}
}

export default App;