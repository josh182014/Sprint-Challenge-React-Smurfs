import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
        <div>
            <h2>My Fancy Navigation</h2>
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