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
					Registrate como jugador para obtener calificación de otros usuarios, compartir disponibilidad de tiempo para jugar y estadísticas<br/>
					Crea equipos, añade miembros y buscar jugadores.<br/>
					Consulta canchas disponibles para jugar</p>
        <p className="lead">
          <Link to='/login' >
          	<button className="btn btn-lg btn-secondary">Login</button></Link>	
		   		<Link to='/register'>
		   			<button className="btn btn-lg btn-secondary">Registro</button></Link>
        </p>
      </div>
     </div>
     
     
      <section class="cont_3 text-center">
      
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="features-icons">

                 <img className="logo1" src={require('../imagenes/thinking.png')} />
                 
            </div>  
            
              <h3>Facil de usar</h3>
              <p class="lead mb-0">intuitivo y atractivo a la vista lo que permite al usuario un facil entendimiento!</p>
              <br/>
          </div>
          
          <div class="col-lg-4">
              <div class="features-icons">

                 <img className="logo1" src={require('../imagenes/phone.png')} />
                 
              </div>  
              <h3>Responsive</h3>
              <p class="lead mb-0">permite a los usuarios acceder desde distintos dispositivos!</p>
              <br/>
            
          </div>
          <div class="col-lg-4">
            <div class="features-icons">

                 <img className="logo1" src={require('../imagenes/users.png')} />
                 
              </div>  
              <h3>Para todos los gustos</h3>
              <p class="lead mb-0">Para distintos usuarios que buscan divertirse en un partido casual o un torneo con recompensa!</p>
              <br/>
            
        </div>
        </div>
      </div>
    </section>
    
    <div class = 'Footerfont'> 
    
    </div>
      
</div>

)

export default Inicio