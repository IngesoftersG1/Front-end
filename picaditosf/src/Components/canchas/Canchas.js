import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo'
import MapContainer from './MapContainer.js'
import '../../styles/styles.css'


export default class Canchas extends Component {
  state = {
    eventos: [], 
    max_distance: 1000,
    max_price: 50000,
    min_cal: 1,
    isLoading: true
  }
  
  componentDidMount() {
    
  }
  
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
    	  <div className="row" style={{padding: '30px',color:'white'}}> 
    	    <div className="col-md-4">
    				<label htmlFor="dist">Distancia máxima</label>
    				<input placeholder="Kilómetros"
              type='number'
              onChange={event => this.setState({max_distance: event.target.value})}
              value={this.state.max_distance}
    					className="form-control"
    					/>
  				</div>
  				<div className="col-md-4">
    				<label htmlFor="price">Precio máximo</label>
    				<input placeholder="Pesos"
              type='number'
              onChange={event => this.setState({max_price: event.target.value})}
              value={this.state.max_price}
    					className="form-control"
    					/>
    			</div>
    			<div className="col-md-4">
    				<label htmlFor="price">Calificaion minima</label>
    				<input placeholder=" de 1 a 5 estrellas"
              type='number'
              onChange={event => this.setState({min_cal: event.target.value})}
              value={this.state.min_cal}
    					className="form-control"
    					/>
    			</div>
  			</div>
    	  
        <div className="mapg">
          <MapContainer 
            dist={this.state.max_distance} 
            price={this.state.max_price}
            cal={this.state.min_cal}/>
        </div>
        
        <div className="" align="center" style={{width:'85%','max-width':'720px','z-index':'1000',position:'absolute'}} >
          <Link to='/solicitudcancha'>
            <button className="btn" align="center" style={{width:'100%','margin-top':'-70px'}} >
              <b>Solicitar agregar cancha</b></button>
          </Link>
  		  </div>
        		  	
    	</div>	
    </div>   


    )
  }
}
