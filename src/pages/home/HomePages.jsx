import React from 'react';
import {  useNavigate } from 'react-router-dom';

const HomePages = () => {
 
    const navigate = useNavigate()

    const onNavigate = (path) => {
        navigate(path)
    }
    
    const navigateProps =(path)=>{
        navigate(
            {
                pathname: path,
                search:'?online=true', //query params
                state:{
                     online: true
               }
            }
        );
        
    }
    
    return (
        <div>
            <h1>Home page</h1>
            <div>
                <button onClick={() => onNavigate('/profile')}>
                    Go to Profile
                </button>
                <button onClick={() => navigateProps('/online-state')}>
                    Go to page with state / query params 
                </button>
            </div>
        </div>
    );
}

export default HomePages;
