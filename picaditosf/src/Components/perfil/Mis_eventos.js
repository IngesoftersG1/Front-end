import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo'

/*
{
this.state.eventos.map(evento => {evento[0].title})
}
*/
export default class Miseventos extends Component {
  state = {
    eventos: [], isLoading: true
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/torneos/my_tournaments`, {
    params: {
    user_name:'Vladimir'
  }
})

      .then(res => {
        const eventos = res.data;
        setTimeout(() => this.setState({ isLoading: false }), 2000);
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



{ this.state.eventos.map(evento =>
	 <div className="cont_2">
		<div className="container">
		<div className="row align-items-start">
		  	<div className="col-md-2">
		  		<img src={require('../../imagenes/team.jpg')} className="img-responsive profile-img"/>
		  	</div>

		  	<div className="col-md-8">
		  		<h1>
		  		 {evento.title}
		  	    </h1>

		  		<h4>
		  		 {evento.body}
		  		</h4>
		  	</div>

		  	<div className="col-md-2 " >

		  		   <button className="btn">Ver Informacion</button>

		  	</div>
		</div>
		</div>
		</div>
		)}

	</div>



    )
  }
}
