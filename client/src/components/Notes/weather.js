import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Container, Row, Col } from 'react-bootstrap'
import "./weather.css";
import WeatherService from '../../services/WeatherService.js'

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: props.lat || 59.8,
        lon: props.lon || 19
      },
      isLoaded: false,
      weather: {}
    };
  }
  componentDidMount() {
    WeatherService.weather(this.state.location.lat, this.state.location.lon)
    .then((request) => {
      console.log(request)
      this.setState({
        weather: request,
        isLoaded: true
      })
    })
    .catch(console.log)
  }

  render() {
    var {isLoaded, weather} = this.state
    if(!isLoaded){
      return <div>Loading...</div>
    }
    else{
      let imgUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
      return (
        <div>
          <Draggable>
            <Container id="weatherContainer">
              <Row>
                <Col><img id="weatherImg" src={imgUrl} alt={weather.weather[0].main}></img></Col>
                <Col>{Math.round(weather.main.temp)} °C</Col>
                <Col>{weather.wind.speed}m/s & {weather.main.humidity}%</Col>
              </Row>
              <Row>
                <Col>min {Math.round(weather.main.temp_min)} / max {Math.round(weather.main.temp_max)}</Col>
              </Row>
              <Row>
                <Col>{weather.name}, {weather.sys.country}</Col>
              </Row>
              <Row>
                <Col>{new Date(weather.sys.sunrise * 1000).toLocaleTimeString("sv-SE",{hour: '2-digit', minute: '2-digit'})}</Col>
                <Col>{new Date(weather.sys.sunset * 1000).toLocaleTimeString("sv-SE",{hour: '2-digit', minute: '2-digit'})}</Col>
              </Row>
            </Container>
          </Draggable>
      </div>
    );
  }
  }
}
export default Weather;