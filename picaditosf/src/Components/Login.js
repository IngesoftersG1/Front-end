import * as sessionActions from '../Actions/sessionsActions';
import React, { Component , PropTypes } from "react";
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../styles/styles.css'
import axios from 'axios';
import swal from 'sweetalert2'
import { GoogleLogin } from 'react-google-login';
import * as consts from '../consts';

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
   

    this.props.actions.loginUser(this.state);
   // window.location.reload();
  }

  verificator(data){
		const info = JSON.stringify({TokenId:data})
		console.log("json",info)
		const request = new Request(consts.SERVER_URL+`user_sign_in/google`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: info
    });

    return fetch(request).then(response => {
    	console.log("responsebackgoog",response);
      return response.json();
    })
    .catch(error => {
      return error;
    });
	}

  responseGoogle = (googleUser) => {
    console.log("id", googleUser );
    var id_token = googleUser.getAuthResponse().id_token;
    //var googleId = googleUser.getId();
    var datauser = googleUser.getBasicProfile();
    //console.log("datagoogl",response)
    var user = {
          user_name: datauser.getGivenName(),
 //         user_name: datauser.getName(),
          nombres: datauser.getGivenName(),
          apellidos: datauser.getFamilyName(),
          email: datauser.getEmail()
    }
    console.log("user",user)
    this.verificator(id_token).then(res =>{
      console.log("res",res)
    }
    )
    console.log({accessToken: id_token});
    console.log("datag",datauser)
    sessionStorage.setItem('jwt', id_token);
    sessionStorage.setItem('user',JSON.stringify(user));
    swal(
			"Ha ingresado correctamente",
			"¡Bienvenido!",
			"success"
			).then((value) => {
				window.location.reload()
		})
  }




  render() {
    return (
      <div className="cont_1">
        <h1 className="text-center">Iniciar sesión</h1>
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
            className="btn btn-lg btn-block">Iniciar sesion
          </button>

          <p></p>
          
          <GoogleLogin clientId="506449915249-mpnernms8pplsn9m3m1mnlsgvphj3km9.apps.googleusercontent.com"
                     className="btn btn-lg btn-block btn-google"
                     onSuccess={this.responseGoogle}
                     onFailure={this.responseGoogle}>
            <span><img src="http://reeoo.qiniudn.com/Google-icon.png!icon512" style={{'border-radius':'50%'}} width="30"/>
               {' Ingresar con Google +'}</span>
          </GoogleLogin>
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