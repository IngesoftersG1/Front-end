import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from 'react-router-dom'
import * as consts from '../consts'
import axios from 'axios'
import '../styles/styles.css'
import swal from 'sweetalert2'

//PROTEJER RUTA URGENTEMENTE!!!
export default class Lostpass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
    };
  }
  
  componentDidMount() {
    this.setState({user_name: this.props.match.params.user_name})
     //PUT to confirmation user
  }
  
  sendVerification(e){
    e.preventDefault();
    console.log("insend")
    
    axios.put(consts.SERVER_URL+`users/1?user_name=`+this.state.user_name,{
      confirmed: true
    })
    .then(res => {
      const eventos = res.data;
      //setTimeout(() => this.setState({ isLoading: false }), 2000);
      //this.setState({ eventos });
      swal(
					"Se ha validado correctamente",
					"continue",
					"success"
					).then((value) => {
						window.location.href='/login'
				})
    })  
}

  render() {
    return (
      <div className="cont_1 text-center">
        
        <h1>{this.state.user_name+' Bienvenido a Picaditos!'}</h1>
        <div className="row " >
          <div className="col" align='center'>
            <button className="btn btn-success" onClick={(e) => this.sendVerification(e)}>Presiona para confirmar</button>
          </div>
        </div>
        <div className="row " align='center'>
          <div className="col" align='center'>
            <a href='/'>No he creado usuario en esta página!</a>
          </div>
        </div>
      </div>
    );
  }
}