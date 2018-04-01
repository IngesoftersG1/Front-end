import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import './styles/styles.css'

const App = () => (
  <div>  	
    <Main />    
    <Header />  
    <footer className="footer">
      <div className="container">
      	<div className="text-center">
        	<span>2018 - Ingesofters :v.</span>
      	</div>
      </div>
    </footer>   
  </div>
)

export default App
