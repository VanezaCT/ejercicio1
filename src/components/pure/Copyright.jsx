import React from 'react';
import { Link, Typography } from '@mui/material';

const Copyright = () => {
    return (
       <Typography variant="body1" color='GrayText' align='center'>
        {
            'Copyright (C) '
        }
        <Link color='inherit' href='https://imaginaformacion.com'>
            Imagina formacion
        </Link>
        { ' ' + new Date().getFullYear()}
       </Typography>
    );
}

export default Copyright;
