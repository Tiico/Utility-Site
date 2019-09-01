import React, { Component } from 'react';
import './App.css'
import {Container, Row, Col} from 'react-bootstrap'
import Weather from './components/Weather/weather'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: {}
    };
    this.displayLocationInfo = this.displayLocationInfo.bind(this);
  }
  componentDidMount(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
    }
  }

  displayLocationInfo(position) {
    const location = {lat: position.coords.latitude, lon: position.coords.longitude}
    this.setState({
      location
    })
  }


  render() {
    return (
      <div className="App">
        <Container id="container">
              <Row>
                <Col><Weather lat={this.state.location.lat} lon={this.state.location.lon} /></Col>
                <Col></Col>
                <Col></Col>
              </Row>
              <Row>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              </Row>
              <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
              </Row>
            </Container>
      </div>
    );
  }
}

export default App;