import { Alert } from 'bootstrap';
import React from 'react';

const AsyncExample = () => {
    async function saveSessionStorage (key, value){
         
        sessionStorage.setItem(key, value)
        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage (){
        saveSessionStorage('name', 'Martin')
        .then((response)=>{
                let value = response;
                alert(`Saved Name: ${value}`)
        })
        .catch((error)=>{
            alert(`something went wrong: ${error}`)
        })
        .finally(()=>
        { alert('Name saved and retreived sucessfuly') })
    }
    
    async function obtainMessage(){
        let promise = new Promise ((resolve, reject)=>{
            setTimeout(() => resolve('Hello word'), 2000)
        })
        let message = await promise

        await alert(`message received: ${message} `)
    }

    const retunrError = async()=>{
        await Promise.reject(new Error('ooooooops!'))
    }

    const consumeError =()=>{
        retunrError()
        .then((response)=>alert (`everithing is ok : ${response}`))
            .catch((error) => alert(`something went wrong: ${ error }`))
        .finally(()=> alert('finaly executed'))

    }

    const urlNotFound = async()=>{
        try {
            let response = await fetch('http://invalidURL')
            alert(`Response: ${JSON.stringify(response)}`)
        } catch (error) {
            alert(`something went wrong with your URL: ${error}(check your console)`)
        }
    }
    
    const multiPromise = async()=>{
        let results = await Promise.all([
            fetch('https://reqres.in/api/users'),
            fetch('https://reqres.in/api/users?page=2')
        ]).catch((error) => alert(`something went wrong with your URL: ${error}(check your console)`))
    }

    return (
        <div>
            <h1>Async, promise example</h1>
            <button onClick={showStorage}>
                save name and show
            </button>
            <button onClick={obtainMessage}>Send message in 2 seconds </button>
            <button onClick={consumeError}>Obtain error</button>
            <button onClick={urlNotFound}> Request to unknown URL</button>
            <button onClick={multiPromise}> multiPromise</button>
        </div>
    );
}

export default AsyncExample;
