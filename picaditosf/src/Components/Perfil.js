import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'

const Perfil = () => (
  <div className="container cont_1">
	  <div className="row"> 
	  	<div className="col-md-4">
	  		<img src={require('../imagenes/perfil.jpg')} className="img-responsive profile-img"/>
	  	</div>
	  	<div className="col-md-8">
	  		<h1>NAME</h1>
	  		<h4>Username</h4>
  		{/*	<Link to='/'><button>inicio</button></Link>	
  			<Link to='/Eventos'><button>Eventos</button></Link>	  		  			  	
	  	*/}
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