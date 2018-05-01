
import React, { Component } from "react";
import axios from 'axios';

export default function Userchange () {


    axios.patch('http://localhost:3001/users', {
    params: {
    user_name:'Vladimir'
  }
})

.then(res => {
        console.log(res);
        const eventos = res.data;
        this.setState({ eventos });

      });
  }
