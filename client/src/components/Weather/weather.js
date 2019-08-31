import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import "./weather.css";
import WeatherService from '../../services/WeatherService.js'

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: props.lat,
        lon: props.lon
      },
      isLoaded: false,
      weather: {}
    };
  }
  componentDidMount() {
    WeatherService.weather(this.state.location.lat, this.state.location.lon)
    .then((request) => {
      this.setState({
        isLoaded: true,
        weather: request
      })
      //console.log(this.state.weather.main.temp)
    })
    .catch(console.log)
  }

  render() {
    var {isLoaded, weather} = this.state
    if(!isLoaded){
      return <div>Loading...</div>
    }
    else{
      return (
        <div className="container">
            <h1>Weather in {weather.name} </h1>
            <Container>
              <Row>
                <Col>{weather.weather[0].main}</Col>
                <Col>{weather.main.temp}</Col>
                <Col>{weather.wind.speed}m/s & {weather.main.humidity}%</Col>
              </Row>
              <Row>
                <Col>min {weather.main.temp_min} / max {weather.main.temp_max}</Col>
              </Row>
              <Row>
                <Col>{weather.name}, {weather.sys.country}</Col>
              </Row>
              <Row>
                <Col>{new Date(weather.sys.sunrise * 1000).toLocaleTimeString("sv-SE",{hour: '2-digit', minute: '2-digit'})}</Col>
                <Col>{new Date(weather.sys.sunset * 1000).toLocaleTimeString("sv-SE",{hour: '2-digit', minute: '2-digit'})}</Col>
              </Row>
            </Container>
      </div>
    );
  }
  }
}
export default Weather;