import { useRef } from "react";
import React from 'react';

const Child = ({name, send, update} ) => {

    const messageRef = useRef('')
    const nameRef =useRef()

   function pressButton( ){
    const text= messageRef.current.value
    alert(`Text in Input: ${text}`)

    }

    function pressButtonParams(text){
        alert(`text: ${text}`)

    }
    
    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }

    return (
        <div style={{background: 'cyan', padding: '30px'}}> 
            <p onMouseOver={()=> {console.log('On Mouse over')}}>Hello, {name}</p>
            <button onClick={() => console.log('boton 1 pulsado')}> Boton 1</button>
            <button onClick={pressButton}>Boton 2</button>
            <button onClick={()=>pressButtonParams('Hello')}>Boton 3</button>
            <input placeholder='insertar un texto'  
                onFocus={()=> console.log('input focused')}
                onChange={(e)=>console.log('input changed:',e.target.value)}
                onCopy={()=> console.log('copied text from input')}
                
                    ref={messageRef}
                />

            <button onClick={() => send(messageRef.current.value)}>Send Message</button>
            <div style={{marginTop:'20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder="new text"></input>
                    <button type="submit">update name</button>
                </form>
            </div>
        </div>
    );
}
 
export default Child;
