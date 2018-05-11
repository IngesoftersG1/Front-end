import React, { Component } from "react";
import axios from 'axios';
import * as consts from '../consts';

export default class user extends Component {
  state = {
    usuarios: []
  }

  componentDidMount() {
    axios.get(consts.SERVER_URL+`geteventslist`)
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
