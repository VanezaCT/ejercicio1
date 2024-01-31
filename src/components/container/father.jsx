import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {
const [name, setName] = useState('Vaneza');

    function ShowMessage(text) {
        alert(`Menssage received: ${text}`)
    }
    function updateNme(newName) {
        setName(newName)
        
    }

    return (
        <div style={{background: 'tomato', padding: '10px'}}>
            <Child name={name} send={ShowMessage} update={updateNme}></Child>
        </div>
    );
}

export default Father;
