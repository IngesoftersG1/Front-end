
import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Example from './logo'
import ReactLoading from 'react-loading';

export default class Loading extends Component {
 
    state = {
    isLoading: true , ne: []
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 2000); // do your async call
  }

 
 render() {  
     
    if(this.state.isLoading){ 
    return (<div>
    
        {Example}
    
        </div>); // render the loading component
    }
        
        
    return( <div className="cont_2">
        <h1>hello world</h1>
        </div>);
        
        
 
}

}
 