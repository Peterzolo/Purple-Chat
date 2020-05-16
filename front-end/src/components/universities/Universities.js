import React from 'react'

import './Universities.css'

const Universities = () => {
    return (
        <div className=''>
            <div className='row'>
                <div className='col'>
                    <div class="card" style={{ width: '18rem' }}>
                        <img src="/images/akson-1K8pIbIrhkQ-unsplash.jpg" width="285" alt="" />
                        <div class="card-body">
                            <h5 class="card-title" id='cardTitle'>Sharing ideas</h5>
                            <p class="card-text">Students can share ideas with each other within the university and department.</p>
                        </div>
                    </div>
                    
                </div>
                <div className='col'>
                    <div class="card" style={{ width: '18rem' }}>
                        <img src="/images/student2.jpg" width="285" alt="" />
                        <div class="card-body">
                            <h5 class="card-title" id='cardTitle'>Information</h5>
                            <p class="card-text">Passing information from one part of the world to another is just awesome with Purple
                            Chat </p>
                         
                        </div>
                    </div>
                    
                </div>
                <div className='col'>
                    <div class="card" style= {{width: '18rem'}}>
                        <img src="/images/student5.jpg" width="285" alt="" />
                        <div class="card-body">
                            <h5 class="card-title" id='cardTitle'>Brainstorming</h5>
                            <p class="card-text">You cant get stuck. Reach out to friends for the very answer to that question. Purple Chat.</p>
                        </div>
                   </div>
                    
                </div>
                
            </div>
            
            
           
        </div>
    )
}

export default Universities
