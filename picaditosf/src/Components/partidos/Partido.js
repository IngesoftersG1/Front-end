import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo';
import * as consts from '../../consts';
var a;
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
      
     setTimeout(() => this.setState({ isLoading: false }), 100);
  }



 render() {
    if(this.state.isLoading){
    return (<div>

        {Example}

        </div>); // render the loading component
    }


    return (

    <div>
    <div className="tablon row">
         <div className="col-md-4 text-center">
            <h3>Local</h3>
            <ul className="text-center nav nav-tabs">
               <li className="active tablink"><a data-toggle="tab" href="#equipo1">Equipo</a></li>
               <li className="tablink"><a data-toggle="tab" href="#jugadores1">Jugadores</a></li>
            </ul>
            
            <div className="tab-content">
            <div className="text-center col-md-3 tab-pane active" id="equipo1">
               <div className="">
                  <a href='/createEv'>
                     <img src='https://cdn0.iconfinder.com/data/icons/flat-social-media-icons-set-round-style-1/550/netvibes-512.png' className="img-responsive profile-img"/>
      	            <h5>Equipo 1</h5>
      	         </a>
      	      </div>
             </div>
                <div className="text-center cont_card col-md-3 tab-pane" id="jugadores1">
                Jugadores
                </div>
            </div>
         </div>
         <div className="col-md-4 text-center">
            <h1>0-0</h1>
            <h4>Fecha</h4>
            <h4>Ubicacion</h4>
         </div>
         
         <div className="col-md-4 text-center">
            <h3>Local</h3>
            <ul className="text-center nav nav-tabs">
               <li className="active tablink"><a data-toggle="tab" href="#equipo2">Equipo</a></li>
               <li className="tablink"><a data-toggle="tab" href="#jugadores2">Jugadores</a></li>
            </ul>
            
            <div className="tab-content">
            <div className="text-center col-md-3 tab-pane active" id="equipo2">
               <div className="">
                  <a href='/createEv'>
                     <img src='https://cdn0.iconfinder.com/data/icons/flat-social-media-icons-set-round-style-1/550/netvibes-512.png' className="img-responsive profile-img"/>
      	            <h5>Equipo 1</h5>
      	         </a>
      	      </div>
             </div>
                <div className="text-center cont_card col-md-3 tab-pane" id="jugadores2">
                Jugadores
                </div>
            </div>
         </div>

            
         
    </div>
	 </div>



    )
  }
}
