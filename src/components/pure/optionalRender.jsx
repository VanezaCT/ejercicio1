import React, {useState} from 'react';


let red =0;
let green =200;
let blue = 150

const loginStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white'
}

const logoutStyle = {

    backgroundColor:'tomato',
    fontWeight: 'bold',
    color: 'black'
}



//login logout buttons
const LoginButton = ({loginAction, propStyle}) => {
    return (
       <button style={propStyle} onClick={loginAction}>Login</button>

    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}



const OptionalRender = () => {


const [access, setAccess] = useState(false);
const [nMessage, setnMessage] = useState(0);

    let optionalButton;

// const updateAccess = () => {
//     setAccess(!access)
// }

const loginAction =()=>{
    setAccess(true)
}



const logoutAction = () => {
        setAccess(false)
    }

    if (access) {
        optionalButton = <LogoutButton propStyle={logoutStyle} logoutAction={logoutAction}></LogoutButton>
        
    } else {
        optionalButton=<LoginButton propStyle={loginStyle} loginAction={loginAction}></LoginButton>
    }

    let addMessage =()=>{
        setnMessage(nMessage+1)
    }


    return(
        <div>
            {optionalButton}
            {/* {nMessage >0 && <p> You have {nMessage} new message... </p>}
            {nMessage==0  && <p> There are no new message</p>}*/}
        
            {access? (
                <div>
                    {/* operador ternario o condicional */}
                    {nMessage > 0 ?
                        <p> You have {nMessage} new message{nMessage > 1 ? 's' : null}...</p> :
                        <p>There are no new message</p>}
                    <button onClick={addMessage}> {nMessage === 0 ? 'add your firt message' : 'Add new message'}</button>
                </div>
            ):null
           
            }
             
        </div>
    )
    
}

export default OptionalRender;
