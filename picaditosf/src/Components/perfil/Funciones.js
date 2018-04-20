
import React, { Component } from "react";
import axios from 'axios';

export default function Userchange () {


    axios.patch('https://picaditos-dehormazah.c9users.io/users', {
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


