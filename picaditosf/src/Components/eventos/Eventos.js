import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo'
import * as consts from '../../consts';

const divStyle = {
  color: 'white',
}

export default class Eventos extends Component {
  state = {
    eventos: [], isLoading: true
  }

  componentDidMount() {
    axios.get(consts.SERVER_URL+`torneos `)
        .then(res => {
        const eventos = res.data;
        this.setState({ eventos });
        setTimeout(() => this.setState({ isLoading: false }), 1000);
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

<div className="cont_2">
		<div className="container">

		  	<p  style={divStyle}>En esta pagina puede ver los torneos y partidos si desea crear o buscar un evento puede hacerlo llenando el siguiente formulario</p>
        <div class="row">
        <div class="col-sm-2" align="center"></div>
        <div class="col-sm-2" align="center">
        <a href='/createEv'>
            <button className="btn">Crear evento</button>
        </a>
        </div>
        <div class="col-sm-4" align="center"></div>
        <div class="col-sm-2" align="center">
        <a href='/BuscarEvento'>
            <button className="btn">Buscar evento</button>
        </a>
        </div>
        </div>

		</div>
</div>


{ this.state.eventos.map(evento =>
	 <div className="cont_2">
		<div className="container">
		<div className="row align-items-start">
		  	<div className="col-md-2">
		  		<img src={require('../../imagenes/team.jpg')} className="img-responsive profile-img"/>
		  	</div>

		  	<div className="col-md-8">
		  		<h1>
		  		 {evento.nombre}
		  	    </h1>

		  		<h4>Organizador: {evento.organizador_name}</h4>
		  	</div>

		  	<div className="col-md-2 " >

		  		  	<Link to={`/torneo/${evento.id}`}>
		  		  		<button className="btn btn-info prf-btn" >Ver Torneo</button>
							</Link>

		  	</div>
		</div>
		</div>
		</div>
		)}

	</div>

    )
  }
}
