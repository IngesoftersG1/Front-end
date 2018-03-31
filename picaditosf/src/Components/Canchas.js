import React from 'react'
import { Link } from 'react-router-dom'
import MapContainer from './MapContainer.js'
import '../styles/styles.css'


const Canchas = () => (
  <div className="cont_1">    
	  <h1>Canchas!</h1>
    	<p> esta es la pagina de las canchas aqui deberia salir el mapa y lo demas </p>
    	<MapContainer />
	  	<Link to='/'><button>Inicio</button></Link>	
	  	<Link to='/BuscarPartido'><button>Buscar partido</button></Link>	  		  			  	
	  </div>


)

export default Canchas