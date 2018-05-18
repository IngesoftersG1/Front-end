import * as sessionActions from '../Actions/sessionsActions'
import React, { Component } from "react"
import * as consts from '../consts'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Route  , Link } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import  '../styles/navstyles.css'

import session from '../Reducers/sessionReducer';
//
import Perfil from './perfil/Perfil'
// The Header creates links that can be used to navigate
// between routes.
class Header extends Component {
  constructor(props){
    super();
    this.logout = this.logout.bind(this);
    this.num_mensajes = -1;
    this.state = { isLoading: true };
  }
  
  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 2000);

    if(this.props.logged_in){
    axios.get(consts.SERVER_URL+`users/1?`, {
  			params: {
				user_name: JSON.parse(sessionStorage.user).user_name
			}
		})
		.then(res => {
	  	const mes = [res.data];
			console.log('mess',mes)
			this.num_mensajes=mes[0].mensajes_sin_leer;
		})}
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

  
  showMessages(sinleer){
    console.log('sinleerparam',sinleer.sinleer)
    if (sinleer.sinleer>0){

      return <span style={{'font-weight':'bold','color':'white','background-color':'red','border-radius':'50%',padding:'2px 6px 2px 6px'}}>
              {sinleer.sinleer}</span>
    }
    return null
  }

  render () {
    /**/
    if(this.state.isLoading ){
      if(this.props.logged_in) {
      return (
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-success">

            
            <Link className="navbar-brand" to='/tablon'><img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/flame-32.png" width="25"/>  Picaditos!</Link>

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
                  <img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/magnifyingglass-256.png" width="30"/>
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

            
            <Link className="navbar-brand" to='/'><img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/flame-32.png" width="25"/>  Picaditos!</Link>

            <a className="test-btn" onClick={this.test}>test</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to='/tablon'>Anuncios</Link>
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
              </ul>
              <div className="form-inline mt-2 mt-md-0">
                <Link className="nav-link" to="/login">
                      <button className="btn btn-success">Inicia Sesion</button>
                  </Link>
                <Link className="nav-link" to="/register">
                    <button className="btn ">Registrate</button>  </Link>
              </div>
            </div>
          </nav>
        </header>
        
      )
    }
    }

    if(this.props.logged_in) {
      return (
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-success">


            <Link className="navbar-brand" to='/tablon'><img src={require('../imagenes/fireball.png')} width="25"/>  Picaditos!</Link>

            <a className="test-btn" onClick={this.test}>test</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" id="head1" to='/perfil'>Perfil</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="head1" to='/eventos'>Torneos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="head1" to='/equipos'>Equipos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="head1" to='/canchas'>Canchas</Link>
                </li>
                <li className="nav-item">

                  <Link className="nav-link" to='/bandeja'>Mensajes <this.showMessages sinleer={this.num_mensajes}  /></Link>

                </li>
              </ul>
              <form className="form-inline mt-2 mt-md-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                <a href="#" className="btn">
                  <img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/magnifyingglass-256.png" width="30"/>
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


            <Link className="navbar-brand" to='/'><img src={require('../imagenes/fireball.png')} width="25"/>  Picaditos!</Link>

            <a className="test-btn" onClick={this.test}>test</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" id="head1" to='/tablon'>Anuncios</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="head1" to='/eventos'>Torneos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="head1" to='/equipos'>Equipos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" id="head1" to='/canchas'>Canchas</Link>
                </li>
              </ul>
              <div className="form-inline mt-2 mt-md-0">
                <Link className="nav-link" id ="buttons" to="/login">
                      <button className="btn btn-success">Inicia Sesión</button>
                  </Link>
                <Link className="nav-link" id = "buttons" to="/register">
                    <button className="btn" id ="register">Regístrate</button>  </Link>
              </div>
            </div>
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
