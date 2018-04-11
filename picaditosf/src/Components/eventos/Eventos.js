import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/styles.css'

const Eventos = () => (
    
  <div>
	  <div className="cont_2">  
		  <div>  
		  	<h2>Eventos</h2>
	      <p> pagina con tolos los eventos disponibles para los usuarios</p>
      	<Link to='/torneo'>
      		<button className="btn">Torneo_1</button>
      	</Link>	  		
	  		{/*<Link to='/'><button>inicio</button></Link>	
	  		<Link to='/BuscarEvento'><button>buscar evento</button></Link>*/}		  		  		  			  	
	  	</div>
	  	<div>
	  		<h2>Buscar Evento</h2>
	  		<div>
	  		</div>
	  	</div>
	  </div>
	</div>  
  
  
  
)

export default Eventos