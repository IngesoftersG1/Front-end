import * as types from './actionTypes';  
import sessionApi from '../Auth/sessionApi';
import swal from 'sweetalert2'

export function loginSuccess() {  
  return {type: types.LOG_IN_SUCCESS}
}
export function logoutUser(){
	sessionStorage.removeItem('jwt');
	return {type: types.LOG_OUT}
}
export function loginUser(credentials) {  
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      console.log("chacRES",response);
      //debugger;
      sessionStorage.setItem('jwt', response.jwt);
      console.log("response_jwt",response.jwt)
      if (response.jwt==undefined){
        dispatch(logoutUser());
        swal(
          'Uusuario o contraseña invalidos',
          'You clicked the button!',
          'success'
        ) 
      }else{
        dispatch(loginSuccess()); 
        //window.location.reload();
        swal(
          'Sucessfull!',
          'You clicked the button!',
          'success'
          ) 
      }
    }).catch(error => {
      throw(error);
    });
  };
}