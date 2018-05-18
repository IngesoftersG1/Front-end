import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from 'react-router-dom'
import '../styles/styles.css'

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

  render() {
    return (
      <div className="cont_1 text-center">
        
        <h1>{this.state.user_name+' Bienvenido a Picaditos!'}</h1>
        <div className="row " align='center'>
          <button className="btn btn-success">Presiona para confirmar</button>
        </div>
        <div className="row " align='center'>
          <a href='/'>No he creado usuario en esta página!</a>
        </div>
      </div>
    );
  }
}