import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/styles.css'

const Edit = () => (
  <div className="cont_2">
  	<div className="row">
  		<div className="col-md-7">
  			<div id="accordion">
				  <div class="card">
				    <div class="card-header" id="headingOne">
				      <h5 class="mb-0">
				        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
				         	Avatar
				        </button>
				      </h5>
				    </div>

				    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
				      <div class="card-body">
								<form method="post" enctype="multipart/form-data">
								  <div>
								    <label for="profile_pic">Choose file to upload</label>
								    <input type="file" id="profile_pic" name="profile_pic"
								          accept=".jpg, .jpeg, .png"/>
								  </div>
								  <div>
								    <button>Submit</button>
								  </div>
								</form>
					    </div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="card-header" id="headingTwo">
				      <h5 class="mb-0">
				        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
				          Cambiar Nombre
				        </button>
				      </h5>
				    </div>
				    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
				      <div class="card-body">
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
				      </div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="card-header" id="headingThree">
				      <h5 class="mb-0">
				        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
				          Cambiar Contraseña
				        </button>
				      </h5>
				    </div>
				    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
				      <div class="card-body">
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
				      </div>
				    </div>
				  </div>
				</div>

				<form className="form1" onSubmit={this.onSubmit}>
					<button type="submit" className="btn btn-lg btn-primary btn-block">Actualizar perfil</button>
				</form>  	
  		</div>  		
  	</div>
	</div>
)

export default Edit