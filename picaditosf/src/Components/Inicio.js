import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/styles.css'


const Inicio = () => (
	<div>
	<div className="text-center ">
	  	<div className="carousel slide" data-ride="carousel">
			  <div className="carousel-inner">
			    <div className="carousel-item active">
			      <img className="d-block" src={require('../imagenes/field2.jpg')} height="800px" alt="First slide"/>
			    </div>
			    <div className="carousel-item">
			      <img className="d-block" src={require('../imagenes/field3.jpg')} height="800px" alt="Second slide"/>
			    </div>
			    <div className="carousel-item">
			    	<img className="d-block" src={require('../imagenes/basket.jpg')} height="800px" alt="Third slide"/>
			    </div>
			  </div>
			</div>

      <div className="inner cont_1">
			  <img className="logopag" src={require('../imagenes/fireball.png')} />
        <h1>PICADITOS</h1>
        <p className="lead">
					<b>Regístrate como jugador para obtener la calificación de otros usuarios, comparte tu disponibilidad de tiempo para jugar y tus estadísticas.</b><br/><br/>
					<b>Crea equipos, añade miembros y busca jugadores!</b><br/><br/>
					<b>Consulta canchas disponibles para jugar!</b>
				</p>
        <p className="lead">
          <Link to='/login' >
          	<button className="btn btn-lg btn-success idx-btn">Ingresa</button></Link>
		   		<Link to='/register'>
		   			<button className="btn btn-lg idx-btn" id="register">Regístrate</button></Link>
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
              <p className="lead mb-0" id="gly1" >Descubre una interfaz amigable y fácil de usar!</p>
              <br/>
          </div>

          <div className="col-lg-4">
              <div className="features-icons">

                 <img className="logo1" src={require('../imagenes/phone.png')} />

              </div>
              <h3>Responsive</h3>
              <p className="lead mb-0" id="gly2">Picaditos te permite acceder desde distintos dispositivos!</p>
              <br/>

          </div>
          <div className="col-lg-4">
            <div className="features-icons">

                 <img className="logo1" src={require('../imagenes/users.png')} />

              </div>
              <h3>Para todos los gustos</h3>
              <p className="lead mb-0" id="gly3">La opción perfecta para usuarios que buscan divertirse en un partido casual o competir en un torneo con recompensas!</p>
              <br/>

        </div>
        </div>
      </div>
    </section>

    <div className= 'Footerfont'>

    </div>

</div>

)

export default Inicio
