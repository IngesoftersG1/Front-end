import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo'

export default class Equipos extends Component {
  state = {
    eventos: [], isLoading: true
  }
	storeTorneoName(name){
  	sessionStorage.setItem('check_torneo', name);
  }
  storeUserName(name){
  	sessionStorage.setItem('check_user', name);
  }
  storeEquipoName(name){
  	sessionStorage.setItem('check_equipo', name);
  }
  componentDidMount() {
    axios.get(`http://localhost:3001/equipos `)
      .then(res => {
        const eventos = res.data;
      	const b = eventos[0].name;

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

		  		<h4>Capitan: {evento.capitan_name}</h4>
		  	</div>

		  	<div className="col-md-2 " >
							<Link to='/equipo'>
		  		  		<button className="btn btn-info prf-btn" onClick={() => this.storeEquipoName(evento.nombre)}>Ver Equipo</button>
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
