import React from 'react'
import '../styles/styles.css'
import * as consts from '../consts'
import session from '../Reducers/sessionReducer';
import swal from 'sweetalert2';


class Uploadfile extends React.Component {

	constructor(props) {
    super(props);
    this.state = {image: '',picture: ''};
    this.handleSubmit = this.handleSubmit.bind(this)
  }

	sendImageToController(file){
		console.log("payload",file)
		const imag = JSON.stringify({picture: file.picture,username:JSON.parse(sessionStorage.user).user_name});
		console.log("imag",imag)
	  fetch(consts.SERVER_URL+`/items`, {
	    headers: new Headers({
        'Content-Type': 'application/json'
      }),
	    method: 'POST',
	    body: imag
	  })
	  .then(response => response.json())
	  .then(imageFromController => {
	    console.log("img",imageFromController)
			swal(
				"Se ha actualizado su foto de perfil",
				"continue",
				"success"
				).then((value) => {
					window.location.href='/perfil'
			})
	    //this.setState({uploads: this.state.uploads.concat(imageFromController)})
	  })
	}

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    //console.log('handle uploading-', this.state.file);
    this.sendImageToController(this.state)
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        image: file,
        picture: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {picture} = this.state;
    let $imagePreview = null;
    if (picture) {
      $imagePreview = (<img src={picture} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="form-group" align="center">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="form-control-file btn"
            type="file"
            onChange={(e)=>this.handleImageChange(e)} />
          <div className="imgprev">
          	{$imagePreview}
        	</div>
          <button className="btn"
            type="submit"
            onClick={(e)=>this.handleSubmit(e)}>Subir Imagen</button>
        </form>
      </div>
    )
  }
}

export default Uploadfile
