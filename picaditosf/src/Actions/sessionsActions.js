import * as types from './actionTypes';  
import sessionApi from '../Auth/sessionApi';

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
      console.log("RES",response);
      //debugger;
      sessionStorage.setItem('jwt', response.jwt);
      console.log("jwt",response.jwt)
      if (response.jwt==undefined){
        dispatch(logoutUser()); 
      }else{
        dispatch(loginSuccess()); 
        window.location.reload();
      }
    }).catch(error => {
      throw(error);
    });
  };
}