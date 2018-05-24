
import React, { Component } from "react";
import axios from 'axios';

export default class UnderConstruction extends Component {

  componentDidMount(){
    console.log("if", navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function(objPosition)
		{
			var lon = objPosition.coords.longitude;
			var lat = objPosition.coords.latitude;
      console.log("lat",lat)
      console.log("long",(lon))
		}, function(objPositionError)
		{
			switch (objPositionError.code)
			{
				case objPositionError.PERMISSION_DENIED:
					console.log("No se ha permitido el acceso a la posición del usuario.");
				break;
				case objPositionError.POSITION_UNAVAILABLE:
					console.log("No se ha podido acceder a la información de su posición.");
				break;
				case objPositionError.TIMEOUT:
					console.log("El servicio ha tardado demasiado tiempo en responder.");
				break;
				default:
					console.log("Error desconocido.");
			}
		}, {
			maximumAge: 75000,
			timeout: 15000
		});
  }
 

  render() {
    return (
      
        
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
               
                <img src={require('../imagenes/under-construction.jpg')} height="100%" width="100%"/>
            </div>	    
          
      
    )
  }
}