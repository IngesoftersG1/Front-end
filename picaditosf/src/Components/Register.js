import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

// The Roster component matches one of two different routes
// depending on the full pathname
const Register = () => (
  <div className="page">
    <h1>Juega con Picaditos!</h1>
     <div className="cont1">
     	<div id="form1">
		    <label for="uname"><b>Correo electronico</b></label>
		    <input placeholder="Enter Email" name="email" required/>

		    <label for="psw"><b>Nombre de usuario</b></label>
		    <input placeholder="Enter Username" name="user" required/>


		    <label for="psw"><b>Nombre</b></label>
		    <input placeholder="Enter firstname" name="firstname" required/>


		    <label for="psw"><b>Apellido</b></label>
		    <input type="password" placeholder="Enter lastname" name="lastname" required/>

		    <label for="psw"><b>Contraseña</b></label>
		    <input type="password" placeholder="Enter password" name="password" required/>
		        
		    <label>
		      <input type="checkbox" checked="checked" name="acept"/> Acepto condiciones
	    	</label>

		    <button type="submit">Crear cuenta</button>
		    <Link to='/'><button>Back</button></Link>
		</div>	    
  	</div>
  </div>
)


export default Register