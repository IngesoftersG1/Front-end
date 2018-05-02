import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 

export class MapContainer extends Component {
render() {
    return (
     /*<Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>*/
      <div></div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCr5Urf82ku6TbIVfrvhTxmlgHdlYOjlmw")
})(MapContainer)
