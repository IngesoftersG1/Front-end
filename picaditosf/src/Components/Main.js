import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import BuscarEquip from './BuscarEquip'

import BuscarEvento from './BuscarEvento'
import BuscarPartido from './BuscarPartido'
import Estadisticasusuario  from './Estadisticasusuario'

import Infousuario from './Info-usuario'

import Eventos from './Eventos'

import Misequipos from './Mis_equipos'
import Miseventos from './Mis_equipos'
import Mispartidos from './Mis_equipos'

import PrivateRoute from './Private_route'
import Landing from './Landing'
import Register from './Register'
import Login from './Login'
import Canchas from './Canchas'
import Perfil from './Perfil'
import Equipos from './Equipos'
import Equipo from './Equipo'
import Torneo from './Torneo'
import Configuracion from './Configuracion'
import Inicio from './Inicio'
import Lostpass from './Lostpass'
import getteamlist from './getteamlist'
import auth from './auth'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (

  <main>
    <Switch>
      <Route exact path='/Landing' component={Landing}/>
      <Route exact path='/' render={()=>( 
          !!sessionStorage.jwt ? (<Redirect to='/perfil' />) : (<Inicio />)
      )}/>
      <Route exact path='/register'  render={()=>( 
          !!sessionStorage.jwt ? (<Redirect to='/perfil' />) : (<Register />)
      )}/>
      <Route exact path='/login' render={()=>( 
          !!sessionStorage.jwt ? (<Redirect to='/perfil' />) : (<Login />)
      )}/>
      <Route path='/canchas' component={Canchas}/>
      <PrivateRoute path='/equipo' component={Equipo}/>
      <Route exact path='/equipos' component={Equipos}/>
      <Route exact path='/perfil' render={()=>( 
          !!sessionStorage.jwt ? (<Perfil />) : (<Redirect to='/' />)
      )}/>    
      <Route path='/eventos' component={Eventos}/>
      <Route path='/Torneo' component={Torneo}/>
      <Route path='/BuscarEquip' component={BuscarEquip}/>
      <Route path='/BuscarEvento' component={BuscarEvento}/>
      <Route path='/BuscarPartido' component={BuscarPartido}/>
      <Route path='/Estadisticasusuario' component={Estadisticasusuario}/>
      <PrivateRoute exact path='/Info-usuario' component={Infousuario}/>
      <PrivateRoute exact path='/Misequipos' component={Misequipos}/>
      <PrivateRoute exact path='/Miseventos' component={Miseventos}/>
      <PrivateRoute exact path='/Mispartidos' component={Mispartidos}/>
      <Route path='/getteamlist' component={getteamlist}/>
      <Route exact path='/Lostpass' component={Lostpass}/>
      <Route exact path='/token' />
      <Route exact path='/auth' component={auth}/>
      
    </Switch>
  </main>
)

export default Main