import * as types from '../Actions/actionTypes';  

export default function sessionReducer(state = !!sessionStorage.jwt, action){
	switch(action.type){
		case types.LOG_IN_SUCCESS:
			//browserHistory.push('/')
			console.log("storageed",!!sessionStorage.jwt);
			//debugger
			return !!sessionStorage.jwt
		default:
			return state;
	}
}
