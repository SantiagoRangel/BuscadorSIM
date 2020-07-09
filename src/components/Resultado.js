import React, { Component } from "react";

class Resultado extends Component {
  constructor(props) {
    super(props);
    this.mas = this.mas.bind(this);
  }

  checkifnullTopic(i) {
    if(this.props.registro.Topics.length >0){
      let lista = this.props.registro.Topics;
      // console.log(lista);
       let list = []
       for (var i=0;i<lista.length;i++){
         for (var j=0;j<lista[i].SubTopic.length;j++){
           var temp = {topic: lista[i].TopicName, subtopic: lista[i].SubTopic[j]}
           list.push(temp);
         }
   
       }
       console.log(list);
       return (
         <table className="table table-bordered" style={{width:"100%"}}>
            <thead>
       <tr>
   
         <th >Sub Tema</th>
         <th >Tema</th>
         
       </tr>
     </thead>
           <tbody>
             {list.map((sub) => (
               <tr>
                 <td>
                   {sub.subtopic}
                 </td>
                 
                 <td>
                   {sub.topic}
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       );
             }
       else{
         return <div>No registra</div>
       }
    
   
  }
  forloop(arr) {
    var arr1 = arr;
    arr1.splice(arr1.length - 1, 1);
    arr1.splice(0, 1);

    return arr1.map((e, i) => (i % 2 === 0 ? <mark>{e}</mark> : <a>{e}</a>));
  }
  checkifnull(i, fecha) {
    if (fecha) {
      var t = this.props.registro[i].toString();

      t = t.substr(0, 10);

      return <p>{t}</p>;
    }
    if (this.props.registro["@search.highlights"]) {
      if (this.props.registro["@search.highlights"][i]) {
        let rta = this.props.registro["@search.highlights"][i][0] + "";
        rta = rta.replace(/(\r\n|\n|\r)/gm, "");
        rta = rta.split("+");
        let final = rta[rta.length - 1];

        //console.log("highlight");
        return (
          <p>
            {rta[0]} {this.forloop(rta)} {final}
          </p>
        );
      } else if (!this.props.registro[i]) {
        return <p>No Reportada</p>;
      } else
        return <p>{this.props.registro[i].replace(/(\r\n|\n|\r)/gm, "")}</p>;
    }
    if (!this.props.registro[i]) {
      return <p>No Reportada</p>;
    } else return <p>{this.props.registro[i].replace(/(\r\n|\n|\r)/gm, "")}</p>;
  }
  componentDidMount() {
    console.log(this.props.registro.DS_SOLICITUD);
  }
  imprimir() {
    //console.log(this.props.registro.CD_CASO);
  }
  arreglar(input) {
    var str = "";
    str = str + input;
    str = str.substr(0, 4);

    return str;
  }
  mas() {
    console.log("#colap" + this.props.registro.CD_CASO);
  }
  render() {
    return (
      <div className="container-fluid">
        <div
          className="col-12 card p-3 mb-5 ml-4 justify-content-center shadow"
          style={{ marginLeft: 20 }}
        >
          <div className="row">
            <div className="col-2">
              <h2>No. {this.props.indice}</h2>
            </div>
            <div className="col-8">
              <div className="row">
                <h5 className="col-2 text-center">IUC: {this.props.id}</h5>
                <h5 className="col-2 text-center">
                  IUS: {this.props.registro.CD_IUS}
                </h5>
                <h5 className="col-2 ">
                  Similitud:{" "}
                  {this.arreglar(this.props.registro["@search.score"])}
                </h5>
                <h5 className="col-2 ">
                  Estado: {this.props.registro.CD_ESTADO_PROCESO}
                </h5>
                <h5 className="col-4">
                  Area Misional: {this.props.registro.DS_AREA_MISIONAL}
                </h5>
              </div>
            </div>
            <div className="col-2">
              <i
                className="fa fa-plus"
                style={{ padding: 0 }}
                onClick={this.mas}
                data-toggle="collapse"
                data-target={"#colap" + this.props.registro.CD_CASO}
              ></i>
            </div>
          </div>

          <div>
            <div className="container-fluid">
              <h5 className="titulos">Descripción solicitud: </h5>
              {this.checkifnull("DS_SOLICITUD")}
            </div>
            <div className="titulos">
              <h5>Descripción hechos: </h5>
              <p>{this.checkifnull("DS_HECHOS")}</p>
            </div>
          </div>

          <div id={"colap" + this.props.registro.CD_CASO} className="collapse">
            <hr />

            <div className="row">
              <div className="col-3">
                <h5>Fecha de radicación de la PGN</h5>
                {this.checkifnull("DT_RADICACION_PGN", true)}
              </div>
              <div className="col-3">
                <h5>Fecha de los hechos</h5>
                {this.checkifnull("DT_HECHOS", true)}
              </div>
              <div className="col-3">
                <h5>Fecha Queja</h5>
                {this.checkifnull("DT_QUEJA", true)}
              </div>
              <div className="col-3">
                <h5>Etapa</h5>
                {this.checkifnull("DS_ETAPA", true)}
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-3">
                <h5>Dependencia</h5>
                {this.checkifnull("DS_DEPENDENCIA")}
              </div>
              <div className="col-3">
                <h5>Funcionario</h5>
                {this.checkifnull("DS_NOMBRE_FUNCIONARIO")}
              </div>
              <div className="col-3">
                <h5>Departamento</h5>
                {this.checkifnull("DS_DEPARTAMENTO_DEPEN")}
              </div>
              <div className="col-3">
                <h5>Municipio</h5>
                {this.checkifnull("DS_MUNICIPIO_DEPEN")}
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-3">
                <h5>Intervinientes</h5>
                {this.checkifnull("DS_QUEJOSO")}
              </div>
              <div className="col-3">
                <h5>Implicados</h5>
                {this.checkifnull("DS_IMPLICADO")}
              </div>
              <div className="col-3">
                <h5>Conductas</h5>
                {this.checkifnull("DS_CONDUCTA")}
              </div>
              <div className="col-3">
                <h5>Entidades</h5>
                {this.checkifnull("DS_ENTIDAD")}
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-3">
                <h5>Ultima Decisión</h5>
                {this.checkifnull("DS_ULTIMA_DECISION")}
              </div>
              <div className="col-9">
                <h5>Temas</h5>
                {this.checkifnullTopic("Topics/TopicName")}
              </div>
            </div>

            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default Resultado;
