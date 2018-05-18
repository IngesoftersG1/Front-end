import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo'
import * as consts from '../../consts';

var a;
/*
{
this.state.eventos.map(evento => {evento[0].title})
}
*/
export default class BuscarEquipo extends Component {
  state = {
    eventos: [], isLoading: false,
    nombre: ''
  }




 render() {
   if(this.state.isLoading){
   axios.get(consts.SERVER_URL+`equipos/my_team`, {
   params: {
   user_name:this.state.nombre
   }
   })
     .then(res => {
       const eventos = res.data;
       console.log(res)
       this.setState({ eventos });
       this.setState({isLoading: true})
     })


    return (<div>

      { this.state.eventos.map(evento =>
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

                <h4>calificación</h4>
              </div>

              <div className="col-md-2 " >

                   <button className="btn">Ver Informacion</button>

              </div>
          </div>
          </div>
          </div>
          )}

        </div>); // render the loading component
    }


    return (

<div>

			<div className="text-center">
				<div className="cont_1">

					<h1>Buscar Equipo</h1>
					<form className="form1" onSubmit={this.onSubmit}>
				    <label htmlFor="psw">Nombre del Capitán del Equipo</label>
						<input placeholder="Enter name"
							nombre="nombre"
							type='text'
		                onChange={event => this.setState({nombre: event.target.value})}
		                value={this.state.nombre}
							className="form-control"
				        	required/>

				        <br/>


						<button onClick={() => this.setState({isLoading: true})} className="btn btn-lg btn-success btn-block">Buscar Equipo</button>
						<br/>
					</form>

					<div>
						<a href='/equipos'>
						<button className="btn btn-lg btn-success btn-block">Volver</button>
						</a>
					</div>
				</div>
			</div>
		)

	</div>



    )
  }
}
