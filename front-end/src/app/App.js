
import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

import Chat from '../components/Chat/Chat'
import Join from '../components/join/Join'
import Navbar from '../components/navbar/Navbar';

import './App.css'

const App = () => {
    return (
        <div>
            <Navbar />
            
            <br/>
            <br/>
            <br/>

           
            <Router>   
                
                <Switch>
                <Route path="/" exact component={Join} />
                <Route path="/chat" component={Chat} />  
                </Switch>
            </Router>

          
            
        </div>
      
      

    )
}

export default App
