import React,{ Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../styles/styles.css'
import session from '../../Reducers/sessionReducer';
import * as consts from '../../consts';

import swal from 'sweetalert2'
//fecha , contenido , usuario_2_name ,user_id , asunto
// The Roster component matches one of two different routes
// depending on the full pathname
class CrearCancha extends Component {
	constructor(props){
    super(props);

    this.state = {
      fecha: '2018-04-04',
      contenido: '',
      usuario_2_name: '',
      user_id: JSON.parse(sessionStorage.user).user_name,
      asunto:''
    }

    this.onSubmit = this.onSubmit.bind(this);
  }


	createMessage(){

		const info = JSON.stringify(this.state)
		console.log("json",info)
		const request = new Request(consts.SERVER_URL+`mensajes`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: info
    });

    return fetch(request).then(response => {
    	console.log("response",response);
      return response.json();
    })

    .catch(error => {
      return error;
    });
	}

  onSubmit(e){
	e.preventDefault();
    this.createMessage().then(res => {
    	console.log(res)
    	if (res.status==500){
    		var msg = "No se pudo enviar el mensaje "
    		alert(msg)
    	}else{
	    	swal(
				"Solicitud enviada correctamente",
				"continue",
				"success"
				).then((value) => {
					window.location.reload()
			})
    	}
   })

    //
    console.log(this.state)
  }

	render() {
		return (
			<div className="text-center">
				<div className="cont_1">
					<h1>Solicitar crear cancha</h1>
					<form className="form1" onSubmit={this.onSubmit}>
						<label htmlFor="disp">Disponibilidad</label>
						<input placeholder="Escriba la disponibilidad de la cancha(?)"
							name="disp"
		          onChange={event => this.setState({usuario_2_name: event.target.value})}
		          value={this.state.usuario_2_name}
							className="form-control"
							required/>
							
						<label htmlFor="cost">Precio</label>
						<input placeholder="Escriba el precio del alquiler de la cancha(?)"
							name="cost"
		          onChange={event => this.setState({usuario_2_name: event.target.value})}
		          value={this.state.usuario_2_name}
							className="form-control"
							required/>
						
						<label htmlFor="disp">Disponibilidad</label>
						<input placeholder="Escriba la disponibilidad de la cancha(?)"
							name="disp"
		          onChange={event => this.setState({usuario_2_name: event.target.value})}
		          value={this.state.usuario_2_name}
							className="form-control"
							required/>
							
						<label htmlFor="ub">Ubicación</label>
						<input placeholder="Escriba la dirreción de la cancha"
							name="ub"
		          onChange={event => this.setState({usuario_2_name: event.target.value})}
		          value={this.state.usuario_2_name}
							className="form-control"
							required/>

						<label htmlFor="psw">Mensaje</label>
						<textarea rows="5" placeholder="Escribe un mensaje de solicitud"
							name="contenido"
							type='text'
		          onChange={event => this.setState({contenido: event.target.value})}
		          value={this.state.contenido}
							className="form-control" />
                        <div>
                        <br/>
                        </div>
						<button type="submit" className="btn btn-lg btn-primary btn-block">Send</button>
					</form>
				</div>
			</div>
		)
	}
}

export default CrearCancha