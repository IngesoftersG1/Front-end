import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import MyPdfViewer from './PDF/pdfview'

import BuscarEvento from './eventos/BuscarEvento'
import BuscarPartido from './BuscarPartido'
import Estadisticasusuario  from './eventos/Estadisticasusuario'
import Loading from './Loading/Loading'
import Infousuario from './Info-usuario'

import Example from './Loading/logo'

import Eventos from './eventos/Eventos'

import Misequipos from './perfil/Mis_equipos'
import Miseventos from './perfil/Mis_equipos'
import Mispartidos from './perfil/Mis_equipos'

import Landing from './Landing'
import Register from './Register'
import Login from './Login'
import Canchas from './canchas/Canchas'

import Perfil from './perfil/Perfil'
import Configuracion from './perfil/Configuracion'
import Edit from './perfil/Edit'

import Equipos from './equipos/Equipos.js'
import Equipo from './equipos/Equipo.js'
import BuscarEquipo from './equipos/BuscarEquipo'

import Torneo from './eventos/Torneo'
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
      
      <Route path='/equipo' render={()=>( 
          !!sessionStorage.jwt ? (<Equipo />) : (<Redirect to='/login' />) 

      )}/>
      
      <Route exact path='/equipos' component={Equipos}/>
    {/* <Route exact path='/perfil' component={Perfil}/>*/}
      
      
      
      <Route exact path='/perfil' render={()=>( 
          !!sessionStorage.jwt ? (<Perfil />) : (<Redirect to='/' />)
      )}/>    
      
        
      <Route exact path='/editperfil' component={Edit}/>
      
      
      {/*
      <Route exact path='/editperfil' render={()=>( 
          !!sessionStorage.jwt ? (<Edit />) : (<Redirect to='/' />)
      )}/>
      
      */}
  



      <Route path='/eventos' component={Eventos}/>
      <Route path='/Torneo' render={()=>( 
          !!sessionStorage.jwt ? (<Torneo />) : (<Redirect to='/login' />) 
      )}/>
      
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
      
      
      <Route path='/pdf' component={MyPdfViewer}/>
      
      {/*<Route path='/pdf'  render={()=>( 
          !!sessionStorage.jwt ? (<pdf />) : (<Redirect to='/login' />) 
      )}/>*/}
      
      <Route path='/getteamlist' component={getteamlist}/>
      
      <Route path='/loading' component={Loading}/>
      <Route path='/L' component={Example}/>
      
      <Route exact path='/Lostpass' component={Lostpass}/>
      <Route exact path='/token' />
      <Route exact path='/auth' component={auth}/>
      
    </Switch>
  </main>
)

export default Main