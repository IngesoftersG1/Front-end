import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import * as sessionActions from 'redux'
import  '../styles/navstyles.css'

import session from '../Reducers/sessionReducer';

// The Header creates links that can be used to navigate
// between routes.
class Header extends React.Component {
  constructor(props){
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    this.props
  }


  test = event => {    
    event.preventDefault();    
    console.log(sessionStorage);
  }

  render () {
    /*this.props.logged_in*/
    if(true) {
      return (
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
                  <Link className="nav-link" to='/eventos'>Torneos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/equipos'>Equipos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/canchas'>Canchas</Link>
                </li>
              </ul>
              <form className="form-inline mt-2 mt-md-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>             
                <button onClick={this.test}>test</button> 
                <a href="#" className="btn">
                  <img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_search-128.png" width="25"/>
                </a>
              </form>
            </div>
          </nav>
        </header>
      );
    }else{
      <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-success">
            <Link className="navbar-brand" to='/'>Picaditos!</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </header>
    }
  }
}
/*
Header.propTypes = {  
  actions: PropTypes.object.isRequired
}*/

function mapStateToProps(state, ownProps) {  
  return {logged_in: state.session};
}

export default connect(mapStateToProps)(Header);  