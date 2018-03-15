import React from 'react'
import { Link } from 'react-router-dom'
const Eventos = () => (
    
   <div>
	  <div className="cont1">    
	  	 <h1>Eventos</h1>
         <p> pagina con tolos los eventos disponibles para los usuarios</p>
  
	  		<Link to='/'><button>inicio</button></Link>	
	  		<Link to='/BuscarEvento'><button>buscar evento</button></Link>	  		  			  	
	  </div>
	</div>  
  
  
  
)

export default Eventos