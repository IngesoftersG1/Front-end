import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './styles.css'

const Landing = () => (
	<div>
	  <div className="cont1">    
	    <img className="logo1"
	    src="https://cdn0.iconfinder.com/data/icons/cup/154/football-ball-fire-sport-512.png" />
	  	<h1>PICADITOS</h1>	  	
	  		<Link to='/login'><button>Login</button></Link>	
	  		<Link to='/register'><button>Registro</button></Link>	  		  			  	
	  </div>
	</div>
)

export default Landing