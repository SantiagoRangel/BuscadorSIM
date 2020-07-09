import React, { Component } from "react";
import Param from "./Param";
import $ from "jquery";
const estiloDiv = {
  textAlign: "left",
};
const estiloDiv2 = {
  borderBottom: "medium solid white",
  paddingLeft: "0",
  marginInlineStart: "inherit",
  marginRight: "5px",
  paddingRight: "-20px",
  paddingTop: "15px",
  height: "100%",
};
const estiloDiv3 = {
  borderBottom: "medium solid white",
  paddingLeft: "0",
  marginInlineStart: "inherit",
  marginRight: "5px",
  paddingRight: "-20px",
  paddingBottom: "3px",
  paddingTop: "15px",
  height: "100%",
};
const estiloParam = {
  display: "none",
};
class Params extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parametros: this.props.parametros,
      paramSearch: this.props.paramSearch,
      informacion: this.props.informacion,
      fechasD: false,
      personasD: false,
      ubiacionD: false,
    };
    this.pasarInfo = this.pasarInfo.bind(this);
  }
  componentDidMount() {
    var self = this;

    $(document).ready(function () {
      $("#butFechas").click(function () {
        if (!self.state.fechasD) {
          $("#fechas").fadeIn();
          self.setState({ fechasD: true });
        } else {
          $("#fechas").fadeOut();
          self.setState({ fechasD: false });
        }
      });
      $("#butPersonas").click(function () {
        if (!self.state.personasD) {
          $("#personas").fadeIn();
          self.setState({ personasD: true });
        } else {
          $("#personas").fadeOut();
          self.setState({ personasD: false });
        }
      });
      $("#butUbicacion").click(function () {
        if (!self.state.ubiacionD) {
          $("#ubicacion").fadeIn();
          self.setState({ ubiacionD: true });
        } else {
          $("#ubicacion").fadeOut();
          self.setState({ ubiacionD: false });
        }
      });
      $("#butCodigos").click(function () {
        if (!self.state.ubiacionD) {
          $("#codigos").fadeIn();
          self.setState({ ubiacionD: true });
        } else {
          $("#codigos").fadeOut();
          self.setState({ ubiacionD: false });
        }
      });
      $("#butOrganizacion").click(function () {
        if (!self.state.ubiacionD) {
          $("#organizacion").fadeIn();
          self.setState({ ubiacionD: true });
        } else {
          $("#organizacion").fadeOut();
          self.setState({ ubiacionD: false });
        }
      });
      $("#butTema").click(function () {
        if (!self.state.ubiacionD) {
          $("#tema").fadeIn();
          self.setState({ ubiacionD: true });
        } else {
          $("#tema").fadeOut();
          self.setState({ ubiacionD: false });
        }
      });
      $("#butListaTema").click(function () {
        if (!self.state.ubiacionD) {
          $("#listatema").fadeIn();
          self.setState({ ubiacionD: true });
        } else {
          $("#listatema").fadeOut();
          self.setState({ ubiacionD: false });
        }
      });
      $("#butListaSub").click(function () {
        if (!self.state.ubiacionD) {
          $("#divSub").fadeIn();
          self.setState({ ubiacionD: true });
        } else {
          $("#divSub").fadeOut();
          self.setState({ ubiacionD: false });
        }
      });
    });
  }
  componentDidUpdate() {
    console.log(this.props.topics);
    //this.setState({ topics: this.props.topics });
  }

  newFilter(parametro, key) {
    if (key < 3) {
      return (
        <div className="row">
          <Param
            id={key}
            key={key}
            parametro={parametro}
            informacion={this.props.informacion[key]}
          ></Param>
        </div>
      );
    }
  }
  newFilter2(parametro, key) {
    if (key >= 3 && key < 8) {
      return (
        <div className="row">
          <Param
            id={key}
            key={key}
            parametro={parametro}
            informacion={this.props.informacion[key]}
          ></Param>
        </div>
      );
    }
  }
  newFilter3(parametro, key) {
    if (key >= 8 && key < 12) {
      return (
        <div className="row">
          <Param
            id={key}
            key={key}
            parametro={parametro}
            informacion={this.props.informacion[key]}
          ></Param>
        </div>
      );
    }
  }
  newFilter4(parametro, key) {
    if (key >= 12 && key < 16) {
      return (
        <div className="row">
          <Param
            id={key}
            key={key}
            parametro={parametro}
            informacion={this.props.informacion[key]}
          ></Param>
        </div>
      );
    }
  }
  newFilter5(parametro, key) {
    if (key >= 16 && key < 19) {
      return (
        <div className="row">
          <Param
            id={key}
            key={key}
            parametro={parametro}
            informacion={this.props.informacion[key]}
          ></Param>
        </div>
      );
    }
  }
  newFilter7(parametro, key) {
    if (key === 20) {
      return (
        <div className="row">
          <Param
            id={key}
            key={key}
            parametro={parametro}
            informacion={this.props.informacion[key]}
            topics={this.state.topics}
            callback={this.pasarInfo}
            subt={this.state.subTopics}
          ></Param>
        </div>
      );
    }

    return <div className="row"></div>;
  }

  newFilter6(parametro, key) {
    if (key === 19) {
      return (
        <div className="row">
          <Param
            id={key}
            key={key}
            parametro={parametro}
            informacion={this.props.informacion[key]}
            topics={this.state.topics}
            callback={this.pasarInfo}
          ></Param>
        </div>
      );
    }

    return <div className="row"></div>;
  }
  pasarInfo(param) {
    console.log(param);
    this.setState({ subTopics: param });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div style={estiloDiv2}>
              <div style={estiloDiv} className="row">
                <div className="col">
                  <h2
                    id=""
                    className="params"
                    data-toggle="modal"
                    style={{ textAlign: "left" }}
                  >
                    Fechas
                  </h2>
                </div>
                <div className="col">
                  <i
                    id="butFechas"
                    className="fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div id="fechas" style={estiloParam}>
                {this.state.parametros.map((parametro, key) =>
                  this.newFilter(parametro, key)
                )}
              </div>
            </div>
          </div>
          <hr />
          <div className="col-4">
            <div style={estiloDiv2}>
              <div style={estiloDiv} className="row">
                <div className="col">
                  <h2
                    id=""
                    className="params"
                    data-toggle="modal"
                    style={{ textAlign: "left" }}
                  >
                    Personas y Descripciones
                  </h2>
                </div>
                <div className="col">
                  <i
                    id="butPersonas"
                    className="fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div id="personas" style={estiloParam}>
                {this.state.parametros.map((parametro, key) =>
                  this.newFilter2(parametro, key)
                )}
              </div>
            </div>
          </div>
          <hr />
          <div className="col-4">
            <div style={estiloDiv2}>
              <div style={estiloDiv} className="row">
                <div className="col">
                  <h2
                    id=""
                    className="params"
                    data-toggle="modal"
                    style={{ textAlign: "left" }}
                  >
                    Lugares
                  </h2>
                </div>
                <div className="col">
                  <i
                    id="butUbicacion"
                    className="fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div id="ubicacion" style={estiloParam}>
                {this.state.parametros.map((parametro, key) =>
                  this.newFilter3(parametro, key)
                )}
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-4">
            <div style={estiloDiv2}>
              <div style={estiloDiv} className="row">
                <div className="col">
                  <h2
                    id=""
                    className="params"
                    data-toggle="modal"
                    style={{ textAlign: "left" }}
                  >
                    Proceso
                  </h2>
                </div>
                <div className="col">
                  <i
                    id="butCodigos"
                    className="fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div id="codigos" style={estiloParam}>
                {this.state.parametros.map((parametro, key) =>
                  this.newFilter4(parametro, key)
                )}
              </div>
            </div>
          </div>
          <hr />
          <div className="col-4">
            <div style={estiloDiv2}>
              <div style={estiloDiv} className="row">
                <div className="col">
                  <h2
                    id=""
                    className="params"
                    data-toggle="modal"
                    style={{ textAlign: "left" }}
                  >
                    Códigos-Conducta
                  </h2>
                </div>
                <div className="col">
                  <i
                    id="butOrganizacion"
                    className="fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div id="organizacion" style={estiloParam}>
                {this.state.parametros.map((parametro, key) =>
                  this.newFilter5(parametro, key)
                )}
              </div>
            </div>
          </div>
          <hr />
          <div className="col-4">
            <div style={estiloDiv2}>
              <div style={estiloDiv} className="row">
                <div className="col">
                  <h2
                    id=""
                    className="params"
                    data-toggle="modal"
                    style={{ textAlign: "left" }}
                  >
                    Temas
                  </h2>
                </div>
                <div className="col">
                  <i
                    id="butTema"
                    className="fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div id="tema" style={estiloParam}>
                {this.state.parametros.map((parametro, key) =>
                  this.newFilter6(parametro, key)
                )}
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-4">
            <div style={estiloDiv3}>
              <div style={estiloDiv} className="row">
                <div className="col">
                  <h2
                    id=""
                    className="params"
                    data-toggle="modal"
                    style={{ textAlign: "left" }}
                  >
                    Sub-Temas
                  </h2>
                </div>
                <div className="col">
                  <i
                    id="butListaSub"
                    className="fa fa-angle-down"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div id="divSub" style={estiloParam}>
                {this.state.parametros.map((parametro, key) =>
                  this.newFilter7(parametro, key)
                )}
              </div>
            </div>
          </div>

          <hr />

          <hr />
        </div>
      </div>
    );
  }
}

export default Params;
