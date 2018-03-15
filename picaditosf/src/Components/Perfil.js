import React from 'react'
import { Link } from 'react-router-dom'
const Perfil = () => (
  <div>
	  <div className="cont1">    
	    <img src={require('./imagenes/perfil.jpg')} width="50" height="50" />
	  	<h1>PERFIL</h1>	  	
	  	<p> informacion del usuario en cuestion utenticado "quisas por medio de un token" </p>
	  		<Link to='/login'><button>Login</button></Link>	
	  		<Link to='/register'><button>Registro</button></Link>	  		  			  	
	  </div>
	</div>
)

export default Perfil