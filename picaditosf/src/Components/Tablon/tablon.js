import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../../styles/styles.css'
import Example from '../../Components/Loading/logo'
import session from '../../Reducers/sessionReducer';
import axios from 'axios';
import DelayLink from '../DelayLink'

export default class Tablon extends Component {
  state = {
    tablon: [], isLoading: true
  }
  delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
  }
  storeEquipoName(id){
  	axios.get(`http://localhost:3001/equipos/equipo_id/?id=`+id)
    		.then(res => {
          sessionStorage.setItem('check_equipo', res.data.nombre);
          setTimeout(() => this.setState({ isLoading: false }), 500)
      })
	}
	storeTorneoName(id){
  	axios.get(`http://localhost:3001/torneos/torneo_id/?id=`+id)
    		.then(res => {
          sessionStorage.setItem('check_torneo', res.data.nombre);
          setTimeout(() => this.setState({ isLoading: false }), 500)
      })
  }

  storeUserName(name){
  	    sessionStorage.setItem('check_user', name);
  }

  componentDidMount() {

          axios.get(`http://localhost:3001/tablons`)
    		.then(res => {
        	const tablon = res.data;
      		console.log(tablon)
          this.setState({tablon});
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
      <div className="tablon">
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="active tablink"><a data-toggle="tab" href="#all">Todos los anuncios</a></li>
            <li className="tablink"><a data-toggle="tab" href="#jug">Jugadores</a></li>
            <li className="tablink"><a data-toggle="tab" href="#equip">Equipos</a></li>
            <li className="tablink"><a data-toggle="tab" href="#tor">Torneos</a></li>
          </ul>
          <div className="tab-content">
            <div id="all" className="tab-pane active">
              {this.state.tablon[0].anuncios.map(anuncio =>
              <div className="cont_2">
                <div className="container">
                  <div className="row align-items-start" style={{textAlign:"left"}}>
                    <div className="col-md-10">
                      <h1>
                        {anuncio.titulo}
                      </h1>
                      <h4>
                        {anuncio.descripcion}
                      </h4>
                    </div>
                    <div className="col-md-2 " >
                      <Link to='/usuario'>
                      <button className="btn btn-info prf-btn"  onClick={() => this.storeUserName(anuncio.user_id)}>Ver Usuario</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {this.state.tablon[1].anuncios.map(anuncio =>
            <div className="cont_2">
              <div className="container">
                <div className="row align-items-start" style={{textAlign:"left"}}>
                  <div className="col-md-10">
                    <h1>
                    {anuncio.titulo}
                    </h1>
                    <h4>
                    {anuncio.descripcion}
                    </h4>
                  </div>
                  <div className="col-md-2 " >
                    <DelayLink to="/torneo" delay={200}>
                    <button className="btn btn-info prf-btn" onClick={() => this.storeTorneoName(anuncio.torneo_id)}>Ver Torneo</button>
                    </DelayLink>
                  </div>
                </div>
              </div>
            </div>
            )}
            { this.state.tablon[2].anuncios.map(anuncio =>
            <div className="cont_2">
              <div className="container">
                <div className="row align-items-start" style={{textAlign:"left"}}>
                  <div className="col-md-10">
                    <h1>
                    {anuncio.titulo}
                    </h1>
                    <h4>
                    {anuncio.descripcion}
                    </h4>
                  </div>
                  <div className="col-md-2 " >
                    <DelayLink to="/equipo" delay={200}>
                    <button className="btn btn-info prf-btn" onClick={() => this.storeEquipoName(anuncio.equipo_id)}>Ver Equipo</button>
                    </DelayLink>
                  </div>
                </div>
              </div>
            </div>
            )}
        </div>
        <div id="jug" className="tab-pane">
        { this.state.tablon[0].anuncios.map(anuncio =>
        <div className="cont_2">
          <div className="container">
            <div className="row align-items-start" style={{textAlign:"left"}}>
              <div className="col-md-10">
                <h1>
                {anuncio.titulo}
                </h1>
                <h4>{anuncio.descripcion}</h4>
              </div>
              <div className="col-md-2 " >
                <Link to='/usuario'>
                <button className="btn btn-info prf-btn" onClick={() => this.storeUserName(anuncio.user_id)}>Ver Usuario</button>
                </Link>
            </div>
          </div>
        </div>
      </div>
      )}
  </div>

  <div id="equip" className="tab-pane">
    { this.state.tablon[2].anuncios.map(anuncio =>
      <div className="cont_2">
        <div className="container">
          <div className="row align-items-start" style={{textAlign:"left"}}>
            <div className="col-md-10">
              <h1>
              {anuncio.titulo}
              </h1>
              <h4>{anuncio.descripcion}</h4>
              </div>
                <div className="col-md-2 " >
                  <DelayLink to="/equipo" delay={200}>
                  <button className="btn btn-info prf-btn" onClick={() => this.storeEquipoName(anuncio.equipo_id)}>Ver Equipo</button>
                  </DelayLink>
                </div>
            </div>
          </div>
        </div>
        )}
      </div>
      <div id="tor" className="tab-pane">
          { this.state.tablon[1].anuncios.map(anuncio =>
          <div className="cont_2">
            <div className="container">
              <div className="row align-items-start" style={{textAlign:"left"}}>
                <div className="col-md-10">
                  <h1>
                  {anuncio.titulo}
                  </h1>
                  <h4>{anuncio.descripcion}</h4>
                </div>
                <div className="col-md-2 " >
                  <DelayLink to="/torneo" delay={200}>
                  <button className="btn btn-info prf-btn" onClick={() => this.storeTorneoName(anuncio.torneo_id)}>Ver Torneo</button>
                  </DelayLink>
                </div>
              </div>
            </div>
          </div>
          )}
      </div>
  </div>
</div>
</div>

)
}
}
