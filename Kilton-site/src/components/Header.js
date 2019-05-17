import React from 'react'
import logo from '../assets/images/Kilton.png'

const Header = (props) => (
   
    <header id="header" className="alt">    
        <span className="logo"><img src={logo} alt="Kilton" width="20%" height="20%" /></span>
        <p>
          A general attribution network with immutable links. Know where things come from and where they lead.
        </p>
          
          </header> 
)

export default Header
