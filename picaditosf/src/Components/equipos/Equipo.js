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
  
	sendSolicitud(e){
		e.preventDefault();
		{/*axios.post(consts.SERVER_URL+'/request', { })
	  .then(function(response){
	    console.log('saved successfully')
	  }); */}
	  return null
	}
	
	aceptSolicitud(e){
		e.preventDefault();
		{/*axios.post(consts.SERVER_URL+'/request', { })
	  .then(function(response){
	    console.log('saved successfully')
	  }); */}
	  return null
	}
	
	denSolicitud(e){
		e.preventDefault();
		{/*axios.delete(url, { params: requestData })
			.then(function(response) {
			console.log(response.data));
			})
			.catch(function(error) {
			console.log(error);
			}); */}
	  return null
	}
      
 btnsAplicar(eusers){
 	let userarr = eusers.eusers.users
 	let exist = false
 	console.log('aplusers',userarr)
 	userarr.forEach(function(user) {
 		if(user.user_name == JSON.parse(sessionStorage.user).user_name){
 			exist = true
 		}
  });
  if(!exist){
  	return <div><button className="btn btn-info prf-btn" onClick={() => this.sendSolicitud}>Aplicar</button>
  		<button className="btn btn-warning prf-btn">Invitar</button></div>
  }
 	return null
 }
 
 liSolicitud(capitan){
 	console.log('cap',capitan)
 	if(capitan.cap == JSON.parse(sessionStorage.user).user_name){
		return	<li className="tablink"><a data-toggle="tab" href="#sol">Solicitudes</a></li>
 	}
 	return null
 }
 
 divSolicitud(capitan){
 	console.log('cap2',capitan)
 	console.log('user',JSON.parse(sessionStorage.user).user_name)
 	if(capitan.cap == JSON.parse(sessionStorage.user).user_name){
		return	<div id="sol" className="tab-pane fade">
				<h3> Solicitudes </h3>
				<div className="row align-items-start">
					<div className="col-md-6">
						<h4>Nombre usuario</h4>
	    		</div>
	    		<div className="col-md-6">
	    			<button className="btn btn-success">Aceptar</button> 
	    			<button className="btn btn-danger">Rechazar</button> 
	    		</div>
				</div>
				
		  </div>
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
				  		
				  		<this.btnsAplicar eusers={equipo.data} />
				  		
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
				<this.liSolicitud cap = {equipo.data.capitan_name} />
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
					<h3> Partidos </h3>
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
				<this.divSolicitud cap = {equipo.data.capitan_name}/>
		  </div>

		</div>
	</div>

		)}

	</div>



    )
  }

}
