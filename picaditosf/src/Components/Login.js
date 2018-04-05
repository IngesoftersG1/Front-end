import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from 'react-router-dom'
import '../styles/styles.css'
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 4;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();    
    console.log(this.state)
    
    axios.post(`https://jsonplaceholder.typicode.com/users`, this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
        
      })
  }

  render() {
    return (
      <div className="cont_1">
        <form onSubmit={this.handleSubmit}>
          {/*<FormGroup controlId="" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>*/}

          <label htmlFor="name">Correo electronico</label>
          <input placeholder="Enter Email" 
              id="email" 
              type='email' 
              onChange={this.handleChange}
              value={this.state.email}
              className="form-control" 
              required/>

          <label htmlFor="psw">Contraseña</label>
          <input placeholder="Enter password" 
              id="password" 
              type='password' 
              onChange={this.handleChange}
              value={this.state.password}
              className="form-control" 
              required/>
          
          <div className="row">
            <div className="col-sm-6 checkbox mb-3">
              <label className="nav-link">
                <input type="checkbox" value="remember-me"/>Remember me
              </label>
            </div>
            <div className="col-sm-6 mb-3">
              <Link className="nav-link" to='/Lostpass'>Forgot Password</Link>
            </div>
          </div>

          <button type="submit" 
            disabled={!this.validateForm()}
            className="btn btn-lg btn-block">Ingresar        
          </button>
        </form>            
      </div>
      
    );
  }
}