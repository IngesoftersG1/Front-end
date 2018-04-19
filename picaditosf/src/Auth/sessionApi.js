import axios from 'axios';
import swal from 'sweetalert2'


class SessionApi {
  static login(credentials) {
    //debugger;
    const request = new Request(`https://picaditos-dehormazah.c9users.io/user_token`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({auth: credentials})
    });

    return fetch(request).then(response => {
      return response.json();
      
    if(response.length!=0){  
    swal(
    'logeado!',
    'success'
    ) 
    }else{
    
    swal(
      {
    type: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href>Why do I have this issue?</a>',
    })  
      
    }
    
      
    }).catch(error => {
      return error;
    });
  } 
}

export default SessionApi;