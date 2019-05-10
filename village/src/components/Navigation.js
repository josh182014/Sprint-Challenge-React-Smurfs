import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
        <div className='navigation'>
            <h3>Smurf Village!</h3>
            <div>
                <Link to='/'>Smurfs</Link> 
            </div>
            <div>
                <Link to='/smurf-form'>Add New Smurf</Link> 
            </div>
        </div>
    )
}

export default Navigation 