import React,{ Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/styles.css'
import a from './Login'
import swal from 'sweetalert2'


// The Roster component matches one of two different routes
// depending on the full pathname
class Register extends Component{ 
	constructor(props){
    super(props);
    this.state = {
      user_name: 'daes1',
      nombres: 'Dav',
      apellidos: 'Est',
      email:'davidemail@unal.com',
      fecha_nacimiento:'1990-06-06',
      password: '123456',
      password_confirmation: '123456'
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
	
	createUser(){
		const info = JSON.stringify(this.state)
		console.log("json",info)
		const request = new Request(`https://picaditos-dehormazah.c9users.io/users`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: info
    });
    
    return fetch(request).then(response => {
    	
    	console.log("response",response);
    	if(response.status==422){
    		console.log("validations from server error")
    	}else if(response.status==200){
    		console.log("create user sucessfull")
    	}else{
    		console.log("Error inesperate")
    	}
      return response.json();
    })
    
    .catch(error => {
      return error;
    });
	}
	
  onSubmit(e){
    e.preventDefault();
    //todo api request
    this.createUser().then(res => {
			console.log("respo",res)
    	if (res.nombres){
    		console.log("success ",res.user_name)
				swal(
					"Registrado correctamente",
					"continue a login",
					"success"
					).then((value) => {
						window.location.href='/login'
				})
    		//window.location.href='/login'
    	}else{
    		console.log("responseresp",res)
    		var rmail , ruser
    		if (res.email){
    			rmail= " email " + res.email
    		}
    		if (res.user_name){
    			ruser=", user_name " + res.user_name
    		}
    		var msg = "No se pudo crear usuario " + rmail + ruser 
    		swal(
    			"No se pudo crear usuario ",
    			rmail + ruser ,
    			"warning"
    			)
    	}
   })
    
    //
    console.log(this.state)
  }
  
	render() {
		return (
			<div className="text-center">
				<div className="cont_1">
					<h1>Juega con Picaditos!</h1>
					<form className="form1" onSubmit={this.onSubmit}>
						<label htmlFor="name">Correo electronico</label>
						<input placeholder="Enter Email" 
							name="email" 
		          type='email' 
		          onChange={event => this.setState({email: event.target.value})}
		          value={this.state.email}
							className="form-control" 
							required/>

						<label htmlFor="psw">Nombre de usuario</label>
						<input placeholder="Enter Username" 
							name="user" 
							type='text' 
		          onChange={event => this.setState({user_name: event.target.value})}
		          value={this.state.user_name}
							className="form-control"
							required/>

						<label htmlFor="psw">Nombre</label>
						<input placeholder="Enter firstname" 
							name="firstname" 
							type='text' 
		          onChange={event => this.setState({nombres: event.target.value})}
		          value={this.state.nombres}
							className="form-control" 
							required/>
							
						<label htmlFor="psw">Apellido</label>
						<input placeholder="Enter firstname" 
							name="lastname" 
							type='text' 
		          onChange={event => this.setState({apellidos: event.target.value})}
		          value={this.state.apellidos}
							className="form-control" 
							required/>
							
						<label htmlFor="psw">Nacimiento</label>
						<input placeholder="Enter birth" 
							name="firstname" 
							type='text' 
		          onChange={event => this.setState({fecha_nacimiento: event.target.value})}
		          value={this.state.fecha_nacimiento}
							className="form-control" 
							required/>
							
						<label htmlFor="psw">Contraseña</label>
						<input placeholder="Enter password" 
							name="password" 
							type='password' 
		          onChange={event => this.setState({password: event.target.value})}
		          value={this.state.password}
							className="form-control" 
							required/>

						<label htmlFor="psw">Confirmar Contraseña</label>
						<input placeholder="Enter password" 
							name="passwordConf" 
							type='password' 
		          onChange={event => this.setState({password_confirmation: event.target.value})}
		          value={this.state.password_confirmation}
							className="form-control" 
							required/>

						<div className="checkbox mb-3">
		       	 	<label>
		         		<input type="checkbox" value="remember-me"/>Remember me
		       	 	</label>
		     		</div>
						<button type="submit" className="btn btn-lg btn-primary btn-block">Crear cuenta</button>
					</form>  	
				</div>
			</div>
		)
	}
}

export default Register