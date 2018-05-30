import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from 'react-router-dom'
import '../styles/styles.css'

export default class Lostpass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  validateForm() {
    return this.state.email.length > 0 ;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();    
    console.log(this.state)
  }

  render() {
    return (
      <div>
      <div className="cont_1">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Send
          </Button>
        </form>  
        </div>
        <div className="cont_1">
          <h1>h1-H1</h1>
          <h2>h2-H2</h2>
          <h3>h3-H3</h3>
          <h4>h4-H4</h4>
          <h5>h5-H5</h5>
          <h6>h6-H6</h6>
        </div>
      </div>
      
    );
  }
}