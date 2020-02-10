import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Row, Col} from 'react-bootstrap'
import Weather from '../Weather/weather'
import Notes from '../Notes/notes'
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      location: {
      },
      isLoaded: false,
    };
    this.displayLocationInfo = this.displayLocationInfo.bind(this);
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
    }
  } 
  displayLocationInfo(position) {
    const location = {lat: position.coords.latitude, lon: position.coords.longitude}
    this.setState({
      location,
      isLoaded: true,
    })
  }
  
  render() {
    if(this.state.isLoaded){
      let loggedIn = (this.props.user) ? true : false
      if(loggedIn){
        return (
          <div >
            <h1>Hello: {this.props.user.name}, welcome to Utility-site!</h1>
            <Row>
                <Col><Weather lat={this.state.location.lat} lon={this.state.location.lon} /></Col>
                <Col></Col>
                <Col><Notes user={this.props.user.name}/></Col>
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
          </div>
        );
      }else{
        return(
          <div>
            <h1>Not logged in</h1>
          </div>
        )
      }
    }else{
      return(
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }

  }
}
/**
 * Maps the Redux state so that the global state is available through the local props in this component
 */
const mapStateToProps = (state) => {
  const { authentication } = state
  return {
    user: authentication[0]
  }
};

export default connect(mapStateToProps)(Home);