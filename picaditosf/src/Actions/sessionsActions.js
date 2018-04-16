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
      console.log(response);
      //sessionStorage.setItem('jwt', response.jwt);
      sessionStorage.setItem('jwt', response.id);
      dispatch(loginSuccess());
      window.location.reload();
    }).catch(error => {
      throw(error);
    });
  };
}