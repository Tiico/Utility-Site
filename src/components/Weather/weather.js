
import React from "react";
import "./weather.css";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ users: data })
      console.log(this.state.users)
    })
    .catch(console.log)
  }
  

  handleClick() {
    this.setState(state => ({
      weather: 'reeee'
    }));
  }

  render() {
    return (
      <div className="container">
      <div className="col-xs-12">
      <h1>My Users</h1>
      <ul>
      {this.state.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
      </ul>
      </div>
     </div>
    );
  }
}