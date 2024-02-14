import React from 'react';
import { useLocation } from 'react-router-dom';

const StatePage = () => {

    const location = useLocation()

    console.log('location search: ',location.search); // query params sent


    return (
        <div>
            <h1>state: {location.state? 'user is offline':'user is online'}</h1>

        </div>
    );
}

export default StatePage;
