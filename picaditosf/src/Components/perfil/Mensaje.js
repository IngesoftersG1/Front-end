import React,{ Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../styles/styles.css'

//fecha , contenido , usuario_2_name ,user_id , asunto 
// The Roster component matches one of two different routes
// depending on the full pathname

function getfecha () {
  
  	var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();

		if(dd<10) {
    dd = '0'+dd
		} 

		if(mm<10) {
    mm = '0'+mm
		} 

		today = mm + '/' + dd + '/' + yyyy;
  
  	 this.setState({ fecha: 'today' });
  	 
  }


class mensaje extends Component { 
	constructor(props){
    super(props);
    
    this.state = {
      fecha: '2014-04-04',
      contenido: '',
      usuario_2_name: '',
      user_id:'Malphite',
      asunto:''
    }
    
    this.onSubmit = this.onSubmit.bind(this);
  }
  
	
	createMessage(){
	 
		const info = JSON.stringify(this.state)
		console.log("json",info)
		const request = new Request(`https://picaditos-dehormazah.c9users.io/mensajes`, {
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
    	}else{
    		var msg = "No se pudo enviar el mensaje "
    		alert(msg)
    	}
   })
    
    //
    console.log(this.state)
  }
  
	render() {
		return (
			<div className="text-center">
				<div className="cont_1">
					<h1>Nuevo Mensaje</h1>
					<form className="form1" onSubmit={this.onSubmit}>
						<label htmlFor="name">Destinatario</label>
						<input placeholder="Example usuario" 
							name="usuario_2_name" 
		          type='eusuario_2_name' 
		          onChange={event => this.setState({usuario_2_name: event.target.value})}
		          value={this.state.usuario_2_name}
							className="form-control" 
							required/>

						<label htmlFor="psw">Asunto</label>
						<input placeholder="emmm no se" 
							name="asunto" 
							type='text' 
		          onChange={event => this.setState({asunto: event.target.value})}
		          value={this.state.asunto}
							className="form-control"
							required/>

						<label htmlFor="psw">Contenido</label>
						<textarea rows="5" placeholder="Hola soy un mensaje"
							name="contenido" 
							type='text' 
		          onChange={event => this.setState({contenido: event.target.value})}
		          value={this.state.contenido}
							className="form-control" required    />
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

export default mensaje