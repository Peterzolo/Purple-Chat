
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
   
    return (
       
        <div>
            <nav className="navbar fixed-top navbar-light bg-light">
                <a className="navbar-brand" href="#"><span className='brand-purple'>Purple</span><span className='brand-chat'>Chat</span></a>
               <span className ='top-links'>About</span>
               <span className ='top-links'>Universities</span>
               <span className ='top-links'>Admission</span>
            </nav>



          
            </div>
            
           
    )
        
       
}

export default Navbar
