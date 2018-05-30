import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo'
import * as consts from '../../consts';
var b

const divStyle = {
  color: 'white',
}

/*
{
this.state.eventos.map(evento => {evento[0].title})
}
*/
export default class Busqueda extends Component {
  state = {
    tablon: [], equipos: [], eventos: [], isLoading: true
  }

  //var param = {this.props.params.busq};

  componentDidMount() {
    const { busq } = this.props.match.params
    console.log(busq)
    axios.get(consts.SERVER_URL+`equipos/search_name?`, {
    params: {
    name: busq
    }
    }).then(res => {
    const equipos = res.data;
    console.log(equipos)
    this.setState({ equipos });
    })


    axios.get(consts.SERVER_URL+`torneos/search?`, {
    params: {
    name: busq
    }
    }).then(res => {
    const eventos = res.data;
    this.setState({ eventos });
          })

    axios.get(consts.SERVER_URL+`anuncios/search_name?`, {
    params: {
    name: busq
    }
    }).then(res => {
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

<div className="cont_2">
  <div className="container">
      <p  style={divStyle}>Mostrando resultados de la busqueda : {b} </p>
   </div>
 </div>



  <div className="cont_2">
		<div className="container">
		  	<h3> Resultado de la busqueda en Equipos </h3>
    </div>
  </div>

  {this.state.equipos.map(equipo =>
	   <div className="cont_2">
		   <div className="container">
		     <div className="row align-items-start">
		  	    <div className="col-md-2">
		  		  <img src={require('../../imagenes/team.jpg')} className="img-responsive profile-img"/>
		  	    </div>
		  	    <div className="col-md-8">
		  		      <h1>
		  		      {equipo.nombre}
		  	        </h1>
		  		      <h4>Capitan: {equipo.capitan_name}</h4>
		  	    </div>
		  	    <div className="col-md-2 " >
              <Link to={`/equipo/${equipo.id}`}>
		  		  	<button className="btn btn-info prf-btn">Ver Equipo</button>
							</Link>
		  	    </div>
		     </div>
		   </div>
		 </div>
		)}




     <div className="cont_2">
   		<div className="container">
   		  	<h3> Resultado de la busqueda en Torneos </h3>
       </div>
     </div>

     <div>
       {this.state.eventos.map(evento =>
   	     <div className="cont_2">
   		     <div className="container">
   		       <div className="row align-items-start">
   		  	      <div className="col-md-2">
   		  		        <img src={require('../../imagenes/team.jpg')} className="img-responsive profile-img"/>
   		  	      </div>
   		  	      <div className="col-md-8">
   		  		         <h1>
   		  		         {evento.nombre}
   		  	           </h1>
   		  		         <h4>Organizador: {evento.organizador_name} </h4>
   		  	      </div>
   	  	        <div className="col-md-2 " >
   		  		  	     <Link to={`/torneo/${evento.id}`}>
   		  		  	     <button className="btn btn-info prf-btn" >Ver Torneo</button>
   							     </Link>
   		  	      </div>
   		       </div>
   		     </div>
   		   </div>
   		   )}
     </div>
     <div className="cont_2">
       <div className="container">
           <h3> Resultado de la busqueda en Anuncios </h3>
       </div>
     </div>

     { this.state.tablon.map(anuncio =>
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
               <Link to={`/usuario/${anuncio.user_id}`}>
               <button className="btn btn-info prf-btn" >Ver Usuario</button>
               </Link>
             </div>
           </div>
         </div>
       </div>
     )}



</div>
    )
  }
}
