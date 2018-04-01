import React from 'react'
import { Switch, Route } from 'react-router-dom'

import BuscarEquip from './BuscarEquip'

import BuscarEvento from './BuscarEvento'
import BuscarPartido from './BuscarPartido'
import Estadisticasusuario  from './Estadisticasusuario'

import Infousuario from './Info-usuario'

import Eventos from './Eventos'

import Misequipos from './Mis_equipos'
import Miseventos from './Mis_equipos'
import Mispartidos from './Mis_equipos'


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

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/Landing' component={Landing}/>
      <Route exact path='/' component={Inicio}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/login' component={Login}/>
      <Route path='/canchas' component={Canchas}/>
      <Route path='/equipo' component={Equipo}/>
      <Route exact path='/equipos' component={Equipos}/>
      <Route exact path='/perfil' component={Perfil}/>
      <Route path='/eventos' component={Eventos}/>
      <Route path='/Torneo' component={Torneo}/>
      <Route path='/BuscarEquip' component={BuscarEquip}/>
      <Route path='/BuscarEvento' component={BuscarEvento}/>
      <Route path='/BuscarPartido' component={BuscarPartido}/>
      <Route path='/Estadisticasusuario' component={Estadisticasusuario}/>
      <Route exact path='/Info-usuario' component={Infousuario}/>
      <Route exact path='/Misequipos' component={Misequipos}/>
      <Route exact path='/Miseventos' component={Miseventos}/>
      <Route exact path='/Mispartidos' component={Mispartidos}/>
    </Switch>
  </main>
)

export default Main