
import React, { Component } from "react";
import axios from 'axios';


export default function geteventlist () {

  
    alert('ejecutando funcion');
   
   
   
  axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1
    })
    
  .then(function (response) {
    var objeto = response;
    console.log(objeto)
  })
  .catch(function (error) {
    console.log(error);
  });
}
  
  
  
  
{/*
export default class geteventlist extends Component {
  state = {
    eventos: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const eventos = res.data;
        this.setState({ eventos });
      })
  }

  render() {
    return (
      <ul>
        { this.state.eventos.map(evento => <li>{evento.name}</li>)}
      </ul>
    )
  }
}

*/}