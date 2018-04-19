
import React, { Component } from "react";
import axios from 'axios';

export default class getteamlist extends Component {
  state = {
    eventos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users', {
    params: {
    user_name: 'hola'
  }
})
.then(res => {
        console.log(res.config.params);
        const eventos = res.data;
        this.setState({ eventos });
        
      });
  }

  render() {
    return (
      <ul>
        { this.state.eventos.map(evento => <li>{evento.name}</li>)}
      </ul>
    )
  }
}