import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo';
import * as consts from '../../consts';
import swal from 'sweetalert2'

/*
{
this.state.eventos.map(evento => {evento[0].title})
}
*/
export default class Torneo extends Component {
  constructor(props){
    super(props);
		this.state = {
      torneo: [], isLoading: true
		}
    
    this.btnPartido = this.btnPartido.bind(this);
    this.btnsAplicar = this.btnsAplicar.bind(this);
    this.btnsComenzar = this.btnsComenzar.bind(this);
    this.empezarTorneo = this.empezarTorneo.bind(this);
	}
 
  
  componentDidMount() {
    axios.get(consts.SERVER_URL+`torneos/torneo_id/?id=`+this.props.match.params.id)
      .then(res => {
        const torneo = res.data;
        console.log(torneo)
        this.setState({ torneo });

        setTimeout(() => this.setState({ isLoading: false }), 2000);

      })
  }

  btnsAplicar(torneo){
    console.log(torneo)
    if(!!sessionStorage.jwt){  
    if(torneo.torneo.organizador_name!=JSON.parse(sessionStorage.user).user_name){
    
      return <div>
        <Link to={`/inscribir/${torneo.torneo.id}`}>
        <button className="btn btn-info prf-btn" >Inscribirse al torneo</button>
        </Link>
        </div>
    }
  }
     return null
   }
   btnsComenzar(torneo){
    if(!!sessionStorage.jwt){  
    if(torneo.torneo.organizador_name==JSON.parse(sessionStorage.user).user_name && !torneo.torneo.comenzado){
    
      return <div>
        <button className="btn btn-info prf-btn" onClick={() => this.empezarTorneo()}>Comenzar torneo</button>
        </div>
    }
  }
     return null
   }

   empezarTorneo(){
    /*Aqui va el algoritmo magico que Perdomo va a diseñar*/
    swal(
      'Magia',
      'Proximamente este boton generará todos los partidos del torneo',
      'success'
      )
   }
   liSolicitud(organizador){
    console.log('cap',organizador)
    if(!!sessionStorage.jwt){
     
     if(organizador.organizador.organizador_name == JSON.parse(sessionStorage.user).user_name){
      if(organizador.organizador.solicitudes_pendientes>0){
      return	<li className="tablink"><a data-toggle="tab" href="#sol">Solicitudes <span style={{'font-weight':'bold','color':'white','background-color':'red','border-radius':'50%',padding:'2px 6px 2px 6px'}}>
      {organizador.organizador.solicitudes_pendientes}</span></a></li>}
      else{
        return	<li className="tablink"><a data-toggle="tab" href="#sol">Solicitudes</a></li>
      }
     }
    }
     return null
   }

   divSolicitud(organizador){
    function accpSolicitud(equipo_id, torneo_id, solicitud_id){
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
          axios.post(consts.SERVER_URL+'equipos_torneos/?', { 
          torneo_id: torneo_id,
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
    
     
     
     if(!!sessionStorage.jwt){
     if(organizador.organizador.organizador_name == JSON.parse(sessionStorage.user).user_name && !organizador.organizador.comenzado){
      return 	<div id="sol" className="tab-pane fade">
      <h3>Solicitudes</h3>
      { organizador.organizador.solicitudes.map(solicitud =>
      
          
          <div className="row align-items-start">
            <div className="col-md-6">
              <h4> <a href={`/equipo/${solicitud[1].id}`}>{solicitud[1].nombre} </a> quiere unirse a tu torneo</h4>
              <h5>{solicitud.message}</h5>
            </div>
            <div className="col-md-6">
              <button className="btn btn-success"  style={{marginRight:10}} onClick={function(event){ accpSolicitud(solicitud[0].equipo_id, organizador.organizador.id, solicitud[0].id)}}>Aceptar</button> 
              <button className="btn btn-warning" onClick={() => delSolicitud(solicitud[0].id) 	} >Rechazar</button> 
            </div>
          </div>
          
        
      )}
      </div>
     }
    }
     return null
   }

   btnPartido(partido){
    if(!!sessionStorage.jwt){  
		if(partido.partido.jugado || this.state.torneo.organizador_name!= JSON.parse(sessionStorage.user).user_name){
			return <button className="btn btn-info prf-btn">Ver partido</button>
			}else{
				return <button className="btn btn-info prf-btn">Jugar partido</button>
			}	
    }else{
      return <button className="btn btn-info prf-btn">Ver partido</button>
    }	 
		}


 render() {
    if(this.state.isLoading){
    return (<div>

        {Example}

        </div>); // render the loading component
    }


    return (

<div>




  <div className="cont_2">
  <div className="container">
    <div className="row align-items-start">
      <div className="col-md-2">
        <img src={require('../../imagenes/trofeo-icon.jpg')} className="img-responsive profile-img"/>
      </div>
      <div className="col-md-10">

        <div className="row">

          <h1>{this.state.torneo.nombre}</h1>
          <div className="prf-btns">
          
				  		
				  		<this.btnsAplicar torneo={this.state.torneo}/>
				  		<this.btnsComenzar torneo={this.state.torneo}/>
				  	

          </div>
        </div>
        <div className="row">
          <div className="row align-items-start">
          <div className="col-md-8">
              <h4>
              {this.state.torneo.deporte.nombre}
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
      <li className="tablink"><a data-toggle="tab" href="#equip">Equipos Inscritos</a></li>
      <li className="tablink"><a data-toggle="tab" href="#par">Partidos</a></li>
      <this.liSolicitud organizador = {this.state.torneo} />
    </ul>

    <div className="tab-content">

        <div id="info" className="tab-pane active">
           <h3>Información</h3>
          
            <div className="container">
            <h4>Fecha: {this.state.torneo.fecha}</h4>
            <h4>Premio: {this.state.torneo.premio}</h4>
            </div>
          
        </div>

        
      <div id="equip" className="tab-pane fade">
        <h3> Equipos </h3>
        { this.state.torneo.equipos.map(equipo =>

        <div className="container">
        <div className="row align-items-start">
          <div className="col-md-8">
              <h4>
              {equipo.nombre}
                </h4>
              </div>
              <div className="col-md-2">

              <Link to={`/equipo/${equipo.id}`}>
                <button className="btn btn-info prf-btn">Ver Equipo</button>

                  </Link>
              </div>
            </div>

        </div>
         )}
      </div>
      <div id="par" className="tab-pane fade">
					{ this.state.torneo.partidos.map(partido =>
					<div className="container">
					<div className="row align-items-start">
						<div className="col-md-6">
		  					<h4>
                <a href={`/equipo/${partido.info_equipos[0].id}`}>{partido.info_equipos[0].nombre} </a> Vs <a href={`/equipo/${partido.info_equipos[1].id}`}>{partido.info_equipos[1].nombre} </a>
		  	    			</h4>
		  	    		</div>
						<div className="col-md-2">
		  					<h3>
		  					 {partido.marcador_local} - {partido.marcador_visitante}
		  	    			</h3>
		  	    		</div>
		  	    		<div className="col-md-2">
								<Link to={`/partido/${partido.id}`}>
		  		  		<this.btnPartido partido = {partido}/>
							</Link>
		  	    		</div>
		  	    	</div>

		  		</div>
					 )}
				</div>
      <this.divSolicitud organizador = {this.state.torneo}/>
    </div>

  </div>
</div>
		









	</div>



    )
  }
}
