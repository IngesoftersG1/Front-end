import React from 'react'
import { Link } from 'react-router-dom'
import  '../styles/navstyles.css'
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-success">
      <Link className="navbar-brand" to='/'>Picaditos!</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to='/perfil'>Perfil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/torneo'>Torneo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/equipo'>Equipos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/canchas'>Canchas</Link>
          </li>
        </ul>
        <form className="form-inline mt-2 mt-md-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

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