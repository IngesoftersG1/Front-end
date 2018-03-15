import React from 'react'
import { Link } from 'react-router-dom'
const Perfil = () => (
  <div>
	  <div className="cont1">    
	    <img src={require('./imagenes/perfil.jpg')} width="50" height="50" />
	  	<h1>PERFIL</h1>	  	
	  	<p> informacion del usuario en cuestion utenticado "quisas por medio de un token" </p>
	  		<Link to='/'><button>inicio</button></Link>	
	  		<Link to='/Eventos'><button>Eventos</button></Link>	  		  			  	
	  </div>
	</div>
)

export default Perfil