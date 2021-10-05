import React, { Component } from "react";
import "./App.css";
import ListaInmuebles from "./Componentes/Vistas/ListaInmuebles";
import { Grid, ThemeProvider } from "@mui/material";
import AppNavBar from "./Componentes/Layout/AppNavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Theme from "./Theme/Theme";

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={Theme}>
          <AppNavBar></AppNavBar>
          <Grid container>
            <Switch>
              <Route path="/" exact component={ListaInmuebles}></Route>
            </Switch>
          </Grid>
          
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
