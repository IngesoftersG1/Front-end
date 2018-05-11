import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo';
import * as consts from '../../consts';
var a;
/*
{
this.state.eventos.map(evento => {evento[0].title})
}
*/
export default class BuscarEvento extends Component {
  state = {
    eventos: [], isLoading: true
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 2000);
    axios.get(consts.SERVER_URL+`equipos/my_team`, {
    params: {
    user_name:'Malphite'
  }
})
      .then(res => {
        const eventos = res.data;
      	console.log(res)
        this.setState({ eventos });
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

			<div className="text-center">
				<div className="cont_1">

					<h1>Buscar Equipo</h1>
					<form className="form1" onSubmit={this.onSubmit}>
				    <label htmlFor="psw">Nombre del Equipo</label>
						<input placeholder="Enter name"
							nombre="nombre"
							type='text'
		                onChange={event => this.setState({nombre: event.target.value})}
		                value={this.state.nombre}
							className="form-control"
				        	required/>

				        <br/>


						<button type="submit" className="btn btn-lg btn-success btn-block">Buscar Equipo</button>
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
