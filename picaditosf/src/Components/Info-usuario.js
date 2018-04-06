
import React, { Component } from "react";
import axios from 'axios';

export default class user extends Component {
  state = {
    usuarios: []
  }

  componentDidMount() {
    axios.get(`https://nuevasramas-garayf.c9users.io/geteventslist`)
      .then(res => {
        const usuarios = res.data;
        this.setState({ usuarios });
      })
  }

  render() {
    return (
      <ul>
        { this.state.usuarios.map(usuario => <li>{usuario}</li>)}
      </ul>
    )
  }
}