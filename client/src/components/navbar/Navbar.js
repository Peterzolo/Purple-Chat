import React from 'react'

const Navbar = ({room}) => {
    return (
        <div className='navbar'>
            <div className='left-wrapper'>
                <img className='onlineIcon' alt="online image" />
                <h3>{room}</h3>
                
            </div>

            <div className='right-wrapper'>
                <a href="/"><img src="" alt="close image" /></a>
                
            </div>
        </div>
    )
}

export default Navbar
