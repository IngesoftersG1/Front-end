import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo'
import * as consts from '../../consts';

const divStyle = {
  color: 'white',
}

export default class Equipos extends Component {
  state = {
    eventos: [], isLoading: true
  }
	
  componentDidMount() {

    axios.get(consts.SERVER_URL+`equipos `)
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
    <div className="cont_2">
      <h1>Equipos</h1>
      <div className="scrollable row">
          <div className="text-center cont_card col-md-3">
            <div className="">
              <a href='/createE'>
                <img src='https://cdn0.iconfinder.com/data/icons/flat-social-media-icons-set-round-style-1/550/netvibes-512.png' className="img-responsive profile-img"/>
            	  <h4>Crear Equipo</h4>
            	</a>
            	</div>
          </div>  
          { this.state.eventos.map(equipo =>
          <div className="text-center cont_card col-md-3">
            <Link to={`/equipo/${equipo.id}`}> 
              <img src={require('../../imagenes/team.jpg')} className="img-responsive profile-img"/>
              <h4>{equipo.nombre}</h4>
            </Link>
          </div>
          )}
      </div>
      <div className="" align="center">
        <a href='/BuscarEquipo'>
          <button className="btn">Buscar equipo</button>
        </a>
  		</div>
    </div>
    </div>
    )
  }
}
