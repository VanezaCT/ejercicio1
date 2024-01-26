import React, { Component, useEffect} from 'react';

export class WillUnMount extends Component {
componentWillUnmount(){
    console.log('antes de que desaparezca el componente')
}

    render() {
        return (
            <div>
                <h1>
                    WillMount
                </h1>
            </div>
        );
    }
}


import React from 'react'

export function WillUnMount() {

    useEffect(() => {
    
        return () => {
                console.log('antes de que desaparezca el componente')
        };
    }, []);
   
  return (
    <div>WillUnMount</div>
  )
}
