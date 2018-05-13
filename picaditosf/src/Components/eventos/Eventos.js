import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Example from '../Loading/logo'
import BuscarEvento from './BuscarEvento'
import '../../styles/styles.css'
import * as consts from '../../consts';

const divStyle = {
  color: 'white',
}
export default class Eventos extends React.Component {
  state = {
    eventos: [], isLoading: true
  }
	storeTorneoName(name){
  	sessionStorage.setItem('check_torneo', name);
  }
  storeUserName(name){
  	sessionStorage.setItem('check_user', name);
  }
  storeEquipoName(name){
  	sessionStorage.setItem('check_equipo', name);
  }
  componentDidMount() {
    axios.get(consts.SERVER_URL+`torneos `)
      .then(res => {
        const eventos = res.data;

        this.setState({ eventos });

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

<div>
{/*
<div className="cont_2">
		<div className="container">
		  	<p  style={divStyle}>En esta pagina puede ver los torneos y partidos si desea crear o buscar un evento puede hacerlo llenando el siguiente formulario</p>
        <div className="row">
        <div className="col-sm-2" align="center"></div>
        <div className="col-sm-2" align="center">
        </div>
        <div className="col-sm-4" align="center"></div>
        <div className="col-sm-2" align="center">
        <a href='/BuscarEvento'>
            <button className="btn">Buscar evento</button>
        </a>
        </div>
        </div>

		</div>
</div>*/}
<div className="cont_2">
  <h1>Eventos</h1>
  <div className="scrollable row">
    <div className="text-center cont_card col-md-3">
      <div className="">
        <a href='/createEv'>
          <img src='https://cdn0.iconfinder.com/data/icons/flat-social-media-icons-set-round-style-1/550/netvibes-512.png' className="img-responsive profile-img"/>
      	  <h4>Crear Evento</h4>
      	</a>
      	</div>
    </div>
    
    { this.state.eventos.map(evento =>
    <div className="text-center cont_card col-md-3">
      	<Link to='/torneo'>
      	  <div onClick={() => this.storeTorneoName(evento.nombre)}>
      	    <img src={require('../../imagenes/trofeo-icon.jpg')} className="img-responsive profile-img" alt="Ver torneo"/>
      		  <h4>{evento.nombre}</h4>
      		  {/*<p style={divStyle}>Organizador: {evento.organizador_name}</p>*/}
      	  </div>
        </Link>
      	<div className="" >
      	{/*	<Link to='/torneo'>
      		  <button className="btn btn-info prf-btn" onClick={() => this.storeTorneoName(evento.nombre)}>Ver Torneo</button>
    			</Link>*/}
      	</div>
    </div>
    )}
  </div>
  <div className="" align="center">
    <a href='/BuscarEvento'>
        <button className="btn">Buscar evento</button>
    </a>
    </div>
  </div>

</div>

    )
  }
}
