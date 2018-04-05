import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'

const Perfil = () => (
  <div className="cont_2">
		<div className="container"> 	
		  <div className="row align-items-start"> 
		  	<div className="col-md-2">
		  		<img src={require('../imagenes/perfil.jpg')} className="img-responsive profile-img"/>
		  	</div>
		  	<div className="col-md-6">
		  		<h1>NAME</h1>
		  		<h4>Username</h4>
		  	</div>
		  	<div className="col-md-2">
		  		<button className="btn">Editar Perfil</button>
		  	</div>
		  	<div className="col-md-2">
		  		<Link to='/Configuracion'>
		  			<button className="btn">Configuración</button>
		  		</Link>
		  	</div>
		 	</div>
	  </div>
		<div className="container">
		  <ul class="nav nav-tabs">
		    <li className="active tablink"><a data-toggle="tab" href="#perfil">Perfil</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#info">Información</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#estat">Estadisticas</a></li>
		  </ul>

		  <div className="tab-content">
		    <div id="perfil" className="tab-pane active">
		      <h3>Perfil</h3>
		    </div>
		    <div id="info" className="tab-pane fade">
		      <h3>Información</h3>
		    </div>
		    <div id="estat" className="tab-pane fade">
		      <h3>Estadisticas</h3>
		    </div>
		  </div>
		</div>
	</div>
)

export default Perfil