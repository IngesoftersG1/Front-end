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
        <li><Link to='/canchas'>canchas</Link></li>
       
      </ul>
    </nav>
  </header>
)

export default Header