import axios from 'axios';
import swal from 'sweetalert2'


class SessionApi {
  static login(credentials) {
    //debugger;
    const request = new Request(`https://back-end-proyect-daeperdomocr.c9users.io/user_token`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({auth: credentials})
    });

    return fetch(request).then(response => {
      console.log("chacresp1",response)
      return response.json();
    }).catch(error => {
      return error;
    });
  } 
}

export default SessionApi;