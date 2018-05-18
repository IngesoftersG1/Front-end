import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/styles.css'
import Uploadfile from '../../Upload/Uploadfile.js'
import Example from '../Loading/logo'
import Userchange from './Funciones'


export default class Edit extends React.Component {
  state = {
    isLoading: true
  
  	
  }

  componentDidMount() {
   
        setTimeout(() => this.setState({ isLoading: false }), 2000);
    
  }
   
 render() {
    if(this.state.isLoading){ 
    return (<div>
    
        {Example}
    
        </div>); // render the loading component
    }
  	 	
  	 	
    return (
    	
<div>    

<div className="cont_2">
  
  	<div className="row">
  		<div class="col-sm-2">
  		</div>
  		<div class="col-sm-8">
  			<div class = "acco" id="accordion">
				  <div className="card">
				    <div className="card-header" id="headingOne">
				      <h5 className="mb-0">
				        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
				         	Avatar
				        </button>
				      </h5>
				    </div>

				    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
				      <div className="card-body">
				      	<Uploadfile />
				      	
					    </div>
				    </div>
				  </div>
				  <div className="card">
				    <div className="card-header" id="headingTwo">
				      <h5 className="mb-0">
				        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
				          Cambiar Nombre
				        </button>
				      </h5>
				    </div>
				    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
				      <div className="card-body">
								<label htmlFor="psw">Nombre de usuario</label>
								<input placeholder="Enter Username" 
									name="user" 
									type='text' 
									className="form-control"
									required/>

								<label htmlFor="psw">Nombre</label>
								<input placeholder="Enter firstname" 
									name="firstname" 
									type='text' 
									className="form-control" 
									required/>
								
								<button onClick={Userchange}>Actualizar perfil</button>
								
									
				      </div>
				    </div>
				  </div>
				  <div className="card">
				    <div className="card-header" id="headingThree">
				      <h5 className="mb-0">
				        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
				          Cambiar Contraseña
				        </button>
				      </h5>
				    </div>
				    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
				      <div className="card-body">
				      	<label htmlFor="psw">Contraseña</label>
								<input placeholder="Enter password" 
									name="password" 
									type='password' 
									className="form-control" 
									required/>

								<label htmlFor="psw">Confirmar Contraseña</label>
								<input placeholder="Enter password" 
									name="passwordConf" 
									type='password' 
									className="form-control" 
									required/>
									
							<form className="form1" onSubmit={this.onSubmit}>
							<button type="submit" className="btn btn-lg btn-primary btn-block">Actualizar Contraseña</button>
							</form> 			
				      </div>
				    </div>
				  </div>
				</div>
  		</div>
  		
  	</div>
	</div>

	</div>   

    	
      
    )
  }
}



