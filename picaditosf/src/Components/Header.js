import * as sessionActions from '../Actions/sessionsActions'
import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import  '../styles/navstyles.css'

import session from '../Reducers/sessionReducer';

// The Header creates links that can be used to navigate
// between routes.
class Header extends Component {
  constructor(props){
    super();
    this.logout = this.logout.bind(this);
  }

  logout (event) {
    event.preventDefault();
    this.props.actions.logoutUser();
    window.location.reload();
  }


  test = event => {
    event.preventDefault();
    console.log("sessionstorage",sessionStorage);
    console.log("session?",!!sessionStorage.jwt);
    console.log(this.props);
  }

  render () {
    /**/
    if(this.props.logged_in) {
      return (
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-success">
            <Link className="navbar-brand" to='/tablon'>Picaditos!</Link>
            <a className="test-btn" onClick={this.test}>test</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to='/perfil'>Perfil</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/eventos'>Torneos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/equipos'>Equipos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/canchas'>Canchas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/bandeja'>Mensajes</Link>
                </li>
              </ul>
              <form className="form-inline mt-2 mt-md-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                <a href="#" className="btn">
                  <img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_search-128.png" width="25"/>
                </a>
                <Link onClick={this.logout} className="nav-link" to="/">
                  <button className="btn btn-danger">Cerrar sesión</button></Link>
              </form>
            </div>
          </nav>
        </header>
      );
    }else{
      return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-success">
              <div className="col-md-6">
              <Link className="navbar-brand" to='/'>Picaditos!</Link>
              <Link className="navbar-brand" to='/tablon'>Anuncios</Link>
              <a className="test-btn" onClick={this.test}>test</a>
              </div>
              
              <div className="col-md-6" style={{textAlign:"right"}}>
        
              <Link className="nav-brand" to="/login">
                  <button className="btn btn-success" style={{marginRight:12}}>Inicia Sesion</button>
              </Link>
              
              
              
              
              <Link className="nav-brand" to="/register">
                <button className="btn ">Registrate</button>  
              </Link>
              </div>
              
              
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              
            </nav>
        </header>
      )
    }
  }
}
Header.propTypes={
  actions: PropTypes.object.isRequired
}
function mapStateToProps(state, ownProps) {
  return {
    logged_in: state.session
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
