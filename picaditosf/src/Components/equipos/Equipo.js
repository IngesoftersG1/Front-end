import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../../styles/styles.css'
import Example from '../Loading/logo'
import MyPdfViewer from '../PDF/pdfview'
import session from '../../Reducers/sessionReducer';
import axios from 'axios';
import * as consts from '../../consts';
import swal from 'sweetalert2'

export default class Equipo extends Component {

  constructor(props){
    super(props);
		this.state = {
      equipos: [], isLoading: true
		}
    
		this.divSolicitud = this.divSolicitud.bind(this);
		
	}

  componentDidMount() {
		console.log(this.props.match.params.id)
          

          axios.get(consts.SERVER_URL+`equipos/equipo_id/?id=`+this.props.match.params.id

			)

    		.then(res => {
        	const equipos = res.data;
        	console.log(equipos)
					this.setState({equipos});
					setTimeout(() => this.setState({ isLoading: false }), 1000);
      })
  }
	descPartido(partido){
	
		if(partido.partido[0].torneo_id==null){
			return <h6>Partido amistoso</h6>
			}else{
				
				return <h6>Partido del torneo <a href={`/torneo/${partido.partido[0].torneo_id}`}>{partido.partido[3].nombre}</a></h6>
			}
		
		}	
			 
		
	btnPartido(partido){
		
		if(!!sessionStorage.jwt){
		if((JSON.parse(sessionStorage.user).user_name==partido.partido[1].capitan_name || JSON.parse(sessionStorage.user).user_name==partido.partido[2].capitan_name )){
			
			if(partido.partido[0].jugado || partido.partido[0].torneo_id!=null){
					return <button className="btn btn-info prf-btn">Ver partido</button>
					}
				if(!partido.partido[0].pending && !partido.partido[0].jugado){
						return <button className="btn btn-info prf-btn">Jugar partido</button>
					}	
				if(partido.partido[0].pending){
				return <button className="btn btn-info prf-btn">Confirmar marcador</button>
				}	
		}else{
			return <button className="btn btn-info prf-btn">Ver partido</button>
		}
		}else{
			return <button className="btn btn-info prf-btn">Ver partido</button>
		}	 
		}
      
