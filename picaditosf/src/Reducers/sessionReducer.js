import * as types from '../Actions/actionTypes';  

export default function sessionReducer(state = !!sessionStorage.jwt, action){
	switch(action.type){
		case types.LOG_IN_SUCCESS:
			//browserHistory.push('/')
			console.log(!!sessionStorage.jwt);
			return !!sessionStorage.jwt
		case types.LOG_OUT:			
			//browserHistory.push('/')
			return !!sessionStorage.jwt
		default:
			return state;
	}
}
