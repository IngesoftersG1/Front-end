import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo'
var a;
/*
{
this.state.eventos.map(evento => {evento[0].title})
}
*/
export default class Bandeja extends Component {
  state = {
    eventos: [], isLoading: true
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/mensajes`, {
/*
    params: {
    user_name:"asd1"
  }*/

})
      .then(res => {
        const eventos = res.data;
      	console.log(res)
        this.setState({ eventos });

        setTimeout(() => this.setState({ isLoading: false }), 2000);

      })
  }



 render() {
    if(this.state.isLoading){
    return (<div>

        {Example}

        </div>); // render the loading component
    }


    return (

<div>



{ this.state.eventos.map(evento =>
	 <div className="cont_2">
		<div className="container">
		<div className="row align-items-start">
		  	<div className="col-md-12">
		  		<h1>
		  		 {evento.user_id}
		  	    </h1>
		  		<div class="dropdown-divider"></div>
		  		<h4>Asunto: {evento.asunto}</h4>
		  		<div class="dropdown-divider"></div>
		  		<h4>{evento.contenido}</h4>
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
