//examplo for:
// useState() - cambiar estados
// useRef() - agregar referencias de elementos dentro de la vista 
// useEffect() 

import React, {useState, useEffect}from 'react';

const Example2 = () => {
// creamos 2 contadores con estados diferentes
const [contador1, setcontador1] = useState(0);
const [contador2, setcontador2] = useState(0);

// vamos a crear una referencia para asociar una variable 
const miRef=()=>{

}
function incrementar1(params) {
    setcontador1(contador1+1)
}

function incrementar2(params) {
    setcontador2(contador2+1)    
}

// cada vez que haya un cambio en el componente se ejecuta el useEffect
// caso 1: ejecutar siempre un snippet
// useEffect(() => {
//     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
//     console.log('mostrabdo el DOM del elemento de referencia ')
//     console.log(miRef)
// });


// caso 2: solo cuando cambie el contador 1
useEffect(() => { 
    console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
    console.log('mostrabdo el DOM del elemento de referencia ')
    console.log(miRef)
}, [contador1]);

    return (
        <div>
        <h1>EXAMPLE FOR useState(), useRef(), useEffect()</h1>
        <h3>CONTADOR 1:{contador1}</h3>
        <h3>CONTADOR 2:{contador2}</h3> 
        <h4 ref={miRef}>
            ejemplo de referencia 
        </h4> 
        <div>
            <button onClick={incrementar1}> incrementar contador 1</button>
            <button onClick={incrementar2}>incrementar contador 2</button>
        </div>
        </div>
    );
}

export default Example2;
