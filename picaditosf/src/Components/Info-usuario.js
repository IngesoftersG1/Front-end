
import React, { Component } from "react";
import axios from 'axios';

export default class user extends Component {
  state = {
    usuarios: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/geteventslist`)
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
