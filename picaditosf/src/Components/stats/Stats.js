import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo'
import '../../styles/styles.css'
import BubbleChart from '@weknow/react-bubble-chart-d3';

export default class Stats extends React.Component {
  state = {
    eventos: [], isLoading: true
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/canchas`)
      .then(res => {
        const eventos = res.data;

        this.setState({ eventos });

        setTimeout(() => this.setState({ isLoading: false }), 2000);


      })
  }



 render() {
    if(this.state.isLoading){
    return (<div>

        {Example}

        </div>); // render the loading component
    }


    return (

<center>
            <div className="bubble">
            <h1 className="title-stats"> Este es tu historial en Picaditos! </h1>



              <BubbleChart
  graph= {{
    zoom: 1.05,
    offsetX: -0.05,
    offsetY: -0.01,
  }}
  width={1400}
  height={1150}
  showLegend={true} // optional value, pass false to disable the legend.
  legendPercentage={20} // number that represent the % of with that legend going to use.
  legendFont={{
        family: 'Arial',
        size: 20,
        color: 'white',
        weight: 'bold',
      }}
  valueFont={{
        family: 'Arial',
        size: 80,
        color: 'black',
        weight: 'bold',
      }}
  labelFont={{
        family: 'Arial',
        size: 150,
        color: 'black',
        weight: 'bold',
      }}
  data={[
    { label: 'PARTIDOS GANADOS', value: 10 , color: '#1aff1a'},
    { label: 'PARTIDOS EMPATADOS', value: 5, color: '#ff751a'},
    { label: 'PARTIDOS PERDIDOS', value: 3, color:'#ff4d4d' },
    { label: 'GOLES ANOTADOS', value: 6, color:'#1affd1' },
    { label: 'PUNTOS TOTALES', value: 15, color:'#0073e6' },
    { label: 'PROM. DE GOLES/JUEGO', value: 1.98, color: '#cc99ff' },
    { label: 'PARTIDOS JUGADOS', value: 12, color:'#ffff4d' },

  ]}
/>

            </div>
              </center>
      );




  }
}
