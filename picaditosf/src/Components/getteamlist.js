
import React, { Component } from "react";
import axios from 'axios';


export default function getteamlist ()  {
  
 
  
    alert('ejecutando funcion');
    axios.get('https://jsonplaceholder.typicode.com/users')
       .then(function (response) {
         alert('llamamos los valores')
         console.log(response);
       })
       .catch(function (error) {
         alert('error')
       });
  }







{/*
export default class getteamlist extends Component {
  state = {
    equipos: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`) // https://nuevasramas-garayf.c9users.io/getteamlist
      .then(res => {
        const equipos = res.data;
        this.setState({ equipos });
      })
  }
}
*/}