 btnsAplicar(eusers){
	console.log(eusers)
 	let userarr = eusers.eusers.users
	let exist = false
	function sendSolicitud(equipo_id){
		console.log(equipo_id)
		swal({
			title: '¿Seguro?',
			text: 'El cápitan del otro equipo recibira tu solicitud',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Si',
			cancelButtonText: 'No'
		  }).then((result) => {
			if (result.value) {
			  swal(
				'¡Solicitud enviada!',
				'',
				'success'
			  )
			  
			axios.post(consts.SERVER_URL+'requests/?', { 
				user_id: JSON.parse(sessionStorage.user).user_name,
				equipo_id: equipo_id,
				request_type: "User_to_equipo"
		
			   }) 
			} 
			
		  })
		
	   
	}
 	console.log('aplusers',userarr)
 	userarr.forEach(function(user) {
		if(!!sessionStorage.jwt){
 		if(user.user_name == JSON.parse(sessionStorage.user).user_name){
 			exist = true
		 }
		}
  });
  if(!exist && !!sessionStorage.jwt){
	
  	return <div><button className="btn btn-info prf-btn" onClick={() => sendSolicitud(eusers.eusers.id)}>Aplicar</button>
  		<button className="btn btn-warning prf-btn">Invitar</button></div>
  }
 	return null
 }
 liPartido(capitan){
	if(!sessionStorage.jwt){
		return	<li className="tablink"><a data-toggle="tab" href="#par">Partidos</a></li>
	}

 	console.log('cap',capitan)
 	if(capitan.cap.capitan_name == JSON.parse(sessionStorage.user).user_name){
		if(capitan.cap.partidos_pending>0){
		return	<li className="tablink"><a data-toggle="tab" href="#par">Partidos <span style={{'font-weight':'bold','color':'white','background-color':'red','border-radius':'50%',padding:'2px 6px 2px 6px'}}>
		{capitan.cap.partidos_pending}</span></a></li>}
		else{
			return	<li className="tablink"><a data-toggle="tab" href="#par">Partidos</a></li>
		}
	 }else{
			return	<li className="tablink"><a data-toggle="tab" href="#par">Partidos</a></li>
	 }
	}

 
 liSolicitud(capitan){
	if(!!sessionStorage.jwt){
 	console.log('cap',capitan)
 	if(capitan.cap.capitan_name == JSON.parse(sessionStorage.user).user_name){
		if(capitan.cap.solicitudes_pendientes>0){
		return	<li className="tablink"><a data-toggle="tab" href="#sol">Solicitudes <span style={{'font-weight':'bold','color':'white','background-color':'red','border-radius':'50%',padding:'2px 6px 2px 6px'}}>
		{capitan.cap.solicitudes_pendientes}</span></a></li>}
		else{
			return	<li className="tablink"><a data-toggle="tab" href="#sol">Solicitudes</a></li>
		}
	 }
	}
 	return null
 }
 


 
 divSolicitud(capitan){
	function accpPartido(solicitud, equipo, solicitud_id){
	
		
		swal({
			title: '¿Seguro?',
			text: 'Esta accion no se puede deshacer',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Si',
			cancelButtonText: 'No'
			}).then((result) => {
			if (result.value) {
				swal(
				'Aceptado',
				'El partido ha sido creado, ¡Sal a jugar!',
				'success'
				).then((value) => {
				window.location.reload()
				})
				axios.post(consts.SERVER_URL+'partidos/?', { 
					deporte_id: equipo.deporte.id,
					ubicacion_id: solicitud[0].ubicacion_id,
					equipo_local_id: solicitud[1].id,
					equipo_visitante_id: equipo.id,
					marcador_local: 0,
					marcador_visitante: 0,
					fecha: solicitud[0].fecha_partido,
					jugado: false,
					pending: false
							
				})
				axios.delete(consts.SERVER_URL+'requests/'+solicitud_id);
			} 
			})
			
					
		
	 }
	
	 function accpSolicitud(user_id, equipo_id, solicitud_id){
		swal({
			title: '¿Seguro?',
			text: 'Esta accion no se puede deshacer',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Si',
			cancelButtonText: 'No'
			}).then((result) => {
			if (result.value) {
				swal(
				'Aceptado',
				'El jugador ha sido añadido a tu equipo',
				'success'
				).then((value) => {
				window.location.reload()
				})
				axios.post(consts.SERVER_URL+'equipos_users/?', { 
				user_id: user_id,
				equipo_id: equipo_id,
						
			})
				axios.delete(consts.SERVER_URL+'requests/'+solicitud_id);
			} 
			})
			
					
		
	 }
	
	
	
	 function delSolicitud(solicitud_id){
		console.log(solicitud_id)
	 swal({
		 title: '¿Seguro?',
		 text: 'Esta accion no se puede deshacer',
		 type: 'warning',
		 showCancelButton: true,
		 confirmButtonText: 'Si',
		 cancelButtonText: 'No'
		 }).then((result) => {
		 if (result.value) {
			 swal(
			 'Denegado',
			 'La solicitud has sido rechazada',
			 'error'
			 ).then((value) => {
			 window.location.reload()
		 })
			 
			 axios.delete(consts.SERVER_URL+'requests/'+solicitud_id)
		 } 
		 
		 })
	 
	}	
	 console.log(capitan)
	 let equipos=(this.state.equipos)
 	if(!!sessionStorage.jwt){
 	if(capitan.cap.capitan_name == JSON.parse(sessionStorage.user).user_name){
		return 	<div id="sol" className="tab-pane fade">
		<h3>Equipos</h3>
		{ capitan.cap.solicitudes_equipo.map(solicitud =>
		
				
				<div className="row align-items-start">
					<div className="col-md-6">
					<h4> <a href={`/equipo/${solicitud[1].id}`}>{solicitud[1].nombre} </a>	quiere jugar contigo</h4>
						<h6>{solicitud[0].message}</h6>
	    		</div>
	    		<div className="col-md-6">
	    			<button className="btn btn-success" style={{marginRight:10}} onClick={function(event){ accpPartido(solicitud, equipos, solicitud[0].id)}}>Aceptar</button> 
	    			<button className="btn btn-warning" onClick={() => delSolicitud(solicitud[0].id)}>Rechazar</button> 
	    		</div>
				</div>
				
		  
		)}
		<h3>Usuarios</h3>
		{ capitan.cap.solicitudes_usuario.map(solicitud =>
		
				
		<div className="row align-items-start">
			<div className="col-md-6">
			<h4> <a href={`/usuario/${solicitud.user_id}`}>{solicitud.user_id} </a>	quiere unirse a tu equipo</h4>
			<h6>{solicitud.message}</h6>

				
			</div>
			<div className="col-md-6">
				<button className="btn btn-success"  style={{marginRight:10}} onClick={function(event){ accpSolicitud(solicitud.user_id, capitan.cap.id, solicitud.id)}}>Aceptar</button> 
				<button className="btn btn-warning" onClick={() => this.delSolicitud(solicitud.id) 	} >Rechazar</button> 
			</div>
		</div>
		
	
		)}
		</div>
	 }
	}
 	return null
 }
 
 

