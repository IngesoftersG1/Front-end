import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Example from '../Loading/logo'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import * as consts from '../../consts';

const BOGOTA_COOR = {lat: 4.63, lng: -74.15};
const BALLICON = "https://cdn0.iconfinder.com/data/icons/customicondesign-office7-shadow-png/32/Sport-football-pitch.png"
const style =  {width: '85%', height: '60%', 'max-width': '720px', position: 'relative'}


export class MapContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},
          isLoading: true,
          info: [],
          canchas: [],
          canchas_nf: [],
          userlat: 4.63,
          userlng:-74.15
      }
      const setState = this.setState.bind(this)
      this.setcanchasstate = this.setcanchasstate.bind(this)
      this.onMarkerClick = this.onMarkerClick.bind(this)
      this.onMapClicked = this.onMapClicked.bind(this)
      this.getuserGeolocation = this.getuserGeolocation.bind(this)
      this.filterDistance = this.filterDistance.bind(this)
      this.filterPrice = this.filterPrice.bind(this)
    }

    states = {
      precios: [],
      calificaciones: [],
      userlat: 4.63,
      userlng:-74.15
    }
    
    componentDidMount() {
      console.log("props", this.props);/**/
/**/  axios.get(consts.SERVER_URL+`canchas `)
      .then(res => {
        const canchas = res.data;
      	//const b = eventos[0].name;
        this.setState({ canchas });
        this.setState({ canchas_nf: canchas });
        for (var i=0;i<canchas.length;i++){
            this.setcanchasstate(canchas[i])
        }
        setTimeout(() => this.setState({ isLoading: false }),1000);
      })
      if (!this.state.isLoading){
        this.getuserGeolocation();
      }
    }
    
    componentWillReceiveProps(nextProps) {
      console.log("receive",nextProps)
      this.filterPrice(nextProps)
      this.filterCalification(nextProps)
      //this.filterDistance(nextProps)
    }
    
    filterDistance(props) {
      let lat = this.state.canchas[0].ubicacion.calle_principal
      let lng = this.state.canchas[0].ubicacion.calle_secundaria
      console.log("state",this.state)
      fetch("https://maps.googleapis.com/maps/api/distancematrix/json?origins="+
        this.state.userlat+","+this.state.userlng+"&destinations="+lat+
        ","+lng+"&AIzaSyAZJWozZvYIoVgrLu9RnQE-oYW-8PVd_cE", {mode: 'no-cors'})
      .then(function(res){
        console.log("google",res)
      })
    }
    
    filterPrice (props){
      let newcanchas = []
      let oldcanchas = this.state.canchas_nf
      for (var i=0;i<oldcanchas.length-1;i++){
        if(oldcanchas[i].precio<= props.price){
          newcanchas.push(oldcanchas[i])
        }
      }      
      console.log("newcanchas",newcanchas)
      this.setState({canchas:newcanchas})
    }
    
    filterCalification (props){
      let newcanchas = []
      let oldcanchas = this.state.canchas_nf
      for (var i=0;i<oldcanchas.length-1;i++){
        if((oldcanchas[i].calificacion >= props.cal)&&(oldcanchas[i].precio<= props.price)){
          newcanchas.push(oldcanchas[i])
        }
      }      
      console.log("newcanchas",newcanchas)
      this.setState({canchas:newcanchas})
    }
    
    getuserGeolocation(){
      let userlat = null
      let userlng = null
      console.log("if", navigator.geolocation)
      navigator.geolocation.getCurrentPosition(function(objPosition)
  		{
  		  userlat = objPosition.coords.longitude
  		  userlng = objPosition.coords.latitude
        
  		}, function(objPositionError)
  		{
  			switch (objPositionError.code)
  			{
  				case objPositionError.PERMISSION_DENIED:
  					console.log("No se ha permitido el acceso a la posición del usuario.");
  				break;
  				case objPositionError.POSITION_UNAVAILABLE:
  					console.log("No se ha podido acceder a la información de su posición.");
  				break;
  				case objPositionError.TIMEOUT:
  					console.log("El servicio ha tardado demasiado tiempo en responder.");
  				break;
  				default:
  					console.log("Error desconocido.");
  			}
  			//window.location.refresh
  		}, {
        enableHighAccuracy: true,
        timeout: 25000,
        maximumAge: 0
  		});
  		console.log("lat", userlat)
      console.log("long", userlng)
  		this.setState({userlat})
  		this.setState({userlng})
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
