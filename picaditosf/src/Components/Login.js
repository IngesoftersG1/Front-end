import * as sessionActions from '../Actions/sessionsActions';
import React, { Component , PropTypes } from "react";
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../styles/styles.css'
import axios from 'axios';

import { GoogleLogin } from 'react-google-login-component';

export var a;

class Login extends Component {
  constructor(props,context) {
    super(props,context);
    a = null;
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log(this.props)
    axios.post(`https://jsonplaceholder.typicode.com/users`, this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
        a = this.state.email;    
    
      })
    this.props.actions.loginUser(this.state);
   // window.location.reload();
  }
  
  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();
    
    console.log({ googleId });
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }

  


  render() {
    return (
      <div className="cont_1">
        <GoogleLogin socialId="850983779532-u20mj39en2t6f5sq8ea0c6nqdh7hooqe.apps.googleusercontent.com"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                     buttonText="Login With Google"/>
            
        <form onSubmit={this.handleSubmit}>
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions,dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Login);