import React from "react";

import "./App.css";
import ContenedorP from "./components/ContenedorP";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home.js";
import { StylesProvider } from "@material-ui/core/styles";

function App() {
  return (
    <StylesProvider injectFirst>
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <Redirect to="/Home" />} />
          <Route path="/Home" component={Home} />
          <Route path="/Buscar" component={ContenedorP} />
        </div>
      </Router>
    </StylesProvider>
  );
}

export default App;
