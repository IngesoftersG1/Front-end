import React,{ Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/styles.css'
import a from './Login'


// The Roster component matches one of two different routes
// depending on the full pathname
class Register extends Component{ 
	constructor(props){
    super(props);
    this.state = {
      user_name: '',
      nombres: '',
      apellidos: '',
      email:'',
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
			window.location.reload();
      return response.json();
    }).catch(error => {
      return error;
    });
	}
	
  onSubmit(e){
    e.preventDefault();
    //todo api request
    this.createUser()
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