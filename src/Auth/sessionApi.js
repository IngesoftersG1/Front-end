import axios from 'axios';
import swal from 'sweetalert2'
import * as consts from '../consts';

class SessionApi {
  static login(credentials) {

    const request = new Request(consts.SERVER_URL+`user_token`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    });

    return fetch(request).then(response => {
      console.log("resp1",response)
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default SessionApi;
