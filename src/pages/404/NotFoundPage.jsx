import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

    const navigate=useNavigate()

    const navigateTo =(path)=>{
        navigate(path)
    }

    return (
        <div>
            <h1>404 - NotFoundPage</h1>
            <button onClick={()=>navigateTo('/')}>
                Go to back Home
            </button>
        </div>
    );
}

export default NotFoundPage;