 render() {
    if(this.state.isLoading){
    return (<div>
        {Example}
        </div>); // render the loading component
    }

		console.log(this.state)
  	return (

				
    <div>
    	
				<div className="cont_2">
		<div className="container">
		  <div className="row align-items-start">
		  	<div className="col-md-2">
		  		<img src={require('../../imagenes/ball-fire.jpg')} className="img-responsive profile-img"/>
		  	</div>
		  	<div className="col-md-10">

			  	<div className="row">
			  		<h1>{this.state.equipos.nombre}</h1>
			  		<div className="prf-btns">
				  		
				  		<this.btnsAplicar eusers={this.state.equipos}/>
				  		
				  	</div>
			  	</div>
			  	<div className="row">
			  		<div className="row align-items-start">
						<div className="col-md-8">
		  					<h4>
		  					{this.state.equipos.deporte.nombre}
		  	    			</h4>
		  	    		</div>
		  	    	</div>
			  	</div>


		  	</div>
		 	</div>
	  </div>
		<div className="container">
		  <ul className="nav nav-tabs">
		    <li className="active tablink"><a data-toggle="tab" href="#info">Informacion</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#jug">Jugadores</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#tor">Torneos</a></li>
			<this.liPartido cap = {this.state.equipos} />
			<this.liSolicitud cap = {this.state.equipos} />
		  </ul>

		  <div className="tab-content">

		    	<div id="info" className="tab-pane active">
		    		 <h3>Información</h3>
		    		 <h3>Nombre capitan: {this.state.equipos.capitan_name}</h3>
		    	</div>

		    	<div id="jug" className="tab-pane fade">
		    		<h3>Jugadores</h3>
		    		{ this.state.equipos.users.map(user =>

					<div className="container">
					<div className="row align-items-start">
						<div className="col-md-8">
		  					<h4>
		  					{user.user_name}
		  	    			</h4>
		  	    		</div>
		  	    		<div className="col-md-2">
						  	<Link to={`/usuario/${user.user_name}`}>
		  		  				<button className="btn btn-info prf-btn">Ver Usuario</button>
							</Link>
		  	    		</div>
		  	    	</div>

		  		</div>
					 )}

		    </div>
		    <div id="tor" className="tab-pane fade">
					<h3> Torneos </h3>
					{ this.state.equipos.torneos.map(torneo =>

					<div className="container">
					<div className="row align-items-start">
						<div className="col-md-8">
		  					<h4>
		  					{torneo.nombre}
		  	    			</h4>
		  	    		</div>
		  	    		<div className="col-md-2">
								<Link to={`/torneo/${torneo.id}`}>
		  		  		<button className="btn btn-info prf-btn" >Ver Torneo</button>
							</Link>
		  	    		</div>
		  	    	</div>

		  		</div>
					 )}
				</div>
				<div id="par" className="tab-pane fade">
					{ this.state.equipos.partidos.map(partido =>
					<div className="container">
					<div className="row align-items-start">
						<div className="col-md-6">
		  					<h4>
								<a href={`/equipo/${partido[1].id}`}>{partido[1].nombre} </a> Vs <a href={`/equipo/${partido[2].id}`}>{partido[2].nombre} </a>
		  	    			</h4>
		  	    		</div>
						<div className="col-md-2">
		  					<h3>
		  					 {partido[0].marcador_local} - {partido[0].marcador_visitante}
		  	    			</h3>
									<this.descPartido partido = {partido}/>	
		  	    		</div>
		  	    		<div className="col-md-2">
								<Link to={`/partido/${partido[0].id}`}>
		  		  		<this.btnPartido partido = {partido}/>
								</Link>

		  	    		</div>
		  	    	</div>

		  		</div>
					 )}
				</div>
				<this.divSolicitud cap = {this.state.equipos}/>
				</div>
				

		  </div>

		</div>
	

		

	</div>



    )
  }

}
