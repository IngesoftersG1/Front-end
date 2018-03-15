import React from 'react'
import { Link } from 'react-router-dom'

const Configuracion = () => (
   <div>
	  <div className="cont1">    
	  	 <h1>configuracion!</h1>
         <p> cambios y ediciones al usuario y o programa </p>
         
	  		<Link to='/login'><button>Login</button></Link>	
	  		<Link to='/register'><button>Registro</button></Link>	  		  			  	
	  </div>
	</div>
  
)

export default Configuracion