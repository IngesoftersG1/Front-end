import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './Landing'
import Register from './Register'
import Login from './Login'
import Canchas from './Canchas'
import Perfil from './Perfil'
import Equipos from './Equipos'
import Equipo from './Equipo'
import Torneo from './Torneo'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>
      <Route path='/canchas' component={Canchas}/>
      <Route path='/equipo' component={Equipo}/>
      <Route path='/equipos' component={Equipos}/>
      <Route path='/perfil' component={Perfil}/>
      <Route path='/Torneo' component={Torneo}/>
    </Switch>
  </main>
)

export default Main