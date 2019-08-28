import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getWeather} from '../../store/actions/weather'
import './weather.css';

class Weather extends Component {

  static propTypes = {
    getWeather: PropTypes.func.isRequired,
    weather: PropTypes.object.isRequired
  }

  static defaultProps = {
    weathers: []
  }

  componentDidMount() {
    this.props.getWeather();
  }

  render() {

    return (
      <div>
        <h2>Weather</h2>
        <ul>
        {this.props.weathers.map(weather =>
          console.log(weather)
        )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather
})

const dispatchToProps = (dispatch) => ({
   getWeather: () => dispatch(getWeather())
})

export default connect(mapStateToProps, dispatchToProps)(Weather);
