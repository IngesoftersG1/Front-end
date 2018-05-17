import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo'
import MapContainer from './MapContainer.js'
import '../../styles/styles.css'


export default class Canchas extends Component {
  state = {
    eventos: [], isLoading: true
  }
  /*
  componentDidMount() {
    setTimeout(() => 
      this.endLoading()
      , 2000);
    axios.get(`http://localhost:3001/canchas`)

      .then(res => {
        const eventos = res.data;

        this.setState({ eventos });

        setTimeout(() => this.setState({ isLoading: false }), 2000);


      })
    
  }
  
/*   
  initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
    */
  test = event => {    
    event.preventDefault();  
    //window.location.reload()
  }

 render() {
   /*
    if(this.state.isLoading){ 
    return (<div>
        {Example}
        </div>); // render the loading component
    }*/
    return (
    <div>    
      <div className="cont_2">    
    	  <h1>Canchas</h1>
        {/*<p> esta es la pagina de las canchas aqui deberia salir el mapa y lo demas </p>
        	<div id="map"></div>*/}
        <div className="" align="center" >
          <Link to='/solicitudcancha'>
            <button className="btn" style={{width:'100%','margin-bottom':'3px'}} >
              <b>Solicitar agregar cancha</b></button>
          </Link>
  		  </div>
        <div className="mapg">
          <MapContainer />
        </div>
        
        
      
    	 {/* <Link to='/'><button>Inicio</button></Link>	
    	  <Link to='/BuscarPartido'><button>Buscar partido</button></Link> */} 			  	
    	</div>	
    </div>   


    )
  }
}
