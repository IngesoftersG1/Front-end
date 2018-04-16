import React from 'react'
import { Link } from 'react-router-dom'

const Equipo = () => (
	
  <div className="cont_2">
		<div className="container"> 	
		  <div className="row align-items-start"> 
		  	<div className="col-md-2">
		  		<img src={require('../../imagenes/team.jpg')} className="img-responsive profile-img"/>
		  	</div>
		  	<div className="col-md-8">
		  		<h1>Equipo_1</h1>
		  		<h4>calificación</h4>
		  	</div>
			  	<div className="col-md-2">
			  		<button className="btn">Aplicar</button>
			  	</div>
		 	</div>
	  </div>
		<div className="container">
		  <ul class="nav nav-tabs">
		    <li className="active tablink"><a data-toggle="tab" href="#perfil">Información</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#estat">Estadisticas</a></li>
		  </ul>

		  <div className="tab-content">
		    <div id="perfil" className="tab-pane active">
		      <h3>Información</h3>
		    </div>
		    <div id="estat" className="tab-pane fade">
		      <h3>Estadisticas</h3>
		    </div>
		  </div>
		</div>
	</div>   
)

export default Equipo