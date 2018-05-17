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
class CrearE extends Component{
	constructor(props){
    super(props);
    this.state = {
      nombre: '',
      nivel:'',
      calificacion:'',
      created_at: null,
      updated_at: null,
      deporte_id: '3',
      capitan_name: "Malphite",
      users:
        {
        nombres:'',
        apellidos:'',
        user_name:'',
        email:''
        }

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
          console.log(user)
        this.setState({ capitan_name:user[0].user_name });
        this.setState({ users:{nombres:user[0].nombres }});
        this.setState({ users:{user_name:user[0].user_name }});
        this.setState({ users:{apellidos:user[0].apellidos}});
        this.setState({ users:{email:user[0].email }});
          console.log("a")

  })
}




	createUser(){
		const info = JSON.stringify(this.state)
		console.log("json",info)
		const request = new Request(`http://localhost:3001/equipos`, {
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
    			"Ha creado su equipo correctamente",
    			"ya puede verlo en la seccion de Equipos",
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

  handleChange = (deporte_id) => {
    this.setState({deporte_id: deporte_id.value});
    console.log(`Selected: ${deporte_id.label}`);
  }


	render() {

		const { deporte_id } = this.state;
  		const value =deporte_id.value;

		return (

			<div className="text-center">
				<div className="cont_1">

					<h1>Crear Equipo</h1>
					<form className="form1" onSubmit={this.onSubmit}>
				    <label htmlFor="psw">Nombre del Equipo</label>
						<input placeholder="Enter name"
							nombre="nombre"
							type='text'
		                onChange={event => this.setState({nombre: event.target.value})}
		                value={this.state.nombre}
							className="form-control"
				        	required/>
				        	<br/>
                  Deporte
                	&nbsp;&nbsp;&nbsp;
                	<select name='month' id='monthddl'>
                	<option value='1'>futbol</option>
                	<option value='2'>Voleibol</option>
                	<option value='3'>Basketball</option>
                	</select>

                  {/*
				    Día&nbsp;&nbsp;&nbsp;
    			     <Select

    					 name="form-field-name"
    					 value={value}
        				 onChange={this.handleChange}
        				 options={[
        				 { value: 1, label: 'futbol' },
        				 { value: 2, label: 'basket' },
    					 ]}
    					/>
            */}

				        <br/>

					<div className="checkbox mb-3">
		       	 	<label>
		         		<input type="checkbox" value="true"/>Acepto terminos y condiciones
		       	 	</label>
		     		</div>
						<button type="submit" className="btn btn-lg btn-success btn-block">Crear Equipo</button>
						<br/>
					</form>

					<div>
						<a href='/equipos'>
						<button className="btn btn-lg btn-success btn-block">Volver</button>
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default CrearE
