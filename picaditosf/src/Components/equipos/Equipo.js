import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../../styles/styles.css'
import Example from '../Loading/logo'
import MyPdfViewer from '../PDF/pdfview'
import session from '../../Reducers/sessionReducer';
import axios from 'axios';
import * as consts from '../../consts';

export default class Perfil extends Component {
  state = {
    equipos: [], isLoading: true, users:[]
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
          setTimeout(() => this.setState({ isLoading: false }), 500);
          axios.get(consts.SERVER_URL+`equipos/1?`, {
    			params: {
					nombre: sessionStorage.check_equipo
				}
			})
    		.then(res => {
        	const equipos = [res];
        	console.log(equipos)
        	const usuarios = equipos[0].data.users
        	console.log(usuarios)
    		this.setState({equipos});
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
    	{ this.state.equipos.map(equipo =>
				<div className="cont_2">
		<div className="container">
		  <div className="row align-items-start">
		  	<div className="col-md-2">
		  		<img src={require('../../imagenes/ball-fire.jpg')} className="img-responsive profile-img"/>
		  	</div>
		  	<div className="col-md-10">

			  	<div className="row">

			  		<h1>{equipo.data.nombre}</h1>
						
						
						
				  		

						
			  	</div>
			  	<div className="row">
			  		<div className="row align-items-start">
						<div className="col-md-8">
		  					<h4>
		  					{equipo.data.deporte.nombre}
		  	    			</h4>
		  	    		</div>
		  	    	</div>
			  	</div>


		  	</div>
		 	</div>
	  </div>
		<div className="container">
		  <ul className="nav nav-tabs">
		    <li className="active tablink"><a data-toggle="tab" href="#info">Informacion</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#jug">Jugadores</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#tor">Torneos</a></li>
		  </ul>

		  <div className="tab-content">

		    	<div id="info" className="tab-pane active">
		    		 <h3>Información</h3>
		    		 <h3>Nombre capitan: {equipo.data.capitan_name}</h3>
		    	</div>

		    	<div id="jug" className="tab-pane fade">
		    		<h3>Jugadores</h3>
		    		{ this.state.equipos[0].data.users.map(user =>

					<div className="container">
					<div className="row align-items-start">
						<div className="col-md-8">
		  					<h4>
		  					{user.user_name}
		  	    			</h4>
		  	    		</div>
		  	    		<div className="col-md-2">
						  	<Link to='/usuario'>
		  		  				<button className="btn btn-info prf-btn" onClick={() => this.storeUserName(user.user_name)}>Ver Usuario</button>
							</Link>
		  	    		</div>
		  	    	</div>

		  		</div>
					 )}

		    </div>
		    <div id="tor" className="tab-pane fade">
					<h3> Torneos </h3>
					{ this.state.equipos[0].data.torneos.map(torneo =>

					<div className="container">
					<div className="row align-items-start">
						<div className="col-md-8">
		  					<h4>
		  					{torneo.nombre}
		  	    			</h4>
		  	    		</div>
		  	    		<div className="col-md-2">
						  <Link to='/torneo'>
		  		  		<button className="btn btn-info prf-btn" onClick={() => this.storeTorneoName(torneo.nombre)}>Ver Torneo</button>
							</Link>
		  	    		</div>
		  	    	</div>

		  		</div>
					 )}
				</div>
		  </div>

		</div>
	</div>

		)}

	</div>



    )
  }

}
