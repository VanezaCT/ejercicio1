import React , {useState}from 'react';
import { getNumber } from '../../services/observableService';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = ()=> {

        console.log('suscription to observable');

        getNumber.subscribe({
            next(newNumber){
                console.log('New Number:', newNumber);
                setNumber(newNumber)
            },
           error(error){
               alert(`something went wrong: ${error}`)
           },
           complete(){
            alert(`Finiseht with: ${number}`)
           }
        })
        console.log('finish receiving numbers');
    }

    return (
        <div>
            <h2> Number : {number}</h2>
            <button onClick={obtainNewNumbers}> obtain new number</button>
        </div>
    );
}

export default ObservableExample;
