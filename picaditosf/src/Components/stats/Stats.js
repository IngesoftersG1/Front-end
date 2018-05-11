import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo'
import '../../styles/styles.css'
import BubbleChart from '@weknow/react-bubble-chart-d3';
import session from '../../Reducers/sessionReducer';
import * as consts from '../../consts';

export default class Stats extends React.Component {
  state = {
    estadisticas: [], isLoading: true
  }

  componentDidMount() {
    axios.get(consts.SERVER_URL+`estadisticas/my_stats`, {
    params: {
    user_name: JSON.parse(sessionStorage.user).user_name+""
  }
})
      .then(res => {
        console.log(JSON.parse(sessionStorage.user).user_name);
        const estadisticas = res.data;
      	console.log(estadisticas)
        this.setState({ estadisticas });

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
{ this.state.estadisticas.map(estadistica=>

            <div className="bubble">
            <h1 className="title-stats"> Este es tu registro en Picaditos! </h1>



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
    { label: 'PARTIDOS GANADOS', value: estadistica[0] , color: '#1aff1a'},
    { label: 'PARTIDOS EMPATADOS', value: estadistica[2], color: '#ff751a'},
    { label: 'PARTIDOS PERDIDOS', value: estadistica[1], color:'#ff4d4d' },
    { label: 'GOLES ANOTADOS', value: estadistica[3], color:'#1affd1' },
    { label: 'PUNTOS TOTALES', value: (estadistica[0]*3+estadistica[2]), color:'#0073e6' },
    { label: 'PROM. DE GOLES/JUEGO', value: (estadistica[3]/(estadistica[0]+estadistica[1]+estadistica[2])).toFixed(1), color: '#cc99ff' },
    { label: 'PARTIDOS JUGADOS', value: (estadistica[0]+estadistica[1]+estadistica[2]), color:'#ffff4d' },

  ]}
/>

            </div>
          )}
              </center>
      );




  }
}
