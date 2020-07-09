import React, { Component } from "react";
import Resultado from "./Resultado";

class Resultados extends Component {
  componentDidMount() {
    console.log(this.props.jsonp["value"]);
  }
  componentDidUpdate(prevProps) {
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
    console.log(this.props.jsonp["value"]);
    console.log(this.props.busqueda);
  }
  render() {
    if (this.props.jsonp["value"] === undefined) {
      return <div></div>;
    } else {
      return (
        <div className="container-fluid" id="resultados">
          {this.props.jsonp["value"].map((e, index) => (
            <div>
              <Resultado
                key={index + this.props.skip}
                indice={index + this.props.skip + 1}
                id={e.CD_IUC}
                descripcion={e.DS_HECHOS}
                registro={e}
              ></Resultado>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Resultados;
