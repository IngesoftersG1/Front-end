import React from 'react'
import { Link } from 'react-router-dom'
const Mis_equipos = () => (
<div>    
  <div className="cont_2">
	<div className="container"> 	
		<div className="row align-items-start"> 
		  	<div className="col-md-2">
		  		<img src={require('../imagenes/team.jpg')} className="img-responsive profile-img"/>
		  	</div>
		  	
		  	<div className="col-md-8">
		  		<h1>Equipo 1</h1>
		  		<h4>calificación</h4>
		  	</div>
		  	
		  	<div className="col-md-2 " >
		   
		  		   <button className="btn">Ver Informacion</button>
		  	
		  	</div>
		</div>
		</div>
		</div>
		
	
  <div className="cont_2">
	<div className="container"> 	
		<div className="row align-items-start"> 
		  	<div className="col-md-2">
		  		<img src={require('../imagenes/team.jpg')} className="img-responsive profile-img"/>
		  	</div>
		  	
		  	<div className="col-md-8">
		  		<h1>Equipo 2</h1>
		  		<h4>calificación</h4>
		  	</div>
		  	
		  	<div className="col-md-2 " >
		   
		  		   <button className="btn">Ver Informacion</button>
		  	
		  	</div>
		</div>
		</div>
		</div>
	
	

	</div>   
)

export default Mis_equipos