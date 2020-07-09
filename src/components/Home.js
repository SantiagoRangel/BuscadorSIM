import React from "react";
import logo from "../imagenes/logoProcu.png";
import { Link } from "react-router-dom";

const styleDiv = {
  marginTop: "30px",
};

const p = {};
var prueba = () => {
  if (document.getElementById("inputBuscar").value);
  {
    var valor = document.getElementById("inputBuscar").value;
    p.entrada = valor;
  }
};

const cosa = (event) => {
  event.preventDefault();

  console.log("holas");
};
function Home() {
  return (
    <div id="divHome">
      <div id="divTitulo">
        <h1 id="h1Titulo">Buscador SIM</h1>
      </div>
      <div id="divTitulo2">
        <h3 id="h3Titulo">Procuraduría General de la Nación</h3>
      </div>
      <div id="divSearch">
        <form id="formBuscar" onSubmit={cosa} action="/Buscar">
          <input
            id="inputBuscar"
            type="search"
            placeholder="Ingrese su busqueda"
            autoFocus
          />
          {/*  <i className="fa fa-search"></i> */}
          <i
            class="fa fa-info"
            aria-hidden="true"
            data-toggle="modal"
            data-target="#exampleModal"
          ></i>
        </form>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ¿Como buscar?
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h5>Uso general</h5>
              <p>
                Se pueden buscar una o más palabras de manera que si busco por
                ejemplo: conflicto armado, el buscador nos va a trear todos los
                registros que contengan cualquiera de las dos palabras o incluso
                ambas. Pero por el contrario, si queremos que la busqueda nos
                traiga solo los registros que contienen ambas palabras juntas
                debemos buscar haciendo uso de comillas dobles: "conflicto
                armado".
              </p>
              <p>
                Adicionalmente debemos recordar que el buscador contempla el uso
                de tildes de manera que si se busca Andrés también buscará
                Andres. Tambien, debemos tener en cuenta que el buscador no
                contempla errores de ortografía por lo que es recomendable que
                se hagan varias busquedas incluyendo estos posibles errores.
              </p>
              <h5>Exportar resultados</h5>

              <p>
                Esta página incluye una funcionalidad para exportar los
                resultados de la busqueda. Para esto se usa el botón de la
                esquina superior derecha. Despues de hacer click, debemos dejar
                que se carguen los datos. Luego de esto aparecerá un nuevo icono
                que al presionar nos va a descargar un archivo .csv para ser
                visualizado en excel. Las columnas de este archivo van separadas
                por el carcter "|".
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={styleDiv}>
        <div className="col">
          <Link
            to={{
              pathname: "/Buscar",
              state: {
                busqueda: "sencilla",
                param: { p },
              },
            }}
          >
            <button className="botonHome btn" id="botonB" onClick={prueba}>
              Buscar
            </button>
          </Link>
        </div>
        <div className="col">
          <Link
            to={{
              pathname: "/Buscar",
              state: {
                busqueda: "avanzada",
                param: { p },
              },
            }}
          >
            <button className="botonHome btn" id="botonBA" onClick={prueba}>
              Busqueda Avanzada
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
