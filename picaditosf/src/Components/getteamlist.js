
import React, { Component } from "react";
import axios from 'axios';

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

  render() {
    return (
      <ul>
        { this.state.equipos.map(equipo => <li>{equipo.name}</li>)}
      </ul>
    )
  }
}