import React, { Component } from 'react';

class Detalle extends Component {
    state ={
        id: ""
    };
   
    checkifnull(i) {
        if (!i) {
          return <p>No Reportada</p>
        }
        else return <p>{i}</p>
      }
      componentDidMount(){
       
      }
      funcion(){
         this.setState({
             id: this.props.registro.CD_CASO
         });
      }
    render() {
        return (
            <div>
                <button style={{marginBottom: 20, justifyContent: 'center'}}
          type="button"
          className="botonHome btn"
          data-toggle="modal"
          data-target={"#modal"+this.props.registro.CD_CASO}
        >
          Detalle
        </button>
        <div
          className="modal fade"
          id={"modal"+this.props.registro.CD_CASO}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  {this.props.registro.CD_CASO}
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
                <div className="container">
                  <div className="row">
                    <div className="col-sm">
                      <h5>Fecha de radicación de la PGN</h5>
                      {this.checkifnull(this.props.registro.DT_RADICACION_PGNN)}  
                    </div>
                    <div className="col-sm">
                      <h5>Fecha de los hechos</h5>
                      {this.checkifnull(this.props.registro.DT_HECHOS)}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm">
                      <h5>Departamento de los hechos</h5>
                      {this.checkifnull(this.props.registro.DS_DEPARTAMENTO_HECHOS)}  
                    </div>
                    <div className="col-sm">
                      <h5>Municipio de los hechos</h5>
                      {this.checkifnull(this.props.registro.DS_MUNICIPIO_HECHOS)}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm">
                      <h5>Descripción del proceso</h5>
                      {this.checkifnull(this.props.registro.descripcion)}  
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm">
                        <h5>Dependencia</h5>
                        {this.checkifnull(this.props.registro.DS_DEPENDENCIA)}  
                    </div>
                    <div className="col-sm">
                        <h5>Nombre del funcionario a cargo del proceso</h5>
                        {this.checkifnull(this.props.registro.DS_NOMBRE_FUNCIONARIO)}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm">
                      <h5>Implicado</h5>
                      {this.checkifnull(this.props.registro.DS_IMPLICADO)}  
                    </div>
                    <div className="col-sm">
                      <h5>Quejoso</h5>
                      {this.checkifnull(this.props.registro.DS_QUEJOSO)}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm">
                      <h5>Código IUS</h5>
                      {this.checkifnull(this.props.registro.CD_IUS)}  
                    </div>
                    <div className="col-sm">
                      <h5>Código IUC</h5>
                      {this.checkifnull(this.props.registro.CD_IUC)}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm">
                      <h5>Área Misional </h5>
                      {this.checkifnull(this.props.registro.DS_AREA_MISIONAL)}  
                    </div>
                    <div className="col-sm">
                      <h5>Etapa</h5>
                      {this.checkifnull(this.props.registro.DS_ETAPA)}
                    </div>
                  </div>
                  <hr />
                </div> 
                <h5>Última decision tomada</h5>
                  {this.checkifnull(this.props.registro.DS_ULTIMA_DECISION)}
                <hr />
                <h5>Tipo de actuación</h5>
                  {this.checkifnull(this.props.registro.DS_TIPO_ACTUACION)}
                <hr />
                <h5>Estado Actual</h5>
                  {this.checkifnull(this.props.registro.CD_ESTADO_PROCESO)}
                <hr />
                <h5>Conducta</h5>
                  {this.checkifnull(this.props.registro.DS_CONDUCTA)}
                  <hr />
                <h5>Tema</h5>
                  {this.checkifnull(this.props.registro.topics[0].TopicName)}
                  <hr />
                <h5>SubTema</h5>
                  {this.checkifnull(this.props.registro.topics[0].SubTopic)}
              </div>
              <div className="modal-footer">
                
              </div>
            </div>
          </div>
        </div>
            </div>
        );
    }
}

export default Detalle;