import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Example from '../Loading/logo'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import * as consts from '../../consts';

const BOGOTA_COOR = {lat: 4.63, lng: -74.15};
const BALLICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAMAAADzN3VRAAAAbFBMVEX///8AAAD8/PzKysr19fXk5OTw8PBdXV3V1dXc3NydnZ1ycnIGBgbh4eFCQkK9vb21tbUxMTGrq6tHR0c2NjaRkZE7OztPT08ZGRnp6emJiYkoKCiDg4NqamrExMS7u7ukpKRhYWF6enofHx/rWe9gAAAA3klEQVQokbVR2XKDMAzUGhNfkBpMuEIJSf//HyM7M8FteWw1Y2usY7UrE/2Ple1yOggLH4CFSGkhvmekH/tFbw3QffzsMnw0AC/z6Gnb5ugnpWeuyMdxaXQRyBvrMlrAtSayXew747JnvvDYdAioeIYcYd+JNQwRhsfjbu58t28CiZjgkLLTVDdu3jWVfJpeIT3qnPbgqWCIc1I5leWushmHW9xEUqleEpK1FaqEw6y0Q5WtbkUSscIua48iHxSun6Z4dLHAuTxB2pDkagaVv3bNNvft5ejzSOij6B/ZE5pQCQgxv+/+AAAAAElFTkSuQmCC"
const style =  {width: '700px', height: '500px'}

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            isLoading: true,
            info: [],
            canchas: []
        }
        const setState = this.setState.bind(this)
        this.setcanchasstate = this.setcanchasstate.bind(this)
        this.onMarkerClick = this.onMarkerClick.bind(this)
        this.onMapClicked = this.onMapClicked.bind(this)
    }

    states = {
        precios: [],
        calificaciones: []
    }
      componentDidMount() {
        axios.get(consts.SERVER_URL+`canchas `)
          .then(res => {
            const canchas = res.data;
          	//const b = eventos[0].name;
            this.setState({ canchas });
            for (var i=0;i<canchas.length;i++){
                this.setcanchasstate(canchas[i])
            }
            console.log(this.state)
            setTimeout(() => this.setState({ isLoading: false }), 1000);
          })
      }

      setcanchasstate(cancha){
        //this.state.info[cancha.nombre]={precio: cancha.precio}
        this.states.precios[cancha.nombre]=cancha.precio
        this.states.calificaciones[cancha.nombre]=cancha.calificacion
      }

      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });

      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };


    render() {
        if(this.state.isLoading){
            return (<div>

                {Example}

                </div>); // render the loading component
            }

        return (
         <Map google={this.props.google}
            onClick={this.onMapClicked}
            style={style}
            initialCenter={BOGOTA_COOR}
            zoom={12}>
            {/*
            <Marker
                title={'Cancha1'}
                name={'Cancha'}
                onClick={this.onMarkerClick}
                position={{lat: 4.624, lng: -74.063}}
                icon={BALLICON}/>
            */}

            { this.state.canchas.map(cancha =>
        		(<Marker
        		onClick={this.onMarkerClick}
                title={cancha.nombre}
                name={cancha.nombre}
                position={{lat: cancha.ubicacion.calle_principal, lng: cancha.ubicacion.calle_secundaria}}
                icon={BALLICON}/>
                )
        	)}

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
                <div>
                  <h2>{this.state.selectedPlace.name}</h2>
                  <p>{'Precio alquiler: '+this.states.precios[this.state.selectedPlace.name]}</p>
                  <p>{'Calificación: '+this.states.calificaciones[this.state.selectedPlace.name]}</p>
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
