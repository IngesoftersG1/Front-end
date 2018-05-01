import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo'
import '../../styles/styles.css'



export default class Graphs extends React.Component {
  state = {
    eventos: [], isLoading: true
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/canchas`)
      .then(res => {
        const eventos = res.data;

        this.setState({ eventos });

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

 <div className="cont_2">
	  <h2>Canchas</h2>
    	<p> esta es la pagina de las canchas aqui deberia salir el mapa y lo demas </p>
    	{/*<MapContainer />*/}
	  	<Link to='/'><button>Inicio</button></Link>
	  	<Link to='/BuscarPartido'><button>Buscar partido</button></Link>
	  </div>
	  )}

	</div>



    )
  }
}
