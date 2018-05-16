import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../../styles/styles.css'
import Example from '../Loading/logo'
import MyPdfViewer from '../PDF/pdfview'
import session from '../../Reducers/sessionReducer';
import axios from 'axios';
import * as consts from '../../consts';


export default class Usuario extends Component {
  state = {
    usuario: [], isLoading: true
  }
  
  componentDidMount() {
          setTimeout(() => this.setState({ isLoading: false }), 500);
          axios.get(consts.SERVER_URL+`users/1?`, {
    			params: {
					user_name: this.props.match.params.id
				}
			})
    		.then(res => {
        	const user = [res.data];
      		console.log(user)
    		this.setState({ user});
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
	{ this.state.user.map(user =>
	
	<div className="cont_2">
		<div className="container">
		  <div className="row align-items-start">
		  	<div className="col-md-2">
		  		<img src={require('../../imagenes/perfil.jpg')} className="img-responsive profile-img"/>
		  	</div>
		  	<div className="col-md-10">

			  	<div className="row">

			  		<h1>{user.nombres}</h1>
			  	</div>

			  	<div className="row">
					<h4>@{user.user_name}</h4>
		  		</div>
		  	</div>
		 	</div>
	  </div>
		<div className="container">
		  <ul className="nav nav-tabs">
		   
		    <li className="active tablink"><a data-toggle="tab" href="#info">Información</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#estat">Estadisticas</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#equip">Mis Equipos</a></li>
		  </ul>

		  <div className="tab-content">
		    <div id="info" className="tab-pane active">
		      <h3>Información</h3>
		    </div>
		    <div id="estat" className="tab-pane fade">
		      <h3>Estadisticas</h3>
		      	<Link to='/statistics'>
		  			<button className="btn">ver estadisticas</button>
		  		</Link>
		    </div>
		    <div id="equip" className="tab-pane fade">
		    	<h3>Mis equipos</h3>


		    { this.state.user[0].equipos.map(equipo =>

				<div className="container">
					<div className="row align-items-start">
						<div className="col-md-8">
		  					<h4>
		  					{equipo.nombre}
		  	    			</h4>
		  	    		</div>
		  	    		<div className="col-md-2">

								<Link to={`/equipo/${equipo.id}`}>
		  						<button className="btn btn-info prf-btn">Ver Equipo</button>

		  	    				</Link>
		  	    		</div>
		  	    	</div>
		  		</div>
		)}



		    </div>
		  </div>

		</div>
	</div>
		)}
	</div>



    )
  }

}
