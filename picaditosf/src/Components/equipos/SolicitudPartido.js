import React,{ Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../styles/styles.css'
import session from '../../Reducers/sessionReducer';
import * as consts from '../../consts';
import axios from 'axios';
import swal from 'sweetalert2'
//fecha , contenido , usuario_2_name ,user_id , asunto
// The Roster component matches one of two different routes
// depending on the full pathnam

class SolicitudPartido extends Component {
	constructor(props){
    super(props);

    this.state = {
      fecha: '2018-04-04',
      user_id: JSON.parse(sessionStorage.user).user_name,
      user_equipos: [],
      equipo_id : 0,
      equipo_id_2: 0,
      message:'',
      deporte: '',
      canchas: [],
      ubicacion:  null,
      isLoading: true
    }

    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({equipo_id_2:this.props.equipo_id_param})
    axios.get(consts.SERVER_URL+`users/1?`, {
			params: {
				user_name:JSON.parse(sessionStorage.user).user_name
			}
		})
		.then(res => {
    	const user = res.data;
    	const user_equipos = user.equipos
  		console.log('user',user_equipos)
		  this.setState({ user_equipos })
		  this.setState({ isLoading: false })
    })
    
    axios.get(consts.SERVER_URL+`canchas?`)
		.then(res => {
    	const canchas = res.data;
  		console.log('user',canchas)
		  this.setState({ canchas})
		  this.setState({ isLoading: false })
    })
  }
  
	createInvitacion(){
    axios.post(consts.SERVER_URL+'requests/?', { 
      request_type: "Equipo_to_equipo",
      equipo_partido_id: this.state.equipo_id_2,
      message: this.state.message,
      equipo_id: parseInt(this.state.equipo_id),
      //deporte: this.state.partido,
      fecha_partido: this.state.fecha,
      //ubicacion_partido: this.state.ubicacion
	  })
	  .then(res => {
	    console.log("res",res)
	    swal(
				"Solicitud enviada correctamente",
				"continue",
				"success"
				).then((value) => {
					window.location.reload()
			})
	  })
	  .catch(error =>{
	    
	  })
	}

  onSubmit(e){
	  e.preventDefault();
    this.createInvitacion()
   //
    console.log("propssol",this.props)
    console.log("userinfo",JSON.parse(sessionStorage.user))
    console.log("statesol",this.state)
    //window.location.reload()
  }

	render() {
	 if(this.state.isLoading){
    return (<div>
        loading...
        </div>); // render the loading component
    }
		return (
			<div className="text-center">
				<div className="cont_2w">
					<h1>Invitar a jugar</h1>
					<form className="form1" onSubmit={this.onSubmit}>
					  <label htmlFor="local">Local</label>
					  <select className="custom-select" 
		          onChange={event => this.setState({equipo_id: parseInt(event.target.value)})}
		          value={this.state.equipo_id}>
		            <option value='0' selected disabled>>Selecciona tu equipo</option>
  					  {this.state.user_equipos.map(equipo =>
  					    <option value={equipo.id}>
  					      {equipo.nombre}
  					    </option>
  					  )}
            </select>

						<label htmlFor="fecha">Fecha </label>
						<input placeholder="introduce fecha (dd-mm-yyyy)"
							name="fecha"
		          type='text'
		          onChange={event => this.setState({fecha: event.target.value})}
		          value={this.state.fecha}
							className="form-control"/>
							

						<label htmlFor="psw">Mensaje</label>
						<textarea rows="5" placeholder="Escribe un mensaje al equipo rival"
							name="mensaje"
							type='text'
		          onChange={event => this.setState({message: event.target.value})}
		          value={this.state.message}
							className="form-control" required    />
            
            <label htmlFor="ub">Ubicación</label>
					  <select className="custom-select" 
		          onChange={event => this.setState({ubicacion: event.target.value})}
		          value={this.state.ubicacion}>
		            <option disabled selected>Selecciona una ubicacion</option>
  					  {this.state.canchas.map(cancha =>
  					    <option value={cancha.nombre}>
  					      {cancha.nombre}
  					    </option>
  					  )}
            </select>
                        <div>
                        <br/>
                        </div>
						<button type="submit" className="btn btn-lg btn-primary btn-block">Send</button>
					</form>
				</div>
			</div>
		)
	}
}

export default SolicitudPartido
