import axios from 'axios';
/*
export default class sessionApi {
	static login(credentials) {
		let datasend = JSON.stringify({
			password: credentials.password,
			username: credentials.email
		})
		axios.post('https://jsonplaceholder.typicode.com/users', datasend)
			.then(response =>  {
				console.log(response);
				return response
			})
			.catch(error => {
				return error
    	})
	}
}
*/

class SessionApi {
  static login(credentials) {
    //debugger;
    const request = new Request(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      //body: JSON.stringify({auth: credentials})
      body: JSON.stringify({ "method" : "guru.test", "params" : [ "Guru" ], "id" : 123 })
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  } 
}

export default SessionApi;