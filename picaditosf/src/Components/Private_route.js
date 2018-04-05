import React from 'react';  
import { Redirect, Route } from 'react-router-dom';
import Login from './Login'
var a = true;

const PrivateRoute = ({ component: Component, ...rest }) => (  
  <Route {...rest} render={props => (
  
  
  //  Login.getToken() !== null ? (
    a == true ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
        }}
      />
    )
  )} />
);

export default PrivateRoute;  
