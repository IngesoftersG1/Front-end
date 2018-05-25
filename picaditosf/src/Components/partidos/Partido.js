import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo';
import * as consts from '../../consts';
import swal from 'sweetalert2'
import '../../styles/styles.css';
/*
{
this.state.eventos.map(evento => {evento[0].title})
}
*/
export default class Partido extends Component {
  constructor(props){
    super(props);
		this.state = {
			partido: [], isLoading: true, marcador_local: 0, marcador_visitante :0
		}
    const { history } = this.props
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitTorneo = this.onSubmitTorneo.bind(this);
    this.scoreAndInfo = this.scoreAndInfo.bind(this);
    
	}
  
  
  componentDidMount() {
    console.log(this.props.match.params.id);
    axios.get(consts.SERVER_URL+`partidos/`+this.props.match.params.id)
    .then(res => {
    const partido = res.data;
    console.log(partido);
    this.setState({ partido });
    setTimeout(() => this.setState({ isLoading: false }), 1000);
})
  }
  
  scoreAndInfo(){
    let cap_name=""
    let cap_pending=""
    if(!!sessionStorage.jwt){
      cap_name=JSON.parse(sessionStorage.user).user_name
    }
    if(this.state.partido.pending){
      if(this.state.partido.pending_equipo==this.state.partido.info_equipos[0].id){
        cap_pending=this.state.partido.info_equipos[0].capitan_name
      }else{
        cap_pending=this.state.partido.info_equipos[1].capitan_name
      }
      
    }
    if(!sessionStorage.jwt){
      if(this.state.partido.jugado){
        return <div> 
        <h1 style={{fontWeight:"100"}}>{this.state.partido.marcador_local}-{this.state.partido.marcador_visitante}</h1>
        <h4 style={{fontWeight:"100"}}>{this.state.partido.fecha}</h4>
        <h4 style={{fontWeight:"100"}}>{this.state.partido.ubicacion.localidad}</h4>
        </div>
      }else if(this.state.partido.pending){
        return <div> 
        <h1 style={{fontWeight:"100"}}>{this.state.partido.marcador_local}-{this.state.partido.marcador_visitante}</h1>
        <h4 style={{fontWeight:"100"}}>{this.state.partido.fecha}</h4>
        <h4 style={{fontWeight:"100"}}>{this.state.partido.ubicacion.localidad}</h4>
        <h4> Este partido requiere confirmacion </h4>
        </div> 
      }else{
        return <div> 
        <h1 style={{fontWeight:"100"}}>{this.state.partido.marcador_local}-{this.state.partido.marcador_visitante}</h1>
        <h4 style={{fontWeight:"100"}}>{this.state.partido.fecha}</h4>
        <h4 style={{fontWeight:"100"}}>{this.state.partido.ubicacion.localidad}</h4>
        <h4> Este partido aun no ha sido jugado </h4>
        </div>
      }
    }
    if(this.state.partido.torneo==null){
    if(this.state.partido.jugado || (cap_name!=this.state.partido.info_equipos[0].capitan_name && cap_name!=this.state.partido.info_equipos[1].capitan_name)){
      
      if(this.state.partido.pending){
        return <div> 
        <h1 style={{fontWeight:"100"}}>{this.state.partido.marcador_local}-{this.state.partido.marcador_visitante}</h1>
        <h4 style={{fontWeight:"100"}}>{this.state.partido.fecha}</h4>
        <h4 style={{fontWeight:"100"}}>{this.state.partido.ubicacion.localidad}</h4>
        <h4> Este partido requiere confirmacion </h4>
        </div>
      }else{
        return <div>
               <h1 style={{fontWeight:"100"}}>{this.state.partido.marcador_local}-{this.state.partido.marcador_visitante}</h1>
               <h4 style={{fontWeight:"100"}}>{this.state.partido.fecha}</h4>
               <h4 style={{fontWeight:"100"}}>{this.state.partido.ubicacion.localidad}</h4>
               <h4> Este partido aun no ha sido jugado </h4>
               </div>
      }
    }else if(!this.state.partido.pending){
        return <div>
          <form className="form1" onSubmit={this.onSubmit}>
                      <div className="row">
                        <div className="col-md-5 text-center">
                              <input placeholder="L"
                                style={{width:"100%"}}
                                name="marcador_local"
                                onChange={event => this.setState({marcador_local: event.target.value})}
                                value={this.state.marcador_local}
                                className="form-control"
                                required/>
                        </div>
                        <div className="col-md-2 text-center">
                              <h3>-</h3>
                        </div>
                        <div className="col-md-5 text-center">
                              <input placeholder="V"
                                style={{width:"100%"}}
                                name="marcador_visitante"
                                onChange={event => this.setState({marcador_visitante: event.target.value})}
                                value={this.state.marcador_visitante}
                                className="form-control"
                                required/>
                        </div>

                      
                        <div>
                          <br/>
                        </div>
					              
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary btn-block">Enviar resultado</button>
					</form>
              <h4 style={{fontWeight:"100"}}>{this.state.partido.fecha}</h4>
              <h4 style={{fontWeight:"100"}}>{this.state.partido.ubicacion.localidad}</h4>
          </div>
    }else if(cap_pending==JSON.parse(sessionStorage.user).user_name){  
          return <div>
                <h1 style={{fontWeight:"100"}}>{this.state.partido.marcador_local}-{this.state.partido.marcador_visitante}</h1>
                <h4 style={{fontWeight:"100"}}>{this.state.partido.fecha}</h4>
                <h4 style={{fontWeight:"100"}}>{this.state.partido.ubicacion.localidad}</h4>
                <h4> Este partido requiere tu confirmacion</h4>
                <button className="btn btn-success"style={{marginRight:10} } onClick={() => this.acceptPartido()}>Aceptar</button> 
                <button className="btn btn-warning" onClick={() => this.rejectPartido()}>Rechazar</button> 
            </div>
    }else{
      return <div>
          <h1 style={{fontWeight:"100"}}>{this.state.partido.marcador_local}-{this.state.partido.marcador_visitante}</h1>
          <h4 style={{fontWeight:"100"}}>{this.state.partido.fecha}</h4>
          <h4 style={{fontWeight:"100"}}>{this.state.partido.ubicacion.localidad}</h4>
          <h4> Este partido requiere confirmacion del otro equipo</h4>
          
      </div>
    }
  }else{
    if(this.state.partido.jugado){
      return <div>
          <h1 style={{fontWeight:"100"}}>{this.state.partido.marcador_local}-{this.state.partido.marcador_visitante}</h1>
          <h4 style={{fontWeight:"100"}}>{this.state.partido.fecha}</h4>
          <h4 style={{fontWeight:"100"}}>{this.state.partido.ubicacion.localidad}</h4>
         
          
      </div>
    }else{
      if(this.state.partido.torneo.organizador_name==JSON.parse(sessionStorage.user).user_name){
        return <div>
        <form className="form1" onSubmit={this.onSubmitTorneo}>
                    <div className="row">
                      <div className="col-md-5 text-center">
                            <input placeholder="L"
                              style={{width:"100%"}}
                              name="marcador_local"
                              onChange={event => this.setState({marcador_local: event.target.value})}
                              value={this.state.marcador_local}
                              className="form-control"
                              required/>
                      </div>
                      <div className="col-md-2 text-center">
                            <h3>-</h3>
                      </div>
                      <div className="col-md-5 text-center">
                            <input placeholder="V"
                              style={{width:"100%"}}
                              name="marcador_visitante"
                              onChange={event => this.setState({marcador_visitante: event.target.value})}
                              value={this.state.marcador_visitante}
                              className="form-control"
                              required/>
                      </div>

                    
                      <div>
                        <br/>
                      </div>
                      
                      </div>
                      <button type="submit" className="btn btn-lg btn-primary btn-block">Enviar resultado</button>
        </form>
            <h4 style={{fontWeight:"100"}}>{this.state.partido.fecha}</h4>
            <h4 style={{fontWeight:"100"}}>{this.state.partido.ubicacion.localidad}</h4>
        </div>
      }else{
        return <div>
        <h1 style={{fontWeight:"100"}}>{this.state.partido.marcador_local}-{this.state.partido.marcador_visitante}</h1>
          <h4 style={{fontWeight:"100"}}>{this.state.partido.fecha}</h4>
          <h4 style={{fontWeight:"100"}}>{this.state.partido.ubicacion.localidad}</h4>
          <h4> El resultado de este partido aun no ha sido ingresado por el organizador del torneo</h4>
         </div> 
      }
    }
  }  
  }


