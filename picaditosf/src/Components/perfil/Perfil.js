import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../../styles/styles.css'
import Example from '../Loading/logo'
import MyPdfViewer from '../PDF/pdfview'
import session from '../../Reducers/sessionReducer';

export default class Perfil extends Component {
  state = {
    eventos: [], isLoading: true
  }

  componentDidMount() {
          setTimeout(() => this.setState({ isLoading: false }), 500);
      }

 render() {
    if(this.state.isLoading){
    return (<div>
        {Example}
        </div>); // render the loading component
    }

  	let names = JSON.parse(sessionStorage.user).nombres + " " + JSON.parse(sessionStorage.user).apellidos

    return (
    <div>
	<div className="cont_2">
		<div className="container">
		  <div className="row align-items-start">
		  	<div className="col-md-2">
		  		<img src={require('../../imagenes/perfil.jpg')} className="img-responsive profile-img"/>
		  	</div>
		  	<div className="col-md-10">

			  	<div className="row">

			  		<h1>{JSON.parse(sessionStorage.user).nombres}</h1>
						<div className="prf-btns">
				  		<Link to='/editperfil'>
				  			<button className="btn btn-info prf-btn">Editar Perfil</button>
				  		</Link>

				  		<Link to='/Configuracion'>
				  			<button className="btn btn-warning prf-btn">Configuración</button>
				  		</Link>
						</div>
			  	</div>

			  	<div className="row">
					<h4>@{JSON.parse(sessionStorage.user).user_name}</h4>
		  		</div>
		  	</div>
		 	</div>
	  </div>
		<div className="container">
		  <ul className="nav nav-tabs">
		    <li className="active tablink"><a data-toggle="tab" href="#perfil">Perfil</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#info">Información</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#estat">Estadisticas</a></li>
		  </ul>

		  <div className="tab-content">
		    <div id="perfil" className="tab-pane active">
		      <h3>Perfil</h3>
		    </div>
		    <div id="info" className="tab-pane fade">
		      <h3>Información</h3>
		    </div>
		    <div id="estat" className="tab-pane fade">
		      <h3>Estadisticas</h3>
		      	<Link to='/statistics'>
		  			<button className="btn">ver estadisticas</button>
		  		</Link>
		    </div>
		  </div>

		</div>
	</div>
	</div>



    )
  }

}
