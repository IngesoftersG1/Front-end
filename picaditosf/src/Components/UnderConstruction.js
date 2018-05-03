
import React, { Component } from "react";
import axios from 'axios';

export default class UnderConstruction extends Component {


 

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