import React from 'react'
import { Link } from 'react-router-dom'
const Equipos = () => (
   <div>
	  <div className="cont1">    
	  	 <h1>Equipos</h1>
         <p> pagina para los equipos por medio de las rutas deberia poder ser indexada a la pagina dde cada uno de los equipos de la app</p>
  
	  		<Link to='/Misequipos'><button>Mi equipo</button></Link>	
	  		<Link to='/Equipo'><button>ver equipos</button></Link>	  		  			  	
	  </div>
	</div>  
)

export default Equipos
