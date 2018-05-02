import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
const BOGOTA_COOR = {lat: 4.63, lng: -74.15};
const BALLICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAbFBMVEX///8AAAD8/PzKysr19fXk5OTw8PBdXV3V1dXc3NydnZ1ycnIGBgbh4eFCQkK9vb21tbUxMTGrq6tHR0c2NjaRkZE7OztPT08ZGRnp6emJiYkoKCiDg4NqamrExMS7u7ukpKRhYWF6enofHx/rWe9gAAAA3klEQVQokbVR2XKDMAzUGhNfkBpMuEIJSf//HyM7M8FteWw1Y2usY7UrE/2Ple1yOggLH4CFSGkhvmekH/tFbw3QffzsMnw0AC/z6Gnb5ugnpWeuyMdxaXQRyBvrMlrAtSayXew747JnvvDYdAioeIYcYd+JNQwRhsfjbu58t28CiZjgkLLTVDdu3jWVfJpeIT3qnPbgqWCIc1I5leWushmHW9xEUqleEpK1FaqEw6y0Q5WtbkUSscIua48iHxSun6Z4dLHAuTxB2pDkagaVv3bNNvft5ejzSOij6B/ZE5pQCQgxv+/+AAAAAElFTkSuQmCC"
const style =  {width: '700px', height: '500px'}

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {canchas: [{lat: 4.674, lng: -74.113},{lat: 4.574, lng: -74.013},{lat: 4.624, lng: -74.173}]}
    }
    
    render() {
        return (
         <Map google={this.props.google} 
            style={style}
            initialCenter={BOGOTA_COOR}
            zoom={12}>
            
            <Marker
                title={'Cancha1'}
                name={'Cancha'}
                position={{lat: 4.624, lng: -74.063}} 
                icon={BALLICON}/>
                
            { this.state.canchas.map(cancha =>
        		(<Marker
                title={'Canchas'}
                name={'Cancha'}
                position={cancha} 
                icon={BALLICON}/>)
        	)}

            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                </div>
            </InfoWindow>
          </Map>
        );
      }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyCr5Urf82ku6TbIVfrvhTxmlgHdlYOjlmw")
})(MapContainer)

//https://www.npmjs.com/package/google-maps-react