import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Container } from 'react-bootstrap'
import "./weather.css";
import WeatherService from '../../services/WeatherService.js'

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      Content: ""
    };
  }
  componentDidMount() {
    WeatherService.weather(this.state.location.lat, this.state.location.lon)
    .then(() => {
    })
    // eslint-disable-next-line no-console
    .catch(console.log)
  }

  render() {
    var {isLoaded} = this.state
    if(!isLoaded){
      return <div>Loading...</div>
    }
    else{
      return (
        <div>
          <Draggable>
            <Container id="NoteContainer">

            </Container>
          </Draggable>
      </div>
    );
  }
  }
}
export default Note;