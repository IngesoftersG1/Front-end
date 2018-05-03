import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo'
var a;
/*
{
this.state.eventos.map(evento => {evento[0].title})
}
*/
export default class Torneo extends Component {
  state = {
    torneo: [], isLoading: true
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
    axios.get(`http://localhost:3001/torneos/1?`, {
    params: {
    nombre: sessionStorage.check_torneo
  }
})
      .then(res => {
        const torneo = [res];
        console.log(torneo)
        this.setState({ torneo });

        setTimeout(() => this.setState({ isLoading: false }), 2000);

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
            <Link to='/editperfil'>
              <button className="btn btn-info prf-btn">Inscribir Equipo</button>
            </Link>

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
                <Link to='/equipo'>
                <button className="btn btn-info prf-btn" onClick={() => this.storeEquipoName(equipo.nombre)}>Ver Equipo</button>
                  </Link>
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
