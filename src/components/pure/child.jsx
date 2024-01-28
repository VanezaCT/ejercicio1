import React from 'react';

const Child = ({name}) => {

   function pressButton(){
    alert('Default Text')

    }

    function pressButtonParams(text){
        alert(`text: ${text}`)

    }


    return (
        <div>
            <p onMouseOver={()=> {console.log('On Mouse over')}}>Child component</p>
            <button onClick={() => console.log('boton 1 pulsado')}> Boton 1</button>
            <button onClick={pressButton()}>Boton 2</button>
            <button onClick={()=>pressButtonParams('Hello')}>Boton 3</button>

        </div>
    );
}

export default Child;
