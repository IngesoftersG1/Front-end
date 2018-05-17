import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo';
import * as consts from '../../consts';

import '../../styles/styles.css';
/*
{
this.state.eventos.map(evento => {evento[0].title})
}
*/
export default class Partido extends Component {
  state = {
    partido: [], isLoading: true
  }
  
  componentDidMount() {
    console.log(this.props.match.params.id);
    axios.get(consts.SERVER_URL+`partidos/`+this.props.match.params.id)
    .then(res => {
    const partido = [res.data];
    console.log(partido);
    this.setState({ partido });
    setTimeout(() => this.setState({ isLoading: false }), 1000);
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
      { this.state.partido.map(partido =>
    <div className="tablon row" >
         <div className="col-md-4 text-center">
            <h3>{partido.info_equipos[0].nombre}</h3>
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
                  <a href={`/equipo/${partido.info_equipos[0].id}`}>
                    <img src={require('../../imagenes/ball-fire.jpg')} className="img-responsive profile-img"/>
      	            <h5>{partido.info_equipos[0].nombre}</h5>
      	          </a>
                  </div>
                  <div class="col-md-4">
                  </div>  
            </div>
      	    </div>  
                <div className="text-center cont_card col-md-3 tab-pane" id="jugadores1">
                { partido.info_equipos[2].map(user =>

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
            <h1 style={{fontWeight:"100"}}>{partido.marcador_local}-{partido.marcador_visitante}</h1>
            <h4 style={{fontWeight:"100"}}>{partido.fecha}</h4>
            <h4 style={{fontWeight:"100"}}>{partido.ubicacion.localidad}</h4>
         </div>
         
         <div className="col-md-4 text-center">
            <h3>{partido.info_equipos[1].nombre}</h3>
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
                  <a href={`/equipo/${partido.info_equipos[1].id}`}>
                    <img src={require('../../imagenes/ball-fire.jpg')} className="img-responsive profile-img"/>
      	            <h5>{partido.info_equipos[1].nombre}</h5>
      	          </a>
                  </div>
                  <div class="col-md-4">
                  </div>  
            </div>
      	    </div>  
                <div className="text-center cont_card col-md-3 tab-pane" id="jugadores2">
                { partido.info_equipos[3].map(user =>

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
      )}
	 </div>



    )
  }
}
