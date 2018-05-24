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
  state = {
    torneo: [], isLoading: true
  }
  
  componentDidMount() {
    axios.get(consts.SERVER_URL+`torneos/torneo_id/?id=`+this.props.match.params.id)
      .then(res => {
        const torneo = [res];
        console.log(torneo)
        this.setState({ torneo });

        setTimeout(() => this.setState({ isLoading: false }), 2000);

      })
  }

  btnsAplicar(torneo){
    console.log(torneo)
    if(!!sessionStorage.jwt){  
    if(torneo.torneo.data.organizador_name!=JSON.parse(sessionStorage.user).user_name){
    
      return <div>
        <Link to={`/inscribir/${torneo.torneo.data.id}`}>
        <button className="btn btn-info prf-btn" >Inscribirse al torneo</button>
        </Link>
        </div>
    }
  }
     return null
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
     if(organizador.organizador.organizador_name == JSON.parse(sessionStorage.user).user_name){
      return 	<div id="sol" className="tab-pane fade">
      <h3>Solicitudes</h3>
      { organizador.organizador.solicitudes.map(solicitud =>
      
          
          <div className="row align-items-start">
            <div className="col-md-6">
              <h5>{solicitud[1].nombre} quiere inscribirse a tu torneo</h5>
            </div>
            <div className="col-md-6">
              <button className="btn btn-success" onClick={function(event){ accpSolicitud(solicitud[0].equipo_id, organizador.organizador.id, solicitud[0].id)}}>Aceptar</button> 
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



{ this.state.torneo.map(torneo =>
  <div className="cont_2">
  <div className="container">
    <div className="row align-items-start">
      <div className="col-md-2">
        <img src={require('../../imagenes/trofeo-icon.jpg')} className="img-responsive profile-img"/>
      </div>
      <div className="col-md-10">

        <div className="row">

          <h1>{torneo.data.nombre}</h1>
          <div className="prf-btns">
          
				  		
				  		<this.btnsAplicar torneo={torneo}/>
				  		
				  	

          </div>
        </div>
        <div className="row">
          <div className="row align-items-start">
          <div className="col-md-8">
              <h4>
              {torneo.data.deporte.nombre}
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
      <this.liSolicitud organizador = {torneo.data} />
    </ul>

    <div className="tab-content">

        <div id="info" className="tab-pane active">
           <h3>Información</h3>
           { this.state.torneo.map(torneo =>
            <div className="container">
            <h4>Fecha: {torneo.data.fecha}</h4>
            <h4>Premio: {torneo.data.premio}</h4>
            </div>
           )}
        </div>

        
      <div id="equip" className="tab-pane fade">
        <h3> Equipos </h3>
        { this.state.torneo[0].data.equipos.map(equipo =>

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
      <this.divSolicitud organizador = {torneo.data}/>
    </div>

  </div>
</div>
		)}









	</div>



    )
  }
}
