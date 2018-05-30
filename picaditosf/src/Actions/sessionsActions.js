import * as types from './actionTypes';  
import sessionApi from '../Auth/sessionApi';
import swal from 'sweetalert2'

export function loginSuccess() {  
  return {type: types.LOG_IN_SUCCESS}
}
export function logoutUser(){
	sessionStorage.removeItem('jwt');
	sessionStorage.removeItem('user');
	return {type: types.LOG_OUT}
}
export function loginUser(credentials) {  
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      //console.log("chacRES",response);
      //debugger;
      sessionStorage.setItem('jwt', response.jwt);
      sessionStorage.setItem('user',JSON.stringify(response.user));
      console.log("response_jwt",response.jwt)
      console.log("response_user",response.user)
      
      if (response.jwt==undefined){
        dispatch(logoutUser());
        swal(
          'usuario o contraseña invalidos',
          'intentalo de nuevo',
          'warning'
        ) 
      }else{
        dispatch(loginSuccess()); 
        swal(
    			"Ha ingresado correctamente",
    			"¡Bienvenido!",
    			"success"
    			).then((value) => {
    				window.location.reload()
    		})
      }
    }).catch(error => {
      throw(error);
    });
  };
}