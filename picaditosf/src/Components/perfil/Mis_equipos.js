import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
var a;
/*
{
this.state.eventos.map(evento => {evento[0].title})	
}
*/
export default class Misequipos extends Component {
  state = {
    eventos: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users `)
      .then(res => {
        const eventos = res.data;
      	const b = eventos[0].name;
        
        this.setState({ eventos });
        a=JSON.stringify(b)
        
        console.log(a)
       
      })
  }
   
  

 render() {
  	
    return (
    	
<div>    



{ this.state.eventos.map(evento =>	
	 <div className="cont_2">
		<div className="container"> 	
		<div className="row align-items-start"> 
		  	<div className="col-md-2">
		  		<img src={require('../imagenes/team.jpg')} className="img-responsive profile-img"/>
		  	</div>
		  	
		  	<div className="col-md-8">
		  		<h1>
		  		 {evento.name}
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
  
  
  
 
  
   
	
		

	</div>   

    	
      
    )
  }
}


