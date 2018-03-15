import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Landing</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/perfil'>perfil</Link></li>
        <li><Link to='/torneo'>torneo</Link></li>
        <li><Link to='/equipos'>equipos</Link></li>
        <li><Link to='/equipo'>equipos</Link></li>
        <li><Link to='/BuscarEquip'>Busqueda equipos</Link></li>
        <li><Link to='/BuscarEvento'>Busqueda eventos</Link></li>
        <li><Link to='/BuscarPartido'>Busqueda partidos</Link></li>
        <li><Link to='/Estadisticasusuario'>estadisticas</Link></li>
        <li><Link to='/perfil/Info-usuario'>infousuario</Link></li>
        <li><Link to='/Misequipos'>mis equipos</Link></li>
        <li><Link to='/Miseventos'>mis eventos</Link></li>
        <li><Link to='/Mispartidos'>mis partidos</Link></li>
        <li><Link to='/Configuracion'>configuracion</Link></li>
        <li><Link to='/eventos'>eventos</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header