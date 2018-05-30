import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../../styles/styles.css'
import Example from '../Loading/logo'
import MyPdfViewer from '../PDF/pdfview'
import session from '../../Reducers/sessionReducer';
import axios from 'axios';
import * as consts from '../../consts';
import swal from 'sweetalert2'

/**/
import SolicitudPartido from './SolicitudPartido';
/**/
export default class Equipo extends Component {

  constructor(props,context) {
    super(props,context);
  }

  state = {
    equipos: [], isLoading: true, users:[]
  }

  componentDidMount() {
		console.log("props",this.props)
          axios.get(consts.SERVER_URL+`equipos/equipo_id/?id=`+this.props.match.params.id
			)
    		.then(res => {
        	const equipos = [res];
        	console.log(equipos)
        	const usuarios = equipos[0].data.users
        	console.log(usuarios)
    		this.setState({equipos});
        	this.setState({ isLoading: false });	
      })
  }

 btnsAplicar(eusers){
	console.log(eusers)
 	let userarr = eusers.eusers.users
	let exist = false
	function sendSolicitud(equipo_id){
		console.log(equipo_id)
		swal({
			title: '¿Seguro?',
			text: 'El capitan del otro equipo recibirá tu solicitud',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Si',
			cancelButtonText: 'No'
			}).then((result) => {
			if (result.value) {
			  swal(
			  'Solicitud enviada',
			  'Has aplicado correctamente',
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
	
  	return <div>
  		<button className="btn btn-info prf-btn" onClick={() => sendSolicitud(eusers.eusers.id)}>Aplicar</button>
			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
			  Invitar a jugar
			</button>
			
			<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			    	<SolicitudPartido equipo_id_param={eusers.eusers.id} />
			      <div className="modal-footer">
			        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
			        <button type="button" className="btn btn-primary">Save changes</button>
			      </div>
			    </div>
			  </div>
			</div>
  	</div>
  }
 	return null
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
	function accpPartido(fecha, local, visitante, solicitud_id){
		console.log("post",{fecha,local,visitante})
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
			  'El partido ha sido creado ¡Sal a jugar!',
			  'success'
			  ).then((value) => {
			  window.location.reload()
			  })
			  axios.post(consts.SERVER_URL+'/partidos', { 
				fecha: fecha,
				equipo_local_id: local , 
				  equipo_visitante_id: visitante,
				  marcador_local:0,
				  marcador_visitante:0,
				  ubicacion_id:1,
				  jugado:false
			})
		
			  axios.delete(consts.SERVER_URL+'requests/'+solicitud_id);
			} 
			})
		
	}
	function delSolicitud(solicitud_id){
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
	
	 console.log("cap",capitan)
	 
 	if(!!sessionStorage.jwt){
 	if(capitan.cap.capitan_name == JSON.parse(sessionStorage.user).user_name){
		return 	<div id="sol" className="tab-pane fade">

		<h3>Solicitud de jugador</h3>
		{ capitan.cap.solicitudes_usuario.map(solicitud =>
				<div className="row align-items-start">
					<div className="col-md-6">
						<h4> <a href={`/usuario/${solicitud.user_id}`}>{solicitud.user_id} </a>	quiere unirse a tu equipo</h4>
						
	    			</div>
	    		<div className="col-md-6">
	    			<button className="btn btn-success" onClick={function(event){ accpSolicitud(solicitud.user_id, capitan.cap.id, solicitud.id)}}>Aceptar</button> 
	    			<button className="btn btn-warning" onClick={() => delSolicitud(solicitud.id) 	} >Rechazar</button> 
	    		</div>
				</div>
		)}
		<h3>Solicitud de partido</h3>
		{ capitan.cap.solicitudes_equipo.map(solicitud =>
				<div className="row align-items-start">
				{console.log("solicitud0",solicitud)}
					<div className="col-md-6">
						<h5>{solicitud[1].nombre} quiere jugar con tu equipo</h5>
	    			</div>
	    		<div className="col-md-6">
	    			<button className="btn btn-success" onClick={function(event){ accpPartido(solicitud[0].fecha_partido, solicitud[0].equipo_id , capitan.cap.id, solicitud.id)}}>Aceptar</button> 
	    			<button className="btn btn-warning" onClick={() => delSolicitud(solicitud[0].id) 	} >Rechazar</button>
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


  	return (


    <div>
    	{ this.state.equipos.map(equipo =>
		<div>
		<div className="cont_2">
			<div className="container">
			  <div className="row align-items-start">
			  	<div className="col-md-2">
			  		<img src={require('../../imagenes/ball-fire.jpg')} className="img-responsive profile-img"/>
			  	</div>
			  	<div className="col-md-10">
				  	<div className="row">
				  		<h1>{equipo.data.nombre}</h1>
				  		<div className="prf-btns">
					  		<this.btnsAplicar eusers={equipo.data}/>
					  	</div>
				  	</div>
				  	<div className="row">
				  		<div className="row align-items-start">
								<div className="col-md-8">
			  					<h4>
			  						{equipo.data.deporte.nombre}
			  	    		</h4>
			  	    	</div>
			  	    </div>
				  	</div>
			  	</div>
			 	</div>
		  </div>
		  </div>
		  <div className="cont_2w">
			<div className="container">
			  <ul className="nav nav-tabs">
			    <li className="active tablink"><a data-toggle="tab" href="#info">Informacion</a></li>
			    <li className="tablink"><a data-toggle="tab" href="#jug">Jugadores</a></li>
			    <li className="tablink"><a data-toggle="tab" href="#tor">Torneos</a></li>
					<li className="tablink"><a data-toggle="tab" href="#par">Partidos</a></li>
					<this.liSolicitud cap = {equipo.data} />
			  </ul>

		  	<div className="tab-content">
		    	<div id="info" className="tab-pane active">
		    		 <h3>Información</h3>
		    		 <h3>Nombre capitan: {equipo.data.capitan_name}</h3>
		    	</div>

		    	<div id="jug" className="tab-pane fade">
		    		<h3>Jugadores</h3>
		    		{ this.state.equipos[0].data.users.map(user =>
						<div className="container">
						<div className="row align-items-start">
							<div className="col-md-8">
		  					<h4>{user.user_name}</h4>
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
					{ this.state.equipos[0].data.torneos.map(torneo =>
					<div className="container">
					<div className="row align-items-start">
						<div className="col-md-8">
		  				<h4>{torneo.nombre}</h4>
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
					{ this.state.equipos[0].data.partidos.map(partido =>
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
		  	 		</div>
		     		<div className="col-md-2">
							<Link to={`/partido/${partido[0].id}`}>
		  		  		<button className="btn btn-info prf-btn" >Ver partido</button>
							</Link>
  	    		</div>
  	    	</div>
		  		</div>
					 )}
				</div>
				
				<this.divSolicitud cap = {equipo.data}/>
			</div>
		</div>
		</div>
		</div>
	)}
	</div>



    )
  }

}