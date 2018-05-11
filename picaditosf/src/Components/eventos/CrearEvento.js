import React,{ Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../styles/styles.css'
import swal from 'sweetalert2'
import Select from 'react-select';
import session from '../../Reducers/sessionReducer';
import axios from 'axios';
import * as consts from '../../consts';

const divStyle = {
  color: 'black',

}

// The Roster component matches one of two different routes
// depending on the full pathname
class CrearEv extends Component{
	constructor(props){
    super(props);
    this.state = {
      fecha :"2018-05-02",
      premio:"Una patada en el culo",
      organizador_name:"Zed",
      nombre:"nombre defecto",
      equipos: '',
      deporte_id:'1'

    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  storeUserName(name){
    sessionStorage.setItem('check_user', name);
  }

  componentDidMount() {
        axios.get(consts.SERVER_URL+`users/1?`, {
        params: {
        user_name:JSON.parse(sessionStorage.user).user_name
        }
      })
        .then(res => {
          const user = [res.data];
          console.log(user[0].nombres)
        this.setState({ organizador_name:user[0].user_name });
  })
}




	createUser(){
		const info = JSON.stringify(this.state)
		console.log("json",info)
		const request = new Request(`http://localhost:3001/torneos `, {
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
    	}else if(response.status==200 || response.status==201){
        swal(
    			"Ha creado su torneo correctamente",
    			"ya puede verlo en la seccion de torneos",
    			"success"
        ).then((value) => {
						window.location.href='/perfil'
				})

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
     })

  }


	render() {



		return (

			<div className="text-center">
				<div className="cont_1">

					<h1>Crear Equipo</h1>
					<form className="form1" onSubmit={this.onSubmit}>
          <label htmlFor="name">Nombre del evento</label>
          <input placeholder="Enter Email"
            name="nombre"
            type='text'
            onChange={event => this.setState({nombre: event.target.value})}
            value={this.state.email}
            className="form-control"
            required/>

          <label htmlFor="psw">Premio</label>
          <textarea rows="3" placeholder="tu torneo tiene premio?"
            name="user"
            onChange={event => this.setState({premio: event.target.value})}
            value={this.state.user_name}
            className="form-control"
            required/>

				      	<br/>
				        <br/>

					<div className="checkbox mb-3">
		       	 	<label>
		         		<input type="checkbox" value="true"/>Acepto terminos y condiciones
		       	 	</label>
		     		</div>
						<button type="submit" className="btn btn-lg btn-success btn-block">Crear Torneo</button>
						<br/>
					</form>

					<div>
						<a href='/eventos'>
						<button className="btn btn-lg btn-success btn-block">Volver</button>
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default CrearEv
