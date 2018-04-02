import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'

const Equipos = () => (
  <div>
	  <div className="cont_1">
	  	<div>    
	  		<h2>Equipos</h2>
        <p> pagina para los equipos por medio de las rutas deberia poder ser indexada a la pagina dde cada uno de los equipos de la app</p> 
	  		<Link to='/Misequipos'><button>Mi equipo</button></Link>	
	  		<Link to='/Equipo'><button>ver equipos</button></Link>	  		  			  	
			</div>
			<div>
				<h2>Buscar Equipo</h2>
			</div>
	  </div>
	</div>  
)

export default Equipos
