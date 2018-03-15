import React from 'react'
import { Link } from 'react-router-dom'
const Equipo = () => (
    
   <div>
	  <div className="cont1">    
	  	 <h1>Equipos</h1>
         <p> pagina para los equipos por medio de las rutas deberia poder ser indexada a la pagina dde cada uno de los usuarios</p>
  
	  		<Link to='/Misequipos'><button>ver mis equipos</button></Link>	
	  		<Link to='/BuscarEquip'><button>buscar equipo</button></Link>	  		  			  	
	  </div>
	</div>  
  
  
  
)

export default Equipo