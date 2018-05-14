import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../styles/styles.css'

import Example from '../Components/Loading/logo'
import session from '../Reducers/sessionReducer';
import axios from 'axios';
import * as consts from '../consts';
import DelayLink from '../Components/DelayLink'

export default class Inicio extends Component {
  state = {
    isLoading: true
  }


  componentDidMount() {
          setTimeout(() => this.setState({ isLoading: false }), 1000);
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






      <div className="inner cont_1">
			  <img className="logo1" src={require('../imagenes/ball-fire.png')} />
        <h1>PICADITOS</h1>
        <p className="lead">
					<b>Regístrate como jugador para obtener calificación de otros usuarios, compartir disponibilidad de tiempo para jugar y estadísticas</b><br/><br/>
					<b>Crea equipos, añade miembros y busca jugadores!</b><br/><br/>
					<b>Consulta canchas disponibles para jugar!</b>
				</p>
        <p className="lead">
          <Link to='/login' >
          	<button className="btn btn-lg btn-success idx-btn">Ingresa</button></Link>
		   		<Link to='/register'>
		   			<button className="btn btn-lg idx-btn">Registrate</button></Link>
        </p>
      </div>
     </div>


      <section className="cont_3 text-center">

      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="features-icons">

                 <img className="logo1" src={require('../imagenes/thinking.png')} />

            </div>

              <h3>Facil de usar</h3>
              <p className="lead mb-0">intuitivo y atractivo a la vista lo que permite al usuario un facil entendimiento!</p>
              <br/>
          </div>

          <div className="col-lg-4">
              <div className="features-icons">

                 <img className="logo1" src={require('../imagenes/phone.png')} />

              </div>
              <h3>Responsive</h3>
              <p className="lead mb-0">permite a los usuarios acceder desde distintos dispositivos!</p>
              <br/>

          </div>
          <div className="col-lg-4">
            <div className="features-icons">

                 <img className="logo1" src={require('../imagenes/users.png')} />

              </div>
              <h3>Para todos los gustos</h3>
              <p className="lead mb-0">Para distintos usuarios que buscan divertirse en un partido casual o un torneo con recompensa!</p>
              <br/>

        </div>
        </div>
      </div>
    </section>

    <div className= 'Footerfont'>

    </div>

</div>
    )
  }

}