  updatePartido(){
    let pending_team_id=0
    if(JSON.parse(sessionStorage.user).user_name==this.state.partido.info_equipos[0].capitan_name){
      pending_team_id=this.state.partido.info_equipos[1].id
    }else{
      pending_team_id=this.state.partido.info_equipos[0].id
    }
		axios.put(consts.SERVER_URL+'partidos/'+this.state.partido.id+'?', { 
			
			pending: true,
      marcador_local: this.state.marcador_local,
      marcador_visitante: this.state.marcador_visitante,
      pending_equipo: pending_team_id
			
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
    updatePartidoTorneo(){
      
      axios.put(consts.SERVER_URL+'partidos/'+this.state.partido.id+'?', { 
        
        pending: false,
        marcador_local: this.state.marcador_local,
        marcador_visitante: this.state.marcador_visitante,
        jugado: true
        
         }).then(res => {
          console.log(res);
          if(res.status==204){
            swal(
              "Partido almacenado",
              "El marcador fue almacenado correctamente",
              "success"
              ).then((value) => {
                window.location.reload()
            })
          }else{
            swal(
              "Sucedio un error",
              "continue",
              "error"
              )
          }
          }) 
      } 
    acceptPartido(){
      swal({
        title: '¿Seguro?',
        text: 'Esta accion no se puede deshacer',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
        }).then((result) => {
        if (result.value) {
          axios.put(consts.SERVER_URL+'partidos/'+this.state.partido.id+'?', { 
        
            jugado: true,
            pending: false,
            pending_equipo: null
            
             }).then(res => {
              console.log(res);
              if(res.status==204){
                swal(
                  "Partido guardado",
                  "Tu partido se almaceno",
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
        
        })
      
      } 
    
      rejectPartido(){
        swal({
          title: '¿Seguro?',
          text: 'Esta accion no se puede deshacer',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Si',
          cancelButtonText: 'No'
          }).then((result) => {
          if (result.value) {
            axios.put(consts.SERVER_URL+'partidos/'+this.state.partido.id+'?', { 
          
              pending: false,
              pending_equipo: null,
              marcador_local: 0,
              marcador_visitante: 0,
              
               }).then(res => {
                console.log(res);
                if(res.status==204){
                  swal(
                    "Resultado revertido",
                    "El marcador fue eliminado",
                    "error"
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
          
          })
        
        }   
  
  onSubmit(e){
		e.preventDefault();
		swal({
			title: '¿Seguro?',
			text: 'El capitan del otro equipo recibira tu solicitud',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Si',
			cancelButtonText: 'No'
		  }).then((result) => {
			if (result.value) {
				this.updatePartido();
				
			  
		
			} 
			
		  })
    
    
  }

  onSubmitTorneo(e){
		e.preventDefault();
		swal({
			title: '¿Seguro?',
			text: 'Este marcador se almacenara y no se puede deshacer',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Si',
			cancelButtonText: 'No'
		  }).then((result) => {
			if (result.value) {
				this.updatePartidoTorneo();
				
			  
		
			} 
			
		  })
    
    
  }

 render() {
    if(this.state.isLoading){
    return (<div>

        {Example}

        </div>); // render the loading component
    }
    
    
    
    
   
    
    return (

    <div >
      
    <div className="tablon row" >
         <div className="col-md-4 text-center">
            <h3>{this.state.partido.info_equipos[0].nombre}</h3>
            <ul className="text-center nav nav-tabs">
               <li className="active tablink"><a data-toggle="tab" href="#equipo1">Equipo</a></li>
               <li className="tablink"><a data-toggle="tab" href="#jugadores1">Jugadores</a></li>
            </ul>
            
            <div className="tab-content">
            <div className="text-center tab-pane active" id="equipo1">
            <div className="row" >
                  <div class="col-md-4">
                  </div>
               
                  <div class="col-md-4">
                  <a href={`/equipo/${this.state.partido.info_equipos[0].id}`}>
                    <img src={require('../../imagenes/ball-fire.jpg')} className="img-responsive profile-img"/>
      	            <h5>{this.state.partido.info_equipos[0].nombre}</h5>
      	          </a>
                  </div>
                  <div class="col-md-4">
                  </div>  
            </div>
      	    </div>  
                <div className="text-center cont_card col-md-3 tab-pane" id="jugadores1">
                { this.state.partido.info_equipos[2].map(user =>

                      <div className="container cont_partido">
                        <div className="row align-items-start">
                          <div className="col-md-8">
                            <h2 style={{fontSize:"medium", fontWeight:"100"}}>
                            {user.user_name}
                            </h2>
                          </div>
                        
                      </div>

                  </div>
              )}
                </div>
            </div>
         </div>
         <div className="col-md-4 text-center">
            <this.scoreAndInfo />
         </div>
         
         <div className="col-md-4 text-center">
            <h3>{this.state.partido.info_equipos[1].nombre}</h3>
            <ul className="text-center nav nav-tabs">
               <li className="active tablink"><a data-toggle="tab" href="#equipo2">Equipo</a></li>
               <li className="tablink"><a data-toggle="tab" href="#jugadores2">Jugadores</a></li>
            </ul>
            
            <div className="tab-content" >
            <div className="text-center tab-pane active" id="equipo2">
            <div className="row" >
                  <div class="col-md-4">
                  </div>
               
                  <div class="col-md-4">
                  <a href={`/equipo/${this.state.partido.info_equipos[1].id}`}>
                    <img src={require('../../imagenes/ball-fire.jpg')} className="img-responsive profile-img"/>
      	            <h5>{this.state.partido.info_equipos[1].nombre}</h5>
      	          </a>
                  </div>
                  <div class="col-md-4">
                  </div>  
            </div>
      	    </div>  
                <div className="text-center cont_card col-md-3 tab-pane" id="jugadores2">
                { this.state.partido.info_equipos[3].map(user =>

                  <div className="container ">
                  <div className="row align-items-start">
                  <div className="col-md-8 cont_partido">
                  <h2 style={{fontSize:"medium", fontWeight:"100"}}>
                  {user.user_name}
                  </h2>
                  </div>
  
                  </div>

                  </div>
                )}
                </div>
            </div>
         </div>

            
         
    </div>
      
	 </div>



    )
  
  }
}
