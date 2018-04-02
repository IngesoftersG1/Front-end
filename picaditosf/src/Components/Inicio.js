import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/styles.css'

const Inicio = () => (
	<div className="text-center">
      <div className="inner cont_1">      
			  <img className="logo1" src={require('../imagenes/ball-fire.png')} />
        <h1>PICADITOS</h1>
        <p className="lead">        
					Registrate como jugador para obtener calificación de otros usuarios, compartir disponibilidad de tiempo para jugar y estadísticas<br/>
					Crea equipos, añade miembros y buscar jugadores.<br/>
					Consulta canchas disponibles para jugar</p>
        <p className="lead">
          <Link to='/login' >
          	<button className="btn btn-lg btn-secondary">Login</button></Link>	
		   		<Link to='/register'>
		   			<button className="btn btn-lg btn-secondary">Registro</button></Link>
        </p>
      </div>
  </div>


)

export default Inicio