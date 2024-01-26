// uso de hooks useState() y useContext()

import React, {useState, useContext} from 'react';


const miContexto = React.createContext(null)

// COMPONENTE 1 va a tener un contexto que va tener el valor que recibe de un padre
const Component1 = () => {
    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                token : {state.token}
            </h1>
            <Component2></Component2>
        </div>
    );
};


const Component2 = () => {
    const state= useContext(miContexto)
    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2> 
        </div>
    );
};


export default function MiComponenteConContexto() {
    const estadoInicial={
        token:'12344665',
        sesion: 1
    }

    const [sesionData, setsesionData] = useState(estadoInicial);

    function actualizarSesion(){
        setsesionData({
            token:'JWT12434234',
            sesion:sesionData.sesion+1
        })
    }
  return (
    <div>
        <miContexto.Provider value={sesionData}>
            <Component1></Component1>
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
    </div>
  )
}

