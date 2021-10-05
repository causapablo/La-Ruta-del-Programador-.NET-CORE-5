import React, { Component } from 'react';
import { AppBar } from '@mui/material';
import BarSession from './Bar/BarSession';
/* Esta barra de navegación va a ser global en todas las paginas que hagamos, tenemos que configurarla */
class AppNavBar extends Component {
    render() {
        return (
            <div>
                <AppBar position='static'>
                    <BarSession>

                    </BarSession>
                </AppBar>
            </div>
        );
    }
}

export default AppNavBar;