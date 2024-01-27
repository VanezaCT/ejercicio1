import React, {useState}from 'react';


//estilo para usuario logueado
const loggeStyle ={
    color : 'blue'
}

//estilo para ususario no logueado
const unLoggeStyle ={
    color: 'white ',
    fontWeigth:'bold'
}

const GreetingStyled = (props) => {

    // generamos un estado para el componente y asi controlar si el usuario esta o no logueado
    const [logged, setLogged] = useState(false);

    return (
        <div style={logged? loggeStyle : unLoggeStyle}>
            {logged ? 
            (<p> Hola, {props.name}</p>)
            :
            (<p>Please Login</p>)}
        
        <button onClick={()=>{
            console.log('boton pulsado')
            setLogged(!logged)
        }}>
            {logged? 'logout':'login'}
        </button>
            
        </div>
    );
}

export default GreetingStyled;
