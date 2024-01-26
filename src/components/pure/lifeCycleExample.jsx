import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {
    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: cuando se instancia el componente')
    }
    componentWillMount(){
        console.log('WillMount: antes del montaje del componente')
    }
componentDidMount(){
    console.log('DidMount: justo al acabar el montaje antes de pintarlos')
}
componentWillReceiveProps(nextProps){
    console.log('WillReceiveProps: si va a recibir nuevas props')

}
shouldComponentUpdate(nextProps, nextState){
   

}
componentWillUpdate(nextProps, nextState){
    console.log('WillUpdate: justo antes de actualizarse')
    
}
componentDidUpdate(prevProps, prevState){
    console.log('DidUpdate: justo despues de actualizar el componente')

}
componentWillUnmount(){
    console.log('WillUnmount: justo antes de desaparecer')
    
}

    render() {
        return (
            <div>
                
            </div>
        );
    }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
