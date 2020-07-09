import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Barra extends Component {
  constructor(props){
    super(props);
    this.mandar = this.mandar.bind(this);
  }
  mandar(a){
    let b = this.props.pasarInfo;
    //console.log(b);
    b(a);
  }
  render() {
    return (
      <div>
        <Navbar className="navbar navbar-dark bg-dark justify-content-between">
          <a className="navbar-brand" style={{ color: "white" }}>
            Buscador
          </a>
          <form className="form-inline"></form>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              
              <a className="nav-item nav-link" href="#" onClick={() => {
                this.mandar("sencilla");
              }}>
                Sencilla
              </a>
              <a className="nav-item nav-link" href="#"  onClick={() => {
                this.mandar("avanzada");
              }}>
                Avanzada
              </a>
             
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Barra;
