import React,{ Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../styles/styles.css'
import Example from '../Loading/logo'
import session from '../../Reducers/sessionReducer';
import * as consts from '../../consts';
import axios from 'axios';
import swal from 'sweetalert2'
//fecha , contenido , usuario_2_name ,user_id , asunto
// The Roster component matches one of two different routes
// depending on the full pathname



export default class InscribirTorneo extends Component {
	constructor(props){
    super(props);
		this.state = {
			torneo: [], isLoading: true, user:[], equipo: '', contenido: '', invalidPath: false
		}
		const { history } = this.props

    this.onSubmit = this.onSubmit.bind(this);
	}
		

    componentDidMount() {
			if(!!sessionStorage.jwt){
     axios.get(consts.SERVER_URL+`users/1?`, {
			params: {
				user_name:JSON.parse(sessionStorage.user).user_name
			}
		})
		.then(res => {
    	const user = res.data;
  		console.log('user',user)
		  this.setState({ user });
			setTimeout(() => this.setState({ isLoading: false }), 2000)

			})
			console.log(this.params)
			axios.get(consts.SERVER_URL+`torneos/torneo_id/?id=`+this.props.match.params.id)
      .then(res => {
        const torneo = res.data;
        console.log(torneo)
				this.setState({ torneo });
				setTimeout(() => this.setState({ isLoading: false }), 2000)
        

      })
			console.log(this.state.torneo.id)
			}else{
				this.setState({ invalidPath: true});
			}
    }
	equiposListComponents(equipo, torneo){
	
		if(equipo.equipo.capitan_name==JSON.parse(sessionStorage.user).user_name && equipo.torneo.deporte.id==equipo.equipo.deporte_id && equipo.torneo.deporte.min_jugadores <= equipo.equipo.numero_jugadores){
			return <option value={equipo.equipo.id}>{equipo.equipo.nombre}</option>  
		}else{
		return null
		}
	}
	
	createSolicitud(){

		axios.post(consts.SERVER_URL+'requests/?', { 
			
			equipo_id: this.state.equipo,
			torneo_id: this.state.torneo.id,
			request_type: "Equipo_to_torneo",
			message: this.state.contenido
			 }).then(res => {
				console.log(res);
				if(res.status==204){
					swal(
						"Solicitud enviada",
						"Tu solicitud fue enviada correctamente",
						"success"
						).then((value) => {
							window.location.reload()
					})
				}else{
					swal(
						"Mensaje enviado correctamente",
						"continue",
						"error"
						)
				}
				}) 
		} 
	
	
	
	handleChange(e) {
		
		this.setState({equipo: parseInt(e.target.value)});
		console.log(this.state)
	}
	

  onSubmit(e){
		e.preventDefault();
		swal({
			title: '¿Seguro?',
			text: 'El organizador del torneo recibira tu solicitud',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Si',
			cancelButtonText: 'No'
		  }).then((result) => {
			if (result.value) {
				this.createSolicitud();
				
			  
		
			} 
			
		  })
    
    console.log(this.state)
  }

	render() {
		if(this.state.invalidPath){
			return (<div>
					<h1>invalid Path</h1>
					</div>); // render the loading component
			}

		if(this.state.isLoading){
			return (<div>
					{Example}
					</div>); // render the loading component
			}
	
		return (		<div className="text-center">
		
		
				<div className="cont_1">
					
					<h1>Inscribirse en {this.state.torneo.nombre}</h1>
					<form className="form1" onSubmit={this.onSubmit}>
					<select value={this.state.equipo} onChange={this.handleChange.bind(this)} id="soflow">
					<option value="" selected="selected">- selecciona un equipo-</option>
						{ this.state.user.equipos.map(equipo =>
						<this.equiposListComponents equipo={equipo} torneo={this.state.torneo}/>
						)}
					</select>
												<div>
                        <br/>
                        <h4>Si en esta lista no aparecen equipos, <a href={`/createE`}>crea un equipo </a> añade jugadores a tu equipo </h4>
                        </div>

						<label htmlFor="psw">Mensaje</label>
						<textarea rows="3" placeholder="¿Le quieres decir algo al organizador?"
							name="contenido"
							type='text'
		          onChange={event => this.setState({contenido: event.target.value})}
		          
							className="form-control"  />
                        <div>
                        <br/>
                        </div>
						<button type="submit" className="btn btn-lg btn-primary btn-block">Inscribirse</button>
					</form>
				</div>
			
			</div>
		)
	}
}


