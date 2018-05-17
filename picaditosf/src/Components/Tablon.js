import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../styles/styles.css'

import Example from '../Components/Loading/logo'
import session from '../Reducers/sessionReducer';
import axios from 'axios';
import * as consts from '../consts';
import DelayLink from '../Components/DelayLink'

export default class Tablon extends Component {
  state = {
    tablon: [], isLoading: true
  }
  removeButton() {
    
		if (sessionStorage.user && JSON.parse(sessionStorage.user).admin) {
			return<Link to='/comingsoon'>
						<button className="btn btn-danger prf-btn">Eliminar anuncio</button>
						</Link>
		}
		return null;
	}
	
  componentDidMount() {
         
          axios.get(consts.SERVER_URL+`tablons`)
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
    	<div>
	<div className="text-center ">
	  	<div className="carousel slide" data-ride="carousel">
			  <div className="carousel-inner">
			    <div className="carousel-item active">
			      <img className="d-block" src="https://i.pinimg.com/originals/c2/75/33/c2753303832db57412627f5ca4534a19.jpg" alt="First slide"/>
			    </div>
			    <div className="carousel-item">
			      <img className="d-block" src="http://eaglesoccercamps.com/wp-content/uploads/2018/01/cropped-Soccer-Field-Night-2.jpg" alt="Second slide"/>
			    </div>
			    <div className="carousel-item">
			    	<img className="d-block" src="http://moziru.com/images/feilds-clipart-lawn-8.jpg" alt="Third slide"/>
			    </div>
			  </div>
			</div>
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
          
            
          { this.state.tablon[0].anuncios.map(anuncio =>
  
  
    <div className="cont_2">  
            <div className="container">
            <div className="row align-items-start" style={{textAlign:"left"}}>
          
  
            <div className="col-md-9">
              <h1>
              {anuncio.titulo}
              </h1>
  
            <h4>{anuncio.descripcion}</h4>
            </div>
  
          <div className="col-md-3 " >

                <Link to={`/usuario/${anuncio.user_id}`}>
                <button className="btn btn-info prf-btn" >Ver Usuario</button>
                </Link>
                <this.removeButton />
          </div>
      </div>
      </div>
      </div>
      )}

      { this.state.tablon[1].anuncios.map(anuncio =>
  
  
  <div className="cont_2">  
          <div className="container">
          <div className="row align-items-start" style={{textAlign:"left"}}>
        

          <div className="col-md-9">
            <h1>
            {anuncio.titulo}
            </h1>

          <h4>{anuncio.descripcion}</h4>
          </div>

        <div className="col-md-3 " >
        <Link to={`/torneo/${anuncio.torneo_id}`}>
                <button className="btn btn-info prf-btn">Ver Torneo</button>
                </Link>
                <this.removeButton />
        </div>
    </div>
    </div>
    </div>
    )}

    { this.state.tablon[2].anuncios.map(anuncio =>
  
  
  <div className="cont_2">  
          <div className="container">
          <div className="row align-items-start" style={{textAlign:"left"}}>
        

          <div className="col-md-9">
            <h1>
            {anuncio.titulo}
            </h1>

          <h4>{anuncio.descripcion}</h4>
          </div>

        <div className="col-md-3 " >
              <Link to={`/equipo/${anuncio.equipo_id}`}>
              <button className="btn btn-info prf-btn">Ver Equipo</button>
              </Link>
              <this.removeButton />
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
          
  
            <div className="col-md-9">
              <h1>
              {anuncio.titulo}
              </h1>
  
            <h4>{anuncio.descripcion}</h4>
            </div>
  
          <div className="col-md-3 " >
                <Link to={`/usuario/${anuncio.user_id}`}>
                <button className="btn btn-info prf-btn" >Ver Usuario</button>
                </Link>
                <this.removeButton />
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
          
  
            <div className="col-md-9">
              <h1>
              {anuncio.titulo}
              </h1>
  
            <h4>{anuncio.descripcion}</h4>
            </div>
  
          <div className="col-md-3 " >
              <Link to={`/equipo/${anuncio.equipo_id}`}>
              <button className="btn btn-info prf-btn">Ver Equipo</button>
              </Link>
              <this.removeButton />
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
          
  
            <div className="col-md-9">
              <h1>
              {anuncio.titulo}
              </h1>
  
            <h4>{anuncio.descripcion}</h4>
            </div>
  
          <div className="col-md-3 " >
                <Link to={`/torneo/${anuncio.torneo_id}`}>
                <button className="btn btn-info prf-btn">Ver Torneo</button>
                </Link>
                <this.removeButton />
          </div>
      </div>
      </div>
      </div>
      )}

    
          </div>  
  
        </div>

      
          </div>
        
      </div>





      
      </div>
	  
    	
    <div className= 'Footerfont'> 
    
    </div>
      
</div>
    )
  }

}










    