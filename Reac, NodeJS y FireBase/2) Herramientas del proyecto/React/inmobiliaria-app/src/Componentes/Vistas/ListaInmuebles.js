import React, { Component } from 'react';
import { Button } from '@mui/material';

class listaInmuebles extends Component {
    render() {
        return (
            <div>
                <Button variant = 'contained' color = 'primary'>Color Primario</Button>
                <Button variant = 'contained' color = 'secondary'>Color Secundario</Button>
            </div>
        );
    }
}

export default listaInmuebles;