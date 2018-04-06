
import React, { Component } from "react";
import axios from 'axios';

export default class geteventlist extends Component {
  state = {
    eventos: []
  }

  componentDidMount() {
    axios.get(`https://nuevasramas-garayf.c9users.io/geteventslist`)
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