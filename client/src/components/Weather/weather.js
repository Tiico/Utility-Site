import React, { Component } from 'react';
import {} from 'react-bootstrap'
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
      weather: []
    };
  }
  componentDidMount() {
    WeatherService.weather(this.state.location.lat, this.state.location.lon)
    .then((request) => {
      this.setState({weather: request})
      //console.log(this.state.weather.main.temp)
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <h1>Weather in {this.state.weather.name}</h1>

        </div>
     </div>
    );
  }
}
export default Weather;