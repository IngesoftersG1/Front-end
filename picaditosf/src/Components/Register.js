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
      user_name: '',
      nombres: '',
      apellidos: '',
      email:'',
      fecha_nacimiento:'',
      password: '',
      password_confirmation: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

	createUser(){
		const info = JSON.stringify(this.state)
		console.log("json",info)

		const request = new Request(`http://localhost:3001/users`, {

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

	myFunction(){
		alert(this.state.email);
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
					<h1>Registrarse</h1>
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
						<input placeholder="Enter lastname"
							name="lastname"
							type='text'
		          onChange={event => this.setState({apellidos: event.target.value})}
		          value={this.state.apellidos}
							className="form-control"
							required/>

							<form id="form1" runat="server">
							<br />Fecha de nacimiento
	    <div>

	Día&nbsp;&nbsp;&nbsp;
	<select name='day' id='dayddl'>
	<option value='1'>1</option>
	<option value='2'>2</option>
	<option value='3'>3</option>
	<option value='4'>4</option>
	<option value='5'>5</option>
	<option value='6'>6</option>
	<option value='7'>7</option>
	<option value='8'>8</option>
	<option value='9'>9</option>
	<option value='10'>10</option>
	<option value='11'>11</option>
	<option value='12'>12</option>
	<option value='13'>13</option>
	<option value='14'>14</option>
	<option value='15'>15</option>
	<option value='16'>16</option>
	<option value='17'>17</option>
	<option value='18'>18</option>
	<option value='19'>19</option>
	<option value='20'>20</option>
	<option value='21'>21</option>
	<option value='22'>22</option>
	<option value='23'>23</option>
	<option value='24'>24</option>
	<option value='25'>25</option>
	<option value='26'>26</option>
	<option value='27'>27</option>
	<option value='28'>28</option>
	<option value='29'>29</option>
	<option value='30'>30</option>
	<option value='31'>31</option>

	</select>
  &nbsp;&nbsp;&nbsp;
	Mes
	&nbsp;&nbsp;&nbsp;
	<select name='month' id='monthddl'>
	<option value='1'>1</option>
	<option value='2'>2</option>
	<option value='3'>3</option>
	<option value='4'>4</option>
	<option value='5'>5</option>
	<option value='6'>6</option>
	<option value='7'>7</option>
	<option value='8'>8</option>
	<option value='9'>9</option>
	<option value='10'>10</option>
	<option value='11'>11</option>
	<option value='12'>12</option>
	</select>
  &nbsp;&nbsp;&nbsp;
	Año
	&nbsp;&nbsp;&nbsp;
	<select name='day' id='blah'>
	<option value='1947'>1947</option>
	<option value='1948'>1948</option>
	<option value='1949'>1949</option>
	<option value='1950'>1950</option>
	<option value='1951'>1951</option>
	<option value='1952'>1952</option>
	<option value='1953'>1953</option>
	<option value='1954'>1954</option>
	<option value='1955'>1955</option>
	<option value='1956'>1956</option>
	<option value='1957'>1957</option>
	<option value='1958'>1958</option>
	<option value='1959'>1959</option>
	<option value='1960'>1960</option>
	<option value='1961'>1961</option>
	<option value='1962'>1962</option>
	<option value='1963'>1963</option>
	<option value='1964'>1964</option>
	<option value='1965'>1965</option>
	<option value='1966'>1966</option>
	<option value='1967'>1967</option>
	<option value='1968'>1968</option>
	<option value='1969'>1969</option>
	<option value='1970'>1970</option>
	<option value='1971'>1971</option>
	<option value='1972'>1972</option>
	<option value='1973'>1973</option>
	<option value='1974'>1974</option>
	<option value='1975'>1975</option>
	<option value='1976'>1976</option>
	<option value='1977'>1977</option>
	<option value='1978'>1978</option>
	<option value='1979'>1979</option>
	<option value='1980'>1980</option>
	<option value='1981'>1981</option>
	<option value='1982'>1982</option>
	<option value='1983'>1983</option>
	<option value='1984'>1984</option>
	<option value='1985'>1985</option>
	<option value='1986'>1986</option>
	<option value='1987'>1987</option>
	<option value='1988'>1988</option>
	<option value='1989'>1989</option>
	<option value='1990'>1990</option>
	<option value='1991'>1991</option>
	<option value='1992'>1992</option>
	<option value='1993'>1993</option>
	</select>
 </div>
</form>
<br />

<button type="button" onclick="myFunction()">Try it</button>

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
						<button type="submit" className="btn btn-lg btn-success btn-block">Crear cuenta</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Register
