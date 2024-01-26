// ejemplo para entender props.children

import React from 'react';
import PropTypes from 'prop-types';


const Example4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de Props.children</h1>
            <h3>
                Nombre: {props.nombre}
            </h3>
            {props.children}
        </div>
    );
};


Example4.propTypes = {

};


export default Example4;
