import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('antes de que el elemento se renderice')
    }
    render() {
        return (
            <div>
                <h1>
                    DidMount
                </h1>
            </div>
        );
    }
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log('antes de que el elemento se renderice')

    }, []);
    return (
        <div>
            <h1>
                DidMount
            </h1>
        </div>
    );
}



