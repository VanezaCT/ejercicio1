import React from 'react';
import {  useNavigate } from 'react-router-dom';

const HomePages = () => {
 
    const navigate = useNavigate()

    const onNavigate = (path) => {
        navigate(path)
    }
    

    
    return (
        <div>
            <h1>Home page</h1>
            <div>
                <button onClick={() => onNavigate('/profile')}>
                    Go to Profile
                </button>
               
            </div>
        </div>
    );
}

export default HomePages;
