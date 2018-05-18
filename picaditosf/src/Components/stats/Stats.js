import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Example from '../Loading/logo'
import '../../styles/styles.css'
import BubbleChart from '@weknow/react-bubble-chart-d3';
import session from '../../Reducers/sessionReducer';
import * as consts from '../../consts';
import { ResponsivePie } from '@nivo/pie'

export default class Stats extends React.Component {

  constructor(props){
    super(props);
    this.state = {estadisticas: [], isLoading: true, num_usuarios: 0, num_equipos:0, num_torneos:0, num_canchas:0, num_canchas_dispo:0, num_anuncios:0, num_partidos:0};


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

      axios.get(consts.SERVER_URL+`users/num_users`, {

  })
        .then(res => {
         var num_users = res.data;
          console.log(num_users)
          this.setState({num_usuarios: num_users})

        })

        axios.get(consts.SERVER_URL+`anuncios/num_announces`, {

    })
          .then(res => {
            var num_anun = res.data;
            console.log(num_anun)
            this.setState({num_anuncios: num_anun})

          })

          axios.get(consts.SERVER_URL+`canchas/num_canchas`, {

      })
            .then(res => {
              var num_cancha = res.data;
              console.log(num_cancha)
              this.setState({num_canchas: num_cancha})

            })

          axios.get(consts.SERVER_URL+`canchas/num_canchas_dispo`, {

        })
            .then(res => {
            var num_cancha_dis = res.data;
            console.log(num_cancha_dis)
            this.setState({num_canchas_dispo: num_cancha_dis})
            })

            axios.get(consts.SERVER_URL+`equipos/num_equipos`, {

          })
              .then(res => {
              var num_equipo = res.data;
              console.log(num_equipo)
              this.setState({num_equipos: num_equipo})
              })

              axios.get(consts.SERVER_URL+`partidos/num_matches`, {

            })
                .then(res => {
                var num_partido = res.data;
                console.log(num_partido)
                this.setState({num_partidos: num_partido})
                })

                axios.get(consts.SERVER_URL+`torneos/num_tournaments`, {

              })
                  .then(res => {
                  var num_torneo = res.data;
                  console.log(num_torneo)
                  this.setState({num_torneos: num_torneo})
                  })
  }


 render() {
    if(this.state.isLoading){
    return (<div>

        {Example}

        </div>); // render the loading component
    }

    if (sessionStorage.user && JSON.parse(sessionStorage.user).admin) {

      return(

        <center>
        <div className="admin">
        <h1 className="title-stats"> Estadísticas generales en Picaditos! </h1>
        <ResponsivePie className="admin2"
          data={[
        {
          "id": "usuarios registrados",
          "label": "usuarios registrados",
          "value": this.state.num_usuarios,
          "color": "hsl(75, 70%, 50%)"
        },
        {
          "id": "anuncios publicados",
          "label": "anuncios publicados",
          "value": this.state.num_anuncios,
          "color": "hsl(75, 70%, 50%)"
        },
        {
          "id": "canchas totales",
          "label": "canchas totales",
          "value": this.state.num_canchas,
          "color": "hsl(75, 70%, 50%)"
        },
        {
          "id": "canchas disponibles",
          "label": "canchas disponibles",
          "value": this.state.num_canchas_dispo,
          "color": "hsl(75, 70%, 50%)"
        },
        {
          "id": "número de equipos",
          "label": "número de equipos",
          "value": this.state.num_equipos,
          "color": "hsl(75, 70%, 50%)"
        },
        {
          "id": "partidos jugados",
          "label": "partidos jugados",
          "value": this.state.num_partidos,
          "color": "hsl(75, 70%, 50%)"
        },
        {
          "id": "torneos en desarrollo",
          "label": "torneos en desarrollo",
          "value": this.state.num_torneos,
          "color": "hsl(75, 70%, 50%)"
        }

        ]}
          margin={{
              "top": 40,
              "right": 80,
              "bottom": 130,
              "left": 80
          }}
          innerRadius={0.15}

        padAngle={3}
        cornerRadius={21}
        colors="dark2"
        colorBy="id"
        borderWidth={2}
        borderColor="inherit:darker(0.6)"
        animate={true}
        motionStiffness={185}
        motionDamping={15}

      />
      
    </ div>
    </center>


   );
    }else{

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
}
