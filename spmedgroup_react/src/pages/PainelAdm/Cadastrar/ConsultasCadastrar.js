import React, { Component } from "react";
import logotipo from "../../../assets/img/logotipo.png";
import '../../../assets/css/paineladm/cadastrar/consultascadastrar.css';
import Axios from 'axios';
import apiService from "../../../services/apiService";

class ConsultasCadastrar extends Component{

    constructor(){
        super();

        this.state = {
            dataConsulta: '',
            situacao: '',
            idMedico: '',
            idProntuarioPaciente: '',
            lista_consultas: []
        };
    }

     // usar o componentDidMount não funcionou aqui. Ao contrário, só fazia acontecer falsos negativos. Ou seja, barrava ações de usuários que deveriam ser autorizados.

    atualizaEstadoDataConsulta(event){
        this.setState({ dataConsulta: event.target.value });
    }

    atualizaEstadoSituacao(event){
        this.setState({ situacao: event.target.value });
    }

    atualizaEstadoIdMedico(event){
        this.setState({ idMedico: event.target.value });
    }

    atualizaEstadoIdProntuarioPaciente(event){
        this.setState({ idProntuarioPaciente: event.target.value });
    }
    
    cadastrarConsultas(event) {
        //O cadastro funciona, mas, por enquanto, apenas colocando os IDs do paciente e do médico.
        
        event.preventDefault();
        
        let consultas = {
            dataConsulta: this.state.dataConsulta,
            situacao: this.state.situacao,
            idMedico: this.state.idMedico,
            idProntuarioPaciente: this.state.idProntuarioPaciente
        };


        Axios.post('http://192.168.3.70:5000/api/consultas', consultas,
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('usuario_spmedgroup')
            }
        }
        )
        .then(res => {
            let consultas = res.data;
            this.setState({ lista_consultas : consultas});
            alert("Consulta cadastrada");
        })
        .catch(erro => {
             console.log(erro);
             alert("Erro. Consulta não cadastrada");
        })  
        
        console.log(consultas);
    }

    

    render () {
        return (
            <main className="consultas_cadastrar">
                <div className="consultas_cadastrar_logotipo">
                    <img src={logotipo} />
                </div>
        
                <h1>Painel do Administrador</h1>

                O cadastro funciona, mas, por enquanto, apenas colocando os IDs do paciente e do médico.

                <div className="formulario_cadastrar_consultas">
                    <form onSubmit={this.cadastrarConsultas.bind(this)}>
                        <div className="margens_cadastrar_consultas">
                            <input 
                            placeholder="dd/MM/yyyy" required              
                            type="date" 
                            value={this.state.dataConsulta}
                            onChange={this.atualizaEstadoDataConsulta.bind(this)}
                            name="dataconsulta"
                            id="dataconsulta"/>
                        </div>
                        
                        <div className="margens_cadastrar_consultas">
                            Situação      <select
                            id="opcao_situacao"
                            value={this.state.situacao}
                            onChange={this.atualizaEstadoSituacao.bind(this)} required>
                                <option>Selecione</option>
                                <option value="Agendada">Agendada</option>
                                <option value="Realizada">Realizada</option>
                                <option value="Cancelada">Cancelada</option>
                            </select>       
                        </div>

                        {/* Talvez colocar o option value nos itens abaixo também */}

                        <div className="margens_cadastrar_consultas">
                            Médico    <input
                            id="opcao_medico"
                            value={this.state.idMedico}
                            onChange={this.atualizaEstadoIdMedico.bind(this)} required>
                            </input>       
                        </div>
                        
                        <div className="margens_cadastrar_consultas">
                            Paciente    <input
                            id="opcao_paciente"
                            value={this.state.idProntuarioPaciente}
                            onChange={this.atualizaEstadoIdProntuarioPaciente.bind(this)} required>
                            </input>       
                        </div>

                            <button type="submit" className="botao_cadastrar">CADASTRAR CONSULTA</button>
                       
                    </form>
                </div>

            </main>
        )
    }

}

export default ConsultasCadastrar;