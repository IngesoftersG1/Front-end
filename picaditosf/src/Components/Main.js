import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import MyPdfViewer from './PDF/pdfview'

import BuscarEvento from './eventos/BuscarEvento'
import BuscarPartido from './BuscarPartido'
import Estadisticasusuario  from './eventos/Estadisticasusuario'
import Loading from './Loading/Loading'
import Infousuario from './Info-usuario'

import Example from './Loading/logo'
import Bandeja from './perfil/Bandeja'
import Eventos from './eventos/Eventos'

import Misequipos from './perfil/Mis_equipos'
import Miseventos from './perfil/Mis_equipos'
import Mispartidos from './perfil/Mis_equipos'
import Usuario from './perfil/Usuario'


import Landing from './Landing'
import Register from './Register'
import Login from './Login'
import Canchas from './canchas/Canchas'

import Perfil from './perfil/Perfil'
import Configuracion from './perfil/Configuracion'
import Edit from './perfil/Edit'

import UnderConstruction from './UnderConstruction'

import Equipos from './equipos/Equipos.js'
import Equipo from './equipos/Equipo.js'
import BuscarEquipo from './equipos/BuscarEquipo'

import Torneo from './eventos/Torneo'
import Inicio from './Inicio'
import Lostpass from './Lostpass'
import Mensajes from './perfil/Mensaje'
import auth from './auth'
import geteventlist from './geteventlist'
import CrearE from './equipos/CrearEquipo.js'
import CrearEv from './eventos/CrearEvento.js'

import Stats from './stats/Stats'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
 <main>
    <Switch>
      <Route exact path='/Landing' component={Landing}/>
      <Route exact path='/geteventlist' component={geteventlist}/>
      <Route exact path='/' render={()=>(
          !!sessionStorage.jwt ? (<Redirect to='/perfil' />) : (<Inicio />)
      )}/>
      <Route exact path='/register'  render={()=>(
          !!sessionStorage.jwt ? (<Redirect to='/perfil' />) : (<Register />)
      )}/>
      <Route exact path='/login' render={()=>(
          !!sessionStorage.jwt ? (<Redirect to='/perfil' />) : (<Login />)
      )}/>
      <Route exact path='/createE' render={()=>(
          !!sessionStorage.jwt ? (<CrearE />):(<Redirect to='/perfil' />)
      )}/>
      <Route exact path='/createEv' render={()=>(
          !!sessionStorage.jwt ? (<CrearEv />):(<Redirect to='/perfil' />)
      )}/>

      <Route path='/canchas' component={Canchas}/>

      {/*<Route path='/equipo' render={()=>(
          !!sessionStorage.jwt ? (<Equipo />) : (<Redirect to='/login' />)

      )}/>
      */}
      <Route path='/equipo/:id' component={Equipo}/>

      <Route exact path='/equipos' component={Equipos}/>

      <Route exact path='/perfil' render={()=>(
          !!sessionStorage.jwt ? (<Perfil />) : (<Redirect to='/' />)
      )}/>
      
      <Route exact path='/usuario/:id' component={Usuario}/>
      {/*<Route exact path='/usuario' render={()=>(
          !!sessionStorage.jwt ? (<Usuario />) : (<Redirect to='/' />)
      )}/>
      */}  
      <Route exact path='/editperfil' component={Edit}/>

      <Route exact path='/comingsoon' component={UnderConstruction}/>
      {/*
      <Route exact path='/editperfil' render={()=>(
          !!sessionStorage.jwt ? (<Edit />) : (<Redirect to='/' />)
      )}/>

      */}

      <Route exact path='/statistics' component={Stats}/>


      <Route path='/eventos' component={Eventos}/>
      <Route path='/Torneo/:id' component={Torneo}/>
      {/*
      <Route path='/Torneo' render={()=>(
          !!sessionStorage.jwt ? (<Torneo />) : (<Redirect to='/login' />)
      )}/>
        */}
      <Route path='/BuscarEquipo' component={BuscarEquipo}/>
      <Route path='/BuscarEvento' component={BuscarEvento}/>
      <Route path='/BuscarPartido' component={BuscarPartido}/>

      <Route path='/Estadisticasusuario' render={()=>(
          !!sessionStorage.jwt ? (<Redirect to='/login' />) : (<Estadisticasusuario />)
      )}/>

      <Route exact path='/Info-usuario' component={Infousuario}/>


      <Route exact path='/Misequipos' render={()=>(
          !!sessionStorage.jwt ? (<Misequipos />): (<Redirect to='/login' />)
      )}/>

      <Route exact path='/Miseventos' render={()=>(
          !!sessionStorage.jwt ? (<Miseventos />) : (<Redirect to='/login' />)
      )}/>

      <Route exact path='/Mispartidos' render={()=>(
          !!sessionStorage.jwt ? (<Mispartidos />) : (<Redirect to='/login' />)
      )}/>



       <Route exact path='/mensajes' render={()=>(
           !!sessionStorage.jwt ? (<Mensajes />) : (<Redirect to='/login' />)
       )}/>

       <Route exact path='/bandeja' render={()=>(
           !!sessionStorage.jwt ? (<Bandeja />) : (<Redirect to='/login' />)
       )}/>

      <Route path='/pdf' component={MyPdfViewer}/>

      {/*<Route path='/pdf'  render={()=>(
          !!sessionStorage.jwt ? (<pdf />) : (<Redirect to='/login' />)
      )}/>*/}

      <Route path='/loading' component={Loading}/>
      <Route path='/L' />

      <Route exact path='/Lostpass' component={Lostpass}/>
      <Route exact path='/token' />
      <Route exact path='/auth' component={auth}/>

    </Switch>
  </main>
)

export default Main
