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
        <div className="mapg">
          <MapContainer />
        </div>
        
        <div className="" align="center" style={{width:'85%','max-width':'720px','z-index':'1000',position:'absolute'}} >
          <Link to='/solicitudcancha'>
            <button className="btn" align="center" style={{width:'100%','margin-top':'-70px'}} >
              <b>Solicitar agregar cancha</b></button>
          </Link>
  		  </div>
        
        
      
    	 {/* <Link to='/'><button>Inicio</button></Link>	
    	  <Link to='/BuscarPartido'><button>Buscar partido</button></Link> */} 			  	
    	</div>	
    </div>   


    )
  }
}
