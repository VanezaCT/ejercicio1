import React, {useState} from 'react';

const Example1 = () => {

    //valor inicial para un contador
    const valorIinicial =0

    //valor inicial para una persona
    const personaInicial ={
        name:'vaneza ',
        email : '8.vcalixto@gmail.com'
    }

    // queremmos que el valor inicial del contador y personas sean parte del estado 
    // del componente para asi poder gestionar su cambio y que este se vea reflejado en la vista del componente

    const [contador, setContador] = useState(valorIinicial);
    const [persona, setPersona] = useState(personaInicial);

    // funcion para actualizar el estado que tiene el contador

    function incrementarContador( ) {
        setContador(contador+1)
    }

    function actualizarPersona( ) {
        setPersona({
            name: 'Maria',
            email:'mariacalixto@gmail.com'
    })
    }
    

    return (
        <div>
            <h1>
                Example for useState
            </h1>
            <h3>contador: {contador}</h3>
            <h3>datos de la persona:</h3>
            <h5>nombre: {persona.name}</h5>
            <h5>email: {persona.email}</h5>

            {/* botones para actualizar estado */}
            <div>
                <button onClick={incrementarContador}>Incrementar Contador</button>
                <button onClick={actualizarPersona}>Actualizar Datos</button>
            </div>
        </div>
    );
}

export default Example1; 
