import React from 'react';  
import { Redirect, Route } from 'react-router-dom';
import Login from './Login'
import Token from './Login'
var a = false;


const PrivateRoute = ({ component: Component, ...rest }) => (  
  <Route {...rest} render={props => (
  
  
  Token() !== null ? (
    
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