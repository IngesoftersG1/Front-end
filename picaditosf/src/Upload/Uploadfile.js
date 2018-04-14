import React from 'react'


class Uploadfile extends React.Component {

	constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
    this.handleSubmit = this.handleSubmit.bind(this)
  }

	sendImageToController(file){
		console.log("payload",file)
	  fetch(`https://jsonplaceholder.typicode.com/posts`, {
	    headers: new Headers({
        'Content-Type': 'application/json'
      }), 
	    method: 'POST',
	    body: JSON.stringify(file)
	  })
	  .then(response => response.json())
	  .then(imageFromController => {
	    console.log(imageFromController)
	    //this.setState({uploads: this.state.uploads.concat(imageFromController)})
	  })
	}  

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file    
    //console.log('handle uploading-', this.state.file);
    this.sendImageToController(this.state.file)
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="form-group">
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