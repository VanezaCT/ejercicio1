import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {

const location=  useLocation();
const navigate = useNavigate()

    console.log('we are in route', location.pathname);
    
    const onNavigate =(path)=>{
        navigate(path)
    }

    const goBack =()=>{
        navigate(-1)
    }
    
    return (
        <div>
            <h1>
                About | FAQs Page
            </h1>
            <div>
                <button onClick={()=> onNavigate('/')}>
                    Go to HomePage
                </button>
                <button onClick={goBack}>
                    Go to back
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
