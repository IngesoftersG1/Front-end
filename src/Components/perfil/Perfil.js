import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../../styles/styles.css'
import Example from '../Loading/logo'
import MyPdfViewer from '../PDF/pdfview'
import session from '../../Reducers/sessionReducer';
import axios from 'axios';
import * as consts from '../../consts';

const defaultimage = require('../../imagenes/perfil.jpg')

export default class Perfil extends Component {
  state = {
    user: [], 
    isLoading: true,
    imgprf: null
  }
  

  storeUserName(name){
  	sessionStorage.setItem('check_user', name);
  }
	editButton(props) {
		const cap = props.cap;
		if (JSON.parse(sessionStorage.user).user_name == cap) {
			return<Link to='/comingsoon'>
						<button className="btn btn-info prf-btn">Editar Equipo</button>
						</Link>
		}
		return null;
	}
  componentDidMount() {
      setTimeout(() => this.setState({ isLoading: false }), 1000)
	  
      let imgbaseurl = consts.SERVER_URL+'uploads/item/picture/'+JSON.parse(sessionStorage.user).user_name
      
      axios.get(imgbaseurl+'/picture.jpeg')
		.then(response => {
	    	this.state.imgprf = imgbaseurl+'/picture.jpeg'
	    	this.setState({ isLoading: false })
	    })
	    .catch((error) => {
	    	console.log(error)
	    	axios.get(imgbaseurl+'/picture.png')
		    	.then(resp => {
		    		console.log('status',resp.status);
		    		this.state.imgprf = imgbaseurl+'/picture.png'
		    		this.setState({ isLoading: false })
		    	})
		    	.catch((e) => {
		    		console.log(e)
		    		this.state.imgprf = defaultimage
		    	})
	    })
	  
      axios.get(consts.SERVER_URL+`users/1?`, {
			params: {
				user_name:JSON.parse(sessionStorage.user).user_name
			}
		})
		.then(res => {
    	const user = [res.data];
  		console.log('user',user)
		this.setState({ user });
		this.setState({ isLoading: false })

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
		  		<img src={this.state.imgprf} className="img-responsive profile-img"/>
		  	</div>
		  	<div className="col-md-10">

			  	<div className="row">

			  		<h1>{user.nombres}</h1>
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
					<h4>@{user.user_name}</h4>
		  		</div>
		  	</div>
		 	</div>
	  </div>
		<div className="container">
		  <ul className="nav nav-tabs">
		    <li className="active tablink"><a data-toggle="tab" href="#perfil">Perfil</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#info">Información</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#estat">Estadisticas</a></li>
		    <li className="tablink"><a data-toggle="tab" href="#equip">Mis Equipos</a></li>
				<li className="tablink"><a data-toggle="tab" href="#tor">Mis Torneos</a></li>
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
            <br></br>
            <br></br>
		  			<button className="btn btn-lg btn-success btn-block">Ver Estadisticas (Gráficamente)</button>
          <br></br>
          <br></br>
          <br></br>
		  		</Link>
          <Link to='/pdf'>

          <button className="btn btn-lg btn-success btn-block">Ver Estadisticas (PDF)</button>
        </Link>
		    </div>
		    <div id="equip" className="tab-pane fade">
		    	<h3>Mis equipos</h3>


		    { this.state.user[0].equipos.map(equipo =>

				<div className="container">
					<div className="row align-items-start">
						<div className="col-md-6">
		  					<h4>
		  					{equipo.nombre}
		  	    			</h4>
		  	    		</div>
		  	    		<div className="col-md-6">
								
		  						<Link to={`/equipo/${equipo.id}`}>
		  						<button className="btn btn-info prf-btn">Ver Equipo</button>
		  	    				</Link>

								<this.editButton cap={equipo.capitan_name} />
								
								</div>
		  	    	</div>
		  		</div>
		)}
		 </div>
		 <div id="tor" className="tab-pane fade">
		 <h3>Mis Torneos</h3>
			{ this.state.user[0].torneos.map(torneo =>
			<div className="container">
				<div className="row align-items-start">
					<div className="col-md-6">
						<h4>
							{torneo.nombre}
						</h4>
					</div>
					<div className="col-md-6">
						<Link to={`/torneo/${torneo.id}`}>
							<button className="btn btn-info prf-btn">Ver Torneo</button>
						</Link>

						<Link to='/comingsoon'>
							<button className="btn btn-info prf-btn">Editar Torneo</button>
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
