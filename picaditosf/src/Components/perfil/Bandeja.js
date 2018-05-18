import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo'
import session from '../../Reducers/sessionReducer';
import * as consts from '../../consts';
var a;
/*
{
this.state.mensajes.map(evento => {evento[0].title})
}
*/
export default class Bandeja extends Component {
  state = {
    mensajes: [], isLoading: true,
    bandeja: []
  }
  readUnread(status){
    

  }
  componentDidMount() {
    axios.get(consts.SERVER_URL+`mensajes`, {
/*
    params: {
    user_name:"asd1"
  }*/

    })
      .then(res => {
        const mensajesres = res.data;
      	console.log(res)
        this.setState({mensajes: mensajesres });
        
        let newBandeja = []
        mensajesres.forEach(function(men) {
          console.log("men",men)
          if(men.usuario_2_name==JSON.parse(sessionStorage.user).user_name){
            newBandeja.push(men)
          }
        });
        
        this.setState({bandeja: newBandeja})
        console.log("bandeja",this.state.bandeja)

        setTimeout(() => this.setState({ isLoading: false }), 2000);

      })
      
      console.log("bandeja",this.state.bandeja)
    
  }
  




 render() {
    if(this.state.isLoading){
    return (<div>

        {Example}

        </div>); // render the loading component
    }


    return (

<div>



{ this.state.bandeja.map(mensaje =>
	 <div className="cont_2">
		<div className="container">
		<div className="row align-items-start">
		  	<div className="col-md-12">
		  		<h1>{'From: ' + mensaje.user_id}</h1>
		  		<div class="dropdown-divider"></div>
		  		<h4>Asunto: {mensaje.asunto}</h4>
		  		<div class="dropdown-divider"></div>
		  		<h4>{mensaje.contenido}</h4>
		  	    </div>

		</div>
		</div>
		</div>
		)}
  		<div className="cont_2">
			 <div align="center">
		  	 <a href='/mensajes'>
		  		   <button className="btn">Nuevo mensaje</button>
		  	 </a>
		  	 </div>
		</div>
	</div>



    )
  }
}
