
import React, { Component } from "react";
import axios from 'axios';
import * as consts from '../../consts';

export default function Userchange () {


    axios.patch(consts.SERVER_URL+'users', {
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
