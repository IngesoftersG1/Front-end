
import React, { Component } from "react";
import axios from 'axios';
import { Redirect, Route } from 'react-router-dom';

export default class auth extends Component {
  state = {
    a: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
       var a = res.data;
        this.setState({ a });
        
        <Redirect to={{
        pathname: '/perfil',
        }}
        />
        
      })
  }

  render() {
    return (
      <ul>
   
      </ul>
    )
  }
}

export var a;

