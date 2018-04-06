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
      username: '',
      name: '',
      email:'',
      password: '',
      passwordConf: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    //todo api request
    console.log(this.state)
    console.log(a);
  }
  
	render() {
		return (
			<div className="text-center">
				<div className="cont_1">
					<h1>Juega con Picaditos!</h1>
					<form id="form1" onSubmit={this.onSubmit}>
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
		          onChange={event => this.setState({username: event.target.value})}
		          value={this.state.username}
							className="form-control"
							required/>

						<label htmlFor="psw">Nombre</label>
						<input placeholder="Enter firstname" 
							name="firstname" 
							type='text' 
		          onChange={event => this.setState({name: event.target.value})}
		          value={this.state.name}
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
		          onChange={event => this.setState({passwordConf: event.target.value})}
		          value={this.state.passwordConf}
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