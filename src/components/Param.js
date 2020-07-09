import React, { Component } from "react";
import $ from "jquery";
class Param extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: null,
    };
    this.verEstado = this.verEstado.bind(this);
    this.hola = this.hola.bind(this);
  }
  verEstado() {
    console.log(this.props.id);
    if (this.props.id === 19) {
      let subtopics = [];
      for (var i = 0; i < this.state.topics["value"][0]["Topics"].length; i++) {
        var rta = document.getElementById(
          "checkbox" + this.state.topics["value"][0]["Topics"][i]["TopicName"]
        ).checked;
        if (rta) {
          var lista = this.state.topics["value"][0]["Topics"][i]["SubTopic"];
          for (var j = 0; j < lista.length; j++) {
            subtopics.push(lista[j]);
          }
        }
      }
      console.log("subt : " + subtopics);
      this.setState({ subt: subtopics });
      //console.log(subtopics);
      this.props.callback(subtopics);
    }
  }
  componentDidMount() {
    /* $(function () {
      $("#parami0").datepicker({ dateFormat: "yy-mm-dd" });
    }); */
    if (this.props.id === 19) {
      var misCabeceras = new Headers({
        "Content-Type": "application/json",
        "api-key": "BB4157B4351976D9188E9FE5B982FCBE",
      });

      var miInit = {
        method: "GET",
        headers: misCabeceras,
        mode: "cors",
        cache: "default",
      };

      var url =
        "https://srchmodmbsim.search.windows.net/indexes/tabla-maestra-temas/docs?api-version=2019-05-06&search=*";
      fetch(url, miInit)
        .then(function (response) {
          //console.log("niga : " + response.json());
          return response.json();
        })
        .then((json) => {
          console.log(json);
          let topics = json["value"][0]["Topics"];
          let lista = [];
          for (let index = 0; index < topics.length; index++) {
            var element = topics[index]["TopicName"];
            lista.push(element);
          }
          lista.sort();
          console.log("lista topics = " + lista);
          this.setState({ topics: json, listaTopics: lista });
        });
    }
  }

  mapTopics() {
    if (this.state.topics) {
      this.props.topics.map((e) => {
        return <option value={e.TopicName}>{e.TopicName}</option>;
      });
    } else {
      return null;
    }
  }
  componentDidUpdate() {
    if (this.props.id === 19) {
      console.log("los topics son" + this.state.topics);
    }
  }
  hola() {
    if (this.props.id === 19) {
      var values = $("#id").val();
      console.log(values);
    }
  }
  render() {
    if (this.props.id === 19) {
      return (
        <div
          className="container-fluid"
          id={"param" + this.props.id.toString(10)}
        >
          <div
            id="listatema"
            className="form-check"
            style={{ textAlign: "left" }}
          >
            {this.state.topics
              ? this.state.listaTopics.map((e, i) => {
                  return (
                    <div>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={"checkbox" + e}
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor="materialIndeterminate2"
                        style={{ color: "whitesmoke", textAlign: "left" }}
                        id={"labelT" + e}
                      >
                        {e}
                      </label>
                    </div>
                  );
                })
              : ""}
          </div>
          <button
            className="botonHome btn"
            style={{ textAlign: "center" }}
            onClick={this.verEstado}
          >
            escoger
          </button>
        </div>
      );
    }
    if (this.props.id === 20) {
      return (
        <div
          className="container-fluid"
          id={"param" + this.props.id.toString(10)}
        >
          <div
            className="form-check"
            style={{ textAlign: "left" }}
            id="listaSub"
          >
            {this.props.subt
              ? this.props.subt.map((e, i) => {
                  return (
                    <div>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={"checkboxs" + e}
                        value={e}
                      ></input>
                      <label
                        className="form-check-label"
                        for="materialIndeterminate2"
                        style={{ color: "whitesmoke", textAlign: "left" }}
                        id={"labelS" + e}
                      >
                        {e}
                      </label>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      );
    }
    if (this.props.parametro === "Area Misional") {
      return (
        <div className="container-fluid">
          <h6>{this.props.parametro}</h6>
          <select
            id={"param" + this.props.id.toString(10)}
            className="custom-select"
          >
            <option value=""></option>
            <option value="PREVENTIVO">Preventivo</option>
            <option value="DISCIPLINARIO">Disciplinario</option>
            <option value="INTERVENCION">Intervención</option>
          </select>
        </div>
      );
    }
    if (this.props.parametro === "Estado") {
      return (
        <div className="container-fluid">
          <h6>{this.props.parametro}</h6>
          <select
            id={"param" + this.props.id.toString(10)}
            className="custom-select"
          >
            <option value=""></option>

            <option value="INACTIVO">Inactivo</option>
            <option value="ACTIVO">Activo</option>
          </select>
        </div>
      );
    }
    if (this.props.id >= 3 && this.props.id !== 19 && this.props.id !== 20) {
      return (
        <div className="container-fluid">
          <h6>{this.props.parametro}</h6>
          <div className="input-group md-form form-sm form-2 pl-0">
            <input
              className="form-control my-0 py-1 red-border"
              type="text"
              placeholder=""
              aria-label="Search"
              id={"param" + this.props.id.toString(10)}
            ></input>

            <div
              className="input-group-append"
              data-toggle="modal"
              data-target={"#modalp" + this.props.id.toString(10)}
            >
              <span className="input-group-text red lighten-3" id="basic-text1">
                <i className="fas fa-info text-grey" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          <div
            className="modal"
            tabIndex="-1"
            id={"modalp" + this.props.id.toString(10)}
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{this.props.parametro}</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>{this.props.informacion}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.id < 3) {
      return (
        <div className="container-fluid">
          <h6>{this.props.parametro}</h6>
          <div className="row">
            <div className="input-group md-form form-sm form-2 pl-0">
              <label
                htmlFor="example-date-input"
                className=" col-form-label"
                style={{ color: "whitesmoke", marginRight: "10px" }}
              >
                Inicio
              </label>

              <input
                className="form-control my-0 py-1 red-border"
                type="date"
                id={"parami" + this.props.id.toString(10)}
              ></input>

              <div
                className="input-group-append"
                data-toggle="modal"
                data-target={"#modal" + this.props.id.toString(10)}
              >
                <span
                  className="input-group-text red lighten-3"
                  id="basic-text1"
                >
                  <i className="fas fa-info text-grey" aria-hidden="true"></i>
                </span>
              </div>
            </div>
            <div className="input-group md-form form-sm form-2 pl-0" style={{}}>
              <label
                htmlFor="example-date-input"
                className=" col-form-label"
                style={{ color: "whitesmoke", marginRight: "15px" }}
              >
                Final
              </label>

              <input
                className="form-control my-0 py-1 red-border"
                type="date"
                id={"paramf" + this.props.id.toString(10)}
              ></input>

              <div
                className="input-group-append"
                data-toggle="modal"
                data-target={"#modal" + this.props.id.toString(10)}
              >
                <span
                  className="input-group-text red lighten-3"
                  id="basic-text1"
                >
                  <i className="fas fa-info text-grey" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </div>
          <div
            className="modal"
            tabIndex="-1"
            id={"modal" + this.props.id.toString(10)}
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{this.props.parametro}</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>{this.props.informacion}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Param;
