import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import './styles/styles.css'

const App = () => (
  <div>
		<Main />
	 	<Header />
	 	<span className="backimg" onClick={()=>window.history.back()} >
      <img src="https://cdn4.iconfinder.com/data/icons/Ethereal_Icons_2/PNGs/Toolbar/Browser%20Toolbar/Back.png" width="42"/>
    </span>
    <footer className="footer">
      <div className="container">
      	<div className="text-center">
        	<span>2018. Ingesofters. Copyright. All rights reserved.</span>
      	</div>
      </div>
    </footer>
  </div>
)

export default App
