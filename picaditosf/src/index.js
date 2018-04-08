import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './Store/configureStore'
import App from './App';
import './index.css';


const store = configureStore();

render(
	<Provider store={store}>
	  <BrowserRouter>
	    <App />   
	  </BrowserRouter>
	</Provider>
, document.getElementById('root'));

