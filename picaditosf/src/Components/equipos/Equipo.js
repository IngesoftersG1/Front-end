import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../../styles/styles.css'
import Example from '../Loading/logo'
import MyPdfViewer from '../PDF/pdfview'
import session from '../../Reducers/sessionReducer';
import axios from 'axios';
import * as consts from '../../consts';

export default class Equipo extends Component {

  constructor(props,context) {
    super(props,context);
  }

  state = {
    equipos: [], isLoading: true, users:[]
  }

  componentDidMount() {
		console.log(this.props.match.params.id)
          setTimeout(() => this.setState({ isLoading: false }), 500);


          axios.get(consts.SERVER_URL+`equipos/equipo_id/?id=`+this.props.match.params.id

			)

    		.then(res => {
        	const equipos = [res];
        	console.log(equipos)
        	const usuarios = equipos[0].data.users
        	console.log(usuarios)
    			this.setState({equipos});
      })
  }
  
	
      
 btnsAplicar(eusers){
	console.log(eusers)
 	let userarr = eusers.eusers.users
	let exist = false
	function sendSolicitud(equipo_id){
		console.log(equipo_id)
		axios.post(consts.SERVER_URL+'requests/?', { 
			user_id: JSON.parse(sessionStorage.user).user_name,
			equipo_id: equipo_id,
			request_type: "User_to_equipo"
	
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
	function accpSolicitud(user_id, equipo_id){
		
		axios.post(consts.SERVER_URL+'equipos_users/?', { 
			user_id: user_id,
			equipo_id: equipo_id,
			
		})
	   
	 }
	 function delSolicitud(solicitud_id){
		
		axios.delete(consts.SERVER_URL+'requests/'+solicitud_id)
		window.location.reload()
	 }
	
	 console.log(capitan)
	 
 	if(!!sessionStorage.jwt){
 	if(capitan.cap.capitan_name == JSON.parse(sessionStorage.user).user_name){
		return 	<div id="sol" className="tab-pane fade">
		<h3>Solicitudes</h3>
		{ capitan.cap.solicitudes.map(solicitud =>
		
				
				<div className="row align-items-start">
					<div className="col-md-6">
						<h4>{solicitud.user_id} quiere unirse a tu equipo</h4>
	    		</div>
	    		<div className="col-md-6">
	    			<button className="btn btn-success" onClick={function(event){ accpSolicitud(solicitud.user_id, capitan.cap.id); delSolicitud(solicitud.id)}}>Aceptar</button> 
	    			<button className="btn btn-warning" onClick={() => delSolicitud(solicitud.id) 	} >Rechazar</button> 
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
					{ this.state.equipos[0].data.torneos.map(torneo =>

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
					{ this.state.equipos[0].data.partidos.map(partido =>
					<div className="container">
					<div className="row align-items-start">
						<div className="col-md-6">
		  					<h4>
		  					 {partido[1].nombre} Vs {partido[2].nombre}
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
	

		)}

	</div>



    )
  }

}
