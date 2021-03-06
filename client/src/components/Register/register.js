import React, {Component} from 'react';
import {Button, TextField, Typography, Container} from '@material-ui/core';
import AuthService from "../../services/AuthService";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      repeatpassword: ""
    };
  }

  validateForm() {
    return (
      this.state.username.length > 0 &&
      this.state.firstname.length > 0 && 
      this.state.lastname.length > 0 &&
      this.state.email.length > 0 && 
      this.state.password.length > 7 && 
      this.state.repeatpassword.length > 7 && 
      this.state.password === this.state.repeatpassword)
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      await AuthService.registerUser(this.state.username.toLowerCase(), this.state.firstname, this.state.lastname, this.state.email, this.state.password)
      .then(data => {
        console.log("done")
      });
      this.props.history.push('/login')
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField variant="outlined" margin="normal" required fullWidth label="Username" value={this.state.username}
            onChange={this.handleChange} id="username" />
          <TextField variant="outlined" margin="normal" required fullWidth value={this.state.firstname}
            onChange={this.handleChange} label="Firstname" id="firstname" />
          <TextField variant="outlined" margin="normal" required fullWidth value={this.state.lastname}
            onChange={this.handleChange} label="Lastname" id="lastname" />
          <TextField variant="outlined" margin="normal" required fullWidth value={this.state.email}
            onChange={this.handleChange} label="Email" id="email" />
          <TextField variant="outlined" margin="normal" required fullWidth value={this.state.password}
            onChange={this.handleChange} label="Password" type="password" id="password" />
          <TextField variant="outlined" margin="normal" required fullWidth value={this.state.repeatpassword}
            onChange={this.handleChange} label="Repeat Password" type="password" id="repeatpassword" />
          <Button type="submit" fullWidth disabled={!this.validateForm()} variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </Container>
    );
  }
}