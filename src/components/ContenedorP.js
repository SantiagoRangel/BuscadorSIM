import React, { Component } from "react";
import Params from "./Params";
import Resultados from "./Resultados";
/* import logo from "../imagenes/logoProcu.png";
 */ import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
/* import { makeStyles } from "@material-ui/core/styles"; */
import Pagination from "@material-ui/lab/Pagination";

const data2 = [];

const estilobut = {
  marginTop: "30px",
  textAlign: "center",
};
const pagina = {
  textAlign: "left",
  marginLeft: "30px",
  color: "whitesmoke",
};
class ContenedorP extends Component {
  constructor(props) {
    super(props);
    this.csv = this.csv.bind(this);
    this.enter = this.enter.bind(this);
    this.state = {
      rta: [],
      salto: 0,
      busqueda: "sencilla",
      loading: false,
      loading2: false,
      acabo: false,
      llegotopics: true,
      skip: 0,
      skip2: 0,
      resultados: "",
      palabra: "",
      className: "class-name-for-style",
      filename: "",
      fields: {
        CD_CASO: "CD_CASO",
        CD_ESTADO_PROCESO: "CD_ESTADO_PROCESO",
        CD_IUC: "CD_IUC",
        CD_IUS: "CD_IUS",
        DS_AREA_MISIONAL: "DS_AREA_MISIONAL",
        DS_CONDUCTA: "DS_CONDUCTA",
        DS_DEPARTAMENTO_HECHOS: "DS_DEPARTAMENTO_HECHOS",
        DS_DEPENDENCIA: "DS_DEPENDENCIA",
        DS_ETAPA: "DS_ETAPA",
        DS_HECHOS: "DS_HECHOS",
        DS_IMPLICADO: "DS_IMPLICADO",
        DS_MUNICIPIO_HECHOS: "DS_MUNICIPIO_HECHOS",
        DS_NOMBRE_FUNCIONARIO: "DS_NOMBRE_FUNCIONARIO",
        DS_QUEJOSO: "DS_QUEJOSO",
        DS_SOLICITUD: "DS_SOLICITUD",
        DS_TEMA: "DS_TEMA",
        DS_ULTIMA_DECISION: "DS_ULTIMA_DECISION",
        DT_ACTUALIZACION: "DT_ACTUALIZACION",
        DT_CARGA: "DT_CARGA",
        DT_HECHOS: "DT_HECHOS",
        DT_QUEJA: "DT_QUEJA",
        DT_RADICACION_PGN: "DT_RADICACION_PGN",
        DT_RADICACION_SIM: "DT_RADICACION_SIM",
        SK_PROCESO_BUSCADOR: "SK_PROCESO_BUSCADOR",
      },
      style: {
        padding: "5px",
      },
      data: [],
      parametros: [
        "Fecha Radicación PGN",
        "Fecha Hechos",
        "Fecha de Queja",

        "Intervinientes",
        "Implicado",
        "Funcionario",
        "Hechos",
        "Solicitud",

        "Dependencia",
        "Departamento",
        "Municipio",
        "Entidad",

        "Ultima Decisión",
        "Etapa",
        "Area Misional",
        "Estado",

        "Código IUS",
        "Código IUC",
        "Conducta",

        "Tema",
        "SubTema",
      ],
      paramSearch: [
        //FECHAS 0-2

        "DT_RADICACION_PGN",
        "DT_HECHOS",
        "DT_QUEJA",
        //PERSONAS Y DESCRIPCIONES 3-7
        "DS_QUEJOSO",
        "DS_IMPLICADO",
        "DS_NOMBRE_FUNCIONARIO",
        "DS_HECHOS",
        "DS_SOLICTITUD",
        //LUGRAES 8-11
        "DS_DEPENDENCIA",
        "DS_DEPARTAMENTO_HECHOS",
        "DS_MUNICIPIO_HECHOS",
        "DS_ENTIDAD",
        //PROCESO 12-15
        "DS_ULTIMA_DECISION",
        "DS_ETAPA",
        "DS_AREA_MISIONAL",
        "CD_ESTADO_PROCESO",
        //CODIGOS Y CONDUCTA 16-18
        "CD_IUS",
        "CD_IUC",
        "DS_CONDUCTA",
        //TEMAS 19-20
        "topics/TopicName",
        "topics/SubTopic",
      ],
      informacion: [
        "Fecha en la cual la Procuraduría General de la Nación radicó el caso.",
        "Fecha en la cual sucedieron los hechos del caso en cuestión.",
        "Fehca de en la cual se presentó la queja",

        "Nombre de los intervinientes en el caso.",
        "Nombre de la persona implicada en el caso.",
        "Nombre del funcionario de la Procuraduria General de la Nacion involucrado en el caso.",
        "Descripcion de los hechos del caso.",
        "Descripcion de la solictud del caso.",

        "Nombre de la dependencia de la Procuraduria General de la Nacion.",
        "Nombre del departamento donde ocurrieron los echos o de la dependencia.",
        "Nombre del municipio donde ocurrieron los echos o de la dependencia.",
        "Nombre de la entidad relacionada con el caso. ",

        "Descripcion de la ultima decision que se tomo del caso.",
        "Descripcion de la etapa en la que se encuentra el caso.",
        "Nombre de las areas misional de la Procuraduria General de la Nacion (Intervencion, Disciplinarios, Preventivo).",
        "Indica si el caso esta activo o inactivo.",

        "Numero de radicacion del caso",
        "Numero siaf del caso.",
        "Descripción de la conducta en el proceso.",

        "Tema del proceso.",
        "Filtrar por sub tema del proceso.",
      ],
    };
  }
  crearData(json) {
    for (let index = 0; index < json.value.length; index++) {
      var temp = {
        CD_CASO: json.value[index]["CD_CASO"],
        CD_ESTADO_PROCESO: json.value[index]["CD_ESTADO_PROCESO"].replace(
          /(\r\n|\n|\r)/gm,
          ""
        ),
        CD_IUC: json.value[index]["CD_IUC"],
        CD_IUS: json.value[index]["CD_IUS"],
        DS_AREA_MISIONAL: json.value[index]["DS_AREA_MISIONAL"],
        DS_CONDUCTA: json.value[index]["DS_CONDUCTA"].replace(
          /(\r\n|\n|\r)/gm,
          ""
        ),
        DS_DEPARTAMENTO_HECHOS: json.value[index]["DS_DEPARTAMENTO_HECHOS"],
        DS_DEPENDENCIA: json.value[index]["DS_DEPENDENCIA"].replace(
          /(\r\n|\n|\r)/gm,
          ""
        ),
        DS_ETAPA: json.value[index]["DS_ETAPA"].replace(/(\r\n|\n|\r)/gm, ""),
        DS_HECHOS: json.value[index]["DS_HECHOS"].replace(/(\r\n|\n|\r)/gm, ""),
        DS_IMPLICADO: json.value[index]["DS_IMPLICADO"].replace(
          /(\r\n|\n|\r)/gm,
          ""
        ),
        DS_MUNICIPIO_HECHOS: json.value[index]["DS_MUNICIPIO_HECHOS"],
        DS_NOMBRE_FUNCIONARIO: json.value[index][
          "DS_NOMBRE_FUNCIONARIO"
        ].replace(/(\r\n|\n|\r)/gm, ""),
        DS_QUEJOSO: json.value[index]["DS_QUEJOSO"].replace(
          /(\r\n|\n|\r)/gm,
          ""
        ),
        DS_SOLICITUD: json.value[index]["DS_SOLICITUD"].replace(
          /(\r\n|\n|\r)/gm,
          ""
        ),
        DS_TEMA: json.value[index]["DS_TEMA"].replace(/(\r\n|\n|\r)/gm, ""),
        DS_ULTIMA_DECISION: json.value[index]["DS_ULTIMA_DECISION"].replace(
          /(\r\n|\n|\r)/gm,
          ""
        ),
        DT_ACTUALIZACION: json.value[index]["DT_ACTUALIZACION"].replace(
          /(\r\n|\n|\r)/gm,
          ""
        ),
        DT_CARGA: json.value[index]["DT_CARGA"],
        DT_QUEJA: json.value[index]["DT_QUEJA"],
        DT_RADICACION_PGN: json.value[index]["DT_RADICACION_PGN"],
        DT_RADICACION_SIM: json.value[index]["DT_RADICACION_SIM"],
        SK_PROCESO_BUSCADOR: json.value[index]["SK_PROCESO_BUSCADOR"],
      };
      console.log("implicado =  " + json.value[index]["DS_IMPLICADO"]);
      //console.log("hechos =  " +  json.value[index]["DS_HECHOS"],)

      data2.push(temp);
    }
    if (json["@odata.nextLink"]) {
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
      var urlFinal = json["@odata.nextLink"];
      console.log("URL next : " + urlFinal);
      fetch(urlFinal, miInit)
        .then(function (response) {
          return response.json();
        })
        .then((json) => {
          console.log(json);
          this.crearData(json);
          // console.log("count: " + json["@odata"])
        });
    } else {
      this.setState({ loading2: false, acabo: true });
    }

    return data2;
  }
  csv() {
    this.setState({ loading2: true });
    this.crearData(this.state.rta);
    console.log("data2" + data2);
  }
  crearQuery() {
    var encontro = false;
    var find = false;
    var rta = "&$filter=(";
    if (document.getElementById("parami0")) {
      for (let i = 0; i < 3; i++) {
        var valori = document.getElementById("parami" + i.toString(10)).value;
        var valorf = document.getElementById("paramf" + i.toString(10)).value;
        console.log(this.state.paramSearch[i] + "  " + valori);

        if (valori !== "") {
          let filtro = `(${this.state.paramSearch[i]} gt ${valori} and ${this.state.paramSearch[i]} lt ${valorf})`;
          if (valori && !find) {
            rta = rta + filtro;
            console.log("rta dio = " + rta);

            find = true;
          } else if (valori && find) {
            rta = rta + " and " + filtro;
          }
        }
      }
      for (let index = 3; index < this.state.parametros.length - 2; index++) {
        console.log("entra al for");
        var valor = document.getElementById("param" + index.toString(10)).value;
        if (!(valor === "") && !encontro && !find) {
          var tipo = this.state.paramSearch[index];
          let filtro = `search.ismatch('"${valor}"','${tipo}')`;
          if (index >= 0 && index < 4) {
            filtro = `search.ismatch('"${valor}"','${tipo}')`;
          }
          rta = rta + filtro;
          console.log("pone el true");
          encontro = true;
          console.log("entra al primer if");
        } else if ((!(valor === "") && encontro) || (!(valor === "") && find)) {
          console.log("entra al segundo if");

          console.log("HOLA");
          tipo = this.state.paramSearch[index];
          let filtro = `search.ismatch('"${valor}"','${tipo}')`;
          rta = rta + ` and ` + filtro;
        }
      }
      if (this.state.listaTopics) {
        for (let index = 0; index < this.state.listaTopics.length; index++) {
          console.log("label = " + "labelT" + this.state.listaTopics[index]);
          var valor = document.getElementById(
            "labelT" + this.state.listaTopics[index]
          ).innerHTML;
          // console.log("label valor = "+ valor);

          // console.log("valor: " + valor);
          var temp = document.getElementById(
            "checkbox" + this.state.listaTopics[index]
          ).checked;

          if (temp) {
            let filtro = `search.ismatch('"${valor}"','Topics/TopicName')`;
            if (!encontro) {
              rta = rta + filtro;
              encontro = true;
            } else {
              rta = rta + ` and ` + filtro;
            }
          }
        }
      }
      if (this.state.listaSub) {
        console.log("entro al for de los tpics");

        for (let index = 0; index < this.state.listaSub.length; index++) {
          if (document.getElementById("labelS" + this.state.listaSub[index])) {
            var valor = document.getElementById(
              "labelS" + this.state.listaSub[index]
            ).innerHTML;
            console.log("valor: " + valor);
            var temp = document.getElementById(
              "checkboxs" + this.state.listaSub[index]
            ).checked;

            if (temp) {
              let filtro = `search.ismatch('"${valor}"','Topics/SubTopic')`;
              if (!encontro) {
                rta = rta + filtro;
                encontro = true;
              } else {
                rta = rta + ` and ` + filtro;
              }
            }
          }
        }
      }
      if (rta === "&$filter=(") {
        return "";
      } else {
        return rta + `)`;
      }
    } else {
      return "";
    }
  }
  excel() {}
  search() {
    let str;
    if (this.props.location.state) {
      str = this.props.location.state.param.p.entrada;
    } else if (document.getElementById("inputBuscar").value !== "") {
      return `"${document.getElementById("inputBuscar").value}"`;
    } else {
      return "*";
    }
    str = JSON.stringify(str);
    console.log("str : " + str);
    if (str === '""') {
      console.log("entro aca");
      str = "*";
      this.setState({ filename: "Busqueda: " + str });
      return str;
    } else {
      this.setState({ filename: "Busqueda: " + str });
      return `${str}`;
    }
  }
  search2() {
    let str = document.getElementById("inputBuscar").value;

    console.log("str : " + str);
    if (!str) {
      console.log("entro aca");
      str = "*";
      this.setState({ filename: "Busqueda: " + str });
      return str;
    } else {
      this.setState({ filename: "Busqueda: " + str });
      return `${str}`;
    }
  }
  buscar(event) {
    this.setState({ loading: true });
    var query = this.crearQuery();
    var search = this.search();
    console.log(query);
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
    var urlFinal =
      "https://srchmodmbsim.search.windows.net/indexes/idx-mod-mbsim/docs?api-version=2019-05-06&search=" +
      search +
      "&highlight=CD_ESTADO_PROCESO, DS_CONCATENADO, DS_SOLICITUD, DS_AREA_MISIONAL, DS_HECHOS, DS_DEPENDENCIA, DS_MUNICIPIO_DEPEN, DS_DEPARTAMENTO_DEPEN, DS_NOMBRE_FUNCIONARIO,  CD_IUS, CD_IUC, DS_ETAPA, DS_ULTIMA_DECISION, DS_CONDUCTA, DS_IMPLICADO, DS_QUEJOSO, DS_TEMA &highlightPreTag=%2B&highlightPostTag=%2B" +
      query +
      "&$skip=" +
      this.state.skip +
      "&$count=true&queryType=full";
    console.log("URL FINAL : " + urlFinal);
    fetch(urlFinal, miInit)
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        //this.crearData(json);
        this.setState({
          rta: json,
          data: json,
          loading: false,
          resultados: json["@odata.count"],
        });
      });
  }
  buscar2(event) {
    this.setState({ loading: true });
    var query = this.crearQuery();
    var search = this.search2();
    console.log(query);
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
    var urlFinal =
      "https://srchmodmbsim.search.windows.net/indexes/idx-mod-mbsim/docs?api-version=2019-05-06&search=" +
      search +
      "&highlight=CD_ESTADO_PROCESO, DS_CONCATENADO, DS_SOLICITUD, DS_AREA_MISIONAL, DS_HECHOS, DS_DEPENDENCIA, DS_NOMBRE_FUNCIONARIO, DS_DEPARTAMENTO_DEPEN, DS_MUNICIPIO_DEPEN, CD_IUS, CD_IUC, DS_ETAPA, DS_ULTIMA_DECISION, DS_CONDUCTA, DS_IMPLICADO, DS_QUEJOSO, DS_TEMA &highlightPreTag=%2B&highlightPostTag=%2B" +
      query +
      "&$skip=" +
      this.state.skip +
      "&$filter=IDENTIFICADOR gt " +
      this.state.salto +
      "&$count=true&queryType=full";
    console.log("URL FINAL : " + urlFinal);
    fetch(urlFinal, miInit)
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        // this.crearData(json);
        // console.log("count: " + json["@odata"])
        if (this.state.salto > 0) {
          this.setState({
            rta: json,
            data: json,
            loading: false,
          });
        } else {
          this.setState({
            rta: json,
            data: json,
            loading: false,
            resultados: json["@odata.count"] + 3,
          });
        }
      });
  }
  siguiente = () => {
    console.log("skip antes : " + this.state.skip);
    let a = this.state.skip;
    this.setState(
      {
        skip: a + 50,
      },
      () => {
        console.log("skip despues: " + this.state.skip);
        this.buscar2();
      }
    );
  };

  anterior = () => {
    console.log("skip antes : " + this.state.skip);

    let a = this.state.skip;
    if (a >= 50) {
      this.setState(
        {
          skip: a - 50,
        },
        () => {
          console.log("skip despues: " + this.state.skip);
          this.buscar2();
        }
      );
    }
  };
  pagina = (event, page) => {
    console.log("page : " + page);
    let s = this.state.skip;
    let sa = page * 50;
    if (page >= 1000) {
      this.setState(
        {
          salto: page * 50 - 50,
          skip: 0,
          skip2: page * 50 - 50,
        },
        () => {
          console.log("skip2 despues: " + this.state.skip2);
          this.buscar2();
        }
      );
    } else {
      this.setState(
        {
          skip: page * 50 - 50,
          skip2: page * 50 - 50,
        },
        () => {
          console.log("skip despues: " + this.state.skip);
          this.buscar2();
        }
      );
    }
  };
  enter(event) {
    event.preventDefault();
    this.buscar2();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownHandler);
  }
  componentDidMount() {
    document.removeEventListener("keydown", this.keydownHandler);
    document.addEventListener("keydown", this.keydownHandler);
    this.buscar();
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
        var numtop = 0;
        var numsub = 0;
        var length = json["value"][0]["Topics"].length;

        for (var i = 0; i < length; i++) {
          console.log("entro a este for");
          numtop++;
          for (
            let j = 0;
            j < json["value"][0]["Topics"][i]["SubTopic"].length;
            j++
          ) {
            numsub++;
          }
        }
        console.log("LLEGO ACA " + numsub);
        let topics = json["value"][0]["Topics"];
        let lista = [];
        let listas = [];
        for (let index = 0; index < topics.length; index++) {
          var element = topics[index]["TopicName"];
          var sub = topics[index]["SubTopic"];
          sub = sub + "";
          sub = sub.split(",");
          console.log("sub: " + sub.length);
          for (let index = 0; index < sub.length; index++) {
            var e = sub[index];
            listas.push(e);
          }
          lista.push(element);
        }
        lista.sort();
        this.setState({
          topics: json,
          ntop: numtop,
          nsub: numsub,
          listaTopics: lista,
          listaSub: listas,
        });
      });
  }

  componentDidUpdate() {
    console.log("numsub es : " + this.state.nsub);
    console.log("acabo : " + this.state.acabo);
  }
  render() {
    let existe = false;
    if (this.props.location.state) {
      existe = true;
    }
    if (
      existe &&
      this.props.location.state.busqueda === "sencilla" &&
      this.state.loading
    ) {
      return (
        <div className="principal">
          <div className="row">
            <div className="col-2">
              <Link to={"/Home"}>
                <button className="btn home">
                  <i className="fa fa-home"></i>
                </button>
              </Link>
            </div>
            <div className="col-8"></div>
            <div className="col-2" style={{ textAlign: "center" }}>
              <button
                className="btn botonHome"
                style={{ marginTop: "30px" }}
                onClick={this.csv}
              >
                Descargar
              </button>

              {this.state.acabo ? (
                <CSVLink
                  data={data2}
                  filename={this.state.filename + ".csv"}
                  className="btn descarga"
                  target="_blank"
                  separator={"|"}
                >
                  <i className="fa fa-download"></i>
                </CSVLink>
              ) : (
                ""
              )}
              {this.state.loading2 ? (
                <img
                  src={require("../imagenes/loading3.gif")}
                  alt="loading..."
                ></img>
              ) : (
                ""
              )}
            </div>
          </div>
          <div id="divTituloc">
            <h1 id="h1Tituloc">Buscador SIM</h1>
          </div>
          <div id="divTitulo2c">
            <h3 id="h3Tituloc">Procuraduría General de la Nación</h3>
          </div>
          <div id="divBuscar" className="container-fluid">
            <div id="divSearch">
              <form id="formBuscar" onSubmit={this.enter}>
                <input
                  id="inputBuscar"
                  type="search"
                  autoFocus
                  placeholder="Ingrese su busqueda"
                />
                <i
                  className="fa fa-info"
                  aria-hidden="true"
                  data-toggle="modal"
                  data-target="#exampleModal"
                ></i>
              </form>
            </div>
            <h3 id="h3Titulo">
              {this.state.resultados
                ? this.state.resultados.toLocaleString()
                : ""}{" "}
              Resultados
            </h3>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      ¿Como buscar?
                    </h5>
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
                    <h5>Uso general</h5>
                    <p>
                      Se pueden buscar una o más palabras de manera que si busco
                      por ejemplo: conflicto armado, el buscador nos va a trear
                      todos los registros que contengan cualquiera de las dos
                      palabras o incluso ambas. Pero por el contrario, si
                      queremos que la busqueda nos traiga solo los registros que
                      contienen ambas palabras juntas debemos buscar haciendo
                      uso de comillas dobles: "conflicto armado".
                    </p>
                    <p>
                      Adicionalmente debemos recordar que el buscador contempla
                      el uso de tildes de manera que si se busca Andrés también
                      buscará Andres. Tambien, debemos tener en cuenta que el
                      buscador no contempla errores de ortografía por lo que es
                      recomendable que se hagan varias busquedas incluyendo
                      estos posibles errores.
                    </p>
                    <h5>Exportar resultados</h5>

                    <p>
                      Esta página incluye una funcionalidad para exportar los
                      resultados de la busqueda. Para esto se usa el botón de la
                      esquina superior derecha. Despues de hacer click, debemos
                      dejar que se carguen los datos. Luego de esto aparecerá un
                      nuevo icono que al presionar nos va a descargar un archivo
                      .csv para ser visualizado en excel. Las columnas de este
                      archivo van separadas por el carcter "|".
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="botonBuscar" style={{ marginTop: "50px" }}>
            <div className="row">
              <div className="col">
                <img
                  src={require("../imagenes/loading3.gif")}
                  alt="loading..."
                ></img>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              {/* <Resultados
                palabra={this.state.palabra}
                jsonp={this.state.rta}
                busqueda={this.state.busqueda}
              ></Resultados> */}
              <div className="row container-fluid">
                <div className="col-6"></div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (existe && this.props.location.state.busqueda === "sencilla") {
      return (
        <div className="principal">
          <div className="row">
            <div className="col-2">
              <Link to={"/Home"}>
                <button className="btn home">
                  <i className="fa fa-home"></i>
                </button>
              </Link>
            </div>
            <div className="col-8"></div>

            <div className="col-2" style={{ textAlign: "center" }}>
              <button
                className="btn botonHome"
                style={{ marginTop: "30px" }}
                onClick={this.csv}
              >
                Descargar
              </button>

              {this.state.acabo ? (
                <CSVLink
                  data={data2}
                  filename={this.state.filename + ".csv"}
                  className="btn descarga"
                  target="_blank"
                  separator={"|"}
                >
                  <i className="fa fa-download"></i>
                </CSVLink>
              ) : (
                ""
              )}
              {this.state.loading2 ? (
                <img
                  src={require("../imagenes/loading3.gif")}
                  alt="loading..."
                ></img>
              ) : (
                ""
              )}
            </div>
          </div>
          <div id="divTituloc">
            <h1 id="h1Tituloc">Buscador SIM</h1>
          </div>
          <div id="divTitulo2c">
            <h3 id="h3Tituloc">Procuraduría General de la Nación</h3>
          </div>
          <div id="divBuscar" className="container-fluid">
            <div id="divSearch" style={{ textAlign: "center" }}>
              <form
                id="formBuscar"
                onSubmit={this.enter}
                style={{ textAlign: "center" }}
              >
                <input
                  id="inputBuscar"
                  type="search"
                  autoFocus
                  placeholder="Ingrese su busqueda"
                />
                <i
                  className="fa fa-info"
                  aria-hidden="true"
                  data-toggle="modal"
                  data-target="#exampleModal"
                ></i>
              </form>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        ¿Como buscar?
                      </h5>
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
                      <h5>Uso general</h5>
                      <p>
                        Se pueden buscar una o más palabras de manera que si
                        busco por ejemplo: conflicto armado, el buscador nos va
                        a trear todos los registros que contengan cualquiera de
                        las dos palabras o incluso ambas. Pero por el contrario,
                        si queremos que la busqueda nos traiga solo los
                        registros que contienen ambas palabras juntas debemos
                        buscar haciendo uso de comillas dobles: "conflicto
                        armado".
                      </p>
                      <p>
                        Adicionalmente debemos recordar que el buscador
                        contempla el uso de tildes de manera que si se busca
                        Andrés también buscará Andres. Tambien, debemos tener en
                        cuenta que el buscador no contempla errores de
                        ortografía por lo que es recomendable que se hagan
                        varias busquedas incluyendo estos posibles errores.
                      </p>
                      <h5>Exportar resultados</h5>

                      <p>
                        Esta página incluye una funcionalidad para exportar los
                        resultados de la busqueda. Para esto se usa el botón de
                        la esquina superior derecha. Despues de hacer click,
                        debemos dejar que se carguen los datos. Luego de esto
                        aparecerá un nuevo icono que al presionar nos va a
                        descargar un archivo .csv para ser visualizado en excel.
                        Las columnas de este archivo van separadas por el
                        carcter "|".
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="divTitulo2">
              <h3 id="h3Titulo">
                {this.state.resultados
                  ? this.state.resultados.toLocaleString()
                  : ""}{" "}
                Resultados
              </h3>
            </div>
            <button
              className="botonHome btn"
              id="botonBu"
              onClick={() => {
                this.buscar2();
              }}
              style={estilobut}
            >
              Buscar
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-block" }}>
              <Pagination
                count={Math.trunc(this.state.resultados / 50) + 1}
                onChange={this.pagina}
                siblingCount={4}
                page={(this.state.skip2 + 50) / 50}
                size="large"
              />
            </div>
          </div>
          {/*           <h2 style={pagina}>Pag {(this.state.skip + 50) / 50}</h2>
           */}{" "}
          <div className="row">
            <div className="col">
              <Resultados
                palabra={this.state.palabra}
                jsonp={this.state.rta}
                busqueda={this.state.busqueda}
                skip={this.state.skip2}
              ></Resultados>
            </div>
          </div>
          {/*  <h2 style={pagina}>Pag {(this.state.skip + 50) / 50}</h2> */}
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-block" }}>
              <Pagination
                count={Math.trunc(this.state.resultados / 50) + 1}
                onChange={this.pagina}
                siblingCount={4}
                page={(this.state.skip2 + 50) / 50}
                size="large"
              />
            </div>
          </div>
        </div>
      );
    }
    if (this.state.loading && this.state.llegotopics) {
      return (
        <div className="principal">
          <div className="row">
            <div className="col-2">
              <Link to={"/Home"}>
                <button className="btn home">
                  <i className="fa fa-home"></i>
                </button>
              </Link>
            </div>
            <div className="col-8"></div>
            <div className="col-2" style={{ textAlign: "center" }}>
              <button
                className="btn botonHome"
                style={{ marginTop: "30px" }}
                onClick={this.csv}
              >
                Descargar
              </button>

              {this.state.acabo ? (
                <CSVLink
                  data={data2}
                  filename={this.state.filename + ".csv"}
                  className="btn descarga"
                  target="_blank"
                  separator={"|"}
                >
                  <i className="fa fa-download"></i>
                </CSVLink>
              ) : (
                ""
              )}
              {this.state.loading2 ? (
                <img
                  src={require("../imagenes/loading3.gif")}
                  alt="loading..."
                ></img>
              ) : (
                ""
              )}
            </div>
          </div>
          <div id="divTituloc">
            <h1 id="h1Tituloc">Buscador SIM</h1>
          </div>
          <div id="divTitulo2c">
            <h3 id="h3Tituloc">Procuraduría General de la Nación</h3>
          </div>
          <div id="divBuscar" className="container-fluid">
            <div id="divSearch" style={{ textAlign: "center" }}>
              <form
                id="formBuscar"
                onSubmit={this.enter}
                style={{ textAlign: "center" }}
              >
                <input
                  id="inputBuscar"
                  type="search"
                  autoFocus
                  placeholder="Ingrese su busqueda"
                />
                <i
                  className="fa fa-info"
                  aria-hidden="true"
                  data-toggle="modal"
                  data-target="#exampleModal"
                ></i>
              </form>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        ¿Como buscar?
                      </h5>
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
                      <h5>Uso general</h5>
                      <p>
                        Se pueden buscar una o más palabras de manera que si
                        busco por ejemplo: conflicto armado, el buscador nos va
                        a trear todos los registros que contengan cualquiera de
                        las dos palabras o incluso ambas. Pero por el contrario,
                        si queremos que la busqueda nos traiga solo los
                        registros que contienen ambas palabras juntas debemos
                        buscar haciendo uso de comillas dobles: "conflicto
                        armado".
                      </p>
                      <p>
                        Adicionalmente debemos recordar que el buscador
                        contempla el uso de tildes de manera que si se busca
                        Andrés también buscará Andres. Tambien, debemos tener en
                        cuenta que el buscador no contempla errores de
                        ortografía por lo que es recomendable que se hagan
                        varias busquedas incluyendo estos posibles errores.
                      </p>
                      <h5>Exportar resultados</h5>

                      <p>
                        Esta página incluye una funcionalidad para exportar los
                        resultados de la busqueda. Para esto se usa el botón de
                        la esquina superior derecha. Despues de hacer click,
                        debemos dejar que se carguen los datos. Luego de esto
                        aparecerá un nuevo icono que al presionar nos va a
                        descargar un archivo .csv para ser visualizado en excel.
                        Las columnas de este archivo van separadas por el
                        carcter "|".
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row" id="div1">
            <div className="col">
              <Params
                callback={this.traerParams}
                parametros={this.state.parametros}
                paramsSearch={this.paramSearch}
                informacion={this.state.informacion}
                topics={this.state.topics}
              ></Params>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <img
                src={require("../imagenes/loading3.gif")}
                alt="loading..."
              ></img>
            </div>
          </div>
        </div>
      );
    } else if (this.state.llegotopics) {
      return (
        <div className="principal">
          <div className="row">
            <div className="col-2">
              <Link to={"/Home"}>
                <button className="btn home">
                  <i className="fa fa-home"></i>
                </button>
              </Link>
            </div>
            <div className="col-8"></div>

            <div className="col-2" style={{ textAlign: "center" }}>
              <button
                className="btn botonHome"
                style={{ marginTop: "30px" }}
                onClick={this.csv}
              >
                Descargar
              </button>

              {this.state.acabo ? (
                <CSVLink
                  data={data2}
                  filename={this.state.filename + ".csv"}
                  className="btn descarga"
                  target="_blank"
                  separator={"|"}
                >
                  <i className="fa fa-download"></i>
                </CSVLink>
              ) : (
                ""
              )}
              {this.state.loading2 ? (
                <img
                  src={require("../imagenes/loading3.gif")}
                  alt="loading..."
                ></img>
              ) : (
                ""
              )}
            </div>
          </div>

          <div id="divTituloc">
            <h1 id="h1Tituloc">Buscador SIM</h1>
          </div>
          <div id="divTitulo2c">
            <h3 id="h3Tituloc">Procuraduría General de la Nación</h3>
          </div>
          <div id="divBuscar" className="container-fluid">
            <div id="divSearch" style={{ textAlign: "center" }}>
              <form
                id="formBuscar"
                onSubmit={this.enter}
                style={{ textAlign: "center" }}
              >
                <input
                  id="inputBuscar"
                  type="search"
                  autoFocus
                  placeholder="Ingrese su busqueda"
                />
                <i
                  className="fa fa-info"
                  aria-hidden="true"
                  data-toggle="modal"
                  data-target="#exampleModal"
                ></i>
              </form>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        ¿Como buscar?
                      </h5>
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
                      <h5>Uso general</h5>
                      <p>
                        Se pueden buscar una o más palabras de manera que si
                        busco por ejemplo: conflicto armado, el buscador nos va
                        a trear todos los registros que contengan cualquiera de
                        las dos palabras o incluso ambas. Pero por el contrario,
                        si queremos que la busqueda nos traiga solo los
                        registros que contienen ambas palabras juntas debemos
                        buscar haciendo uso de comillas dobles: "conflicto
                        armado".
                      </p>
                      <p>
                        Adicionalmente debemos recordar que el buscador
                        contempla el uso de tildes de manera que si se busca
                        Andrés también buscará Andres. Tambien, debemos tener en
                        cuenta que el buscador no contempla errores de
                        ortografía por lo que es recomendable que se hagan
                        varias busquedas incluyendo estos posibles errores.
                      </p>
                      <h5>Exportar resultados</h5>

                      <p>
                        Esta página incluye una funcionalidad para exportar los
                        resultados de la busqueda. Para esto se usa el botón de
                        la esquina superior derecha. Despues de hacer click,
                        debemos dejar que se carguen los datos. Luego de esto
                        aparecerá un nuevo icono que al presionar nos va a
                        descargar un archivo .csv para ser visualizado en excel.
                        Las columnas de este archivo van separadas por el
                        carcter "|".
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="divTitulo2">
              <h3 id="h3Titulo">
                {this.state.resultados
                  ? this.state.resultados.toLocaleString()
                  : ""}{" "}
                Resultados
              </h3>
            </div>
          </div>

          <div className="row" id="div1">
            <div className="col">
              <Params
                callback={this.traerParams}
                parametros={this.state.parametros}
                paramsSearch={this.paramSearch}
                informacion={this.state.informacion}
                topics={this.state.topics}
              ></Params>
            </div>
          </div>
          <button
            className="botonHome btn"
            id="botonBu"
            onClick={() => {
              this.buscar2();
            }}
            style={estilobut}
          >
            Buscar
          </button>
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-block" }}>
              <Pagination
                count={Math.trunc(this.state.resultados / 50) + 1}
                onChange={this.pagina}
                siblingCount={4}
                page={(this.state.skip2 + 50) / 50}
                size="large"
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Resultados
                palabra={this.state.palabra}
                jsonp={this.state.rta}
                busqueda={this.state.busqueda}
                skip={this.state.skip2}
              ></Resultados>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-block" }}>
              <Pagination
                count={Math.trunc(this.state.resultados / 50) + 1}
                onChange={this.pagina}
                siblingCount={4}
                page={(this.state.skip2 + 50) / 50}
                size="large"
              />
            </div>
          </div>
        </div>
      );
    } else return <div></div>;
  }
}

export default ContenedorP;
