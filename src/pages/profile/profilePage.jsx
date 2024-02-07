import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({user}) => {

    const navigate=useNavigate()

    const goBack = (path) => {
        navigate(path)
    }

    const navigateTo =(path)=>{
        navigate(path)
    }
    return (
        <div>
            <h1>
                Your Profile
            </h1>
            <button onClick={()=>navigateTo('/taskPage')} >Task</button>
            <button onClick={()=>goBack('/')}>
                Go to back
            </button>
        </div>
    );
}

export default ProfilePage;
