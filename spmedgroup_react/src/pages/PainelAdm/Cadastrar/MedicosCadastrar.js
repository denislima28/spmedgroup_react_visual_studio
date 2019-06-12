import React, { Component } from "react";
import logotipo from "../../../assets/img/logotipo.png";
import '../../../assets/css/paineladm/cadastrar/medicoscadastrar.css';
import Axios from 'axios';
import apiService from "../../../services/apiService";

class MedicosCadastrar extends Component{

    constructor(){
        super();

        this.state = {
            nome: '',
            crm: '',
            endereco: '',
            telefone: '',
            idUsuario: '',
            idEspecialidade: '',
            idClinica: '',
            lista_medicos: []
        };
    }

    atualizaEstadoNome(event){
        this.setState({ nome: event.target.value });
    }

    atualizaEstadoCRM(event){
        this.setState({ crm: event.target.value });
    }

    atualizaEstadoEndereco(event){
        this.setState({ endereco: event.target.value });
    }

    atualizaEstadoTelefone(event){
        this.setState({ telefone: event.target.value });
    }

    atualizaEstadoIdUsuario(event){
        this.setState({ idUsuario: event.target.value });
    }

    atualizaEstadoIdEspecialidade(event){
        this.setState({ idEspecialidade: event.target.value });
    }

    atualizaEstadoIdClinica(event){
        this.setState({ idClinica: event.target.value });
    }

    cadastrarMedicos(event) {
        
        event.preventDefault();
        
        let medicos = {
            nome: this.state.nome,
            crm: this.state.crm,
            endereco: this.state.endereco,
            telefone: this.state.telefone,
            idUsuario: this.state.idUsuario,
            idEspecialidade: this.state.idEspecialidade,
            idClinica: this.state.idClinica
        };


        Axios.post('http://192.168.3.70:5000/api/medicos', medicos,
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('usuario_spmedgroup')
            }
        }
        )
        .then(res => {
            let medicos = res.data;
            this.setState({ lista_medicos : medicos});
            alert("Médico cadastrado");
        })
        .catch(erro => {
             console.log(erro);
             alert("Erro. Médico não cadastrado");
        })  
        
        console.log(medicos);
    }

    render () {
        return (
            <main className="medicos_cadastrar">
                <div className="medicos_cadastrar_logotipo">
                    <img src={logotipo} />
                </div>
        
                <h1>Painel do Administrador</h1>

                <div className="formulario_cadastrar_medicos">
                    <form onSubmit={this.cadastrarMedicos.bind(this)}>
                        <div className="margens_cadastrar_medicos">
                            Nome  
                            <input
                            required
                            value={this.state.nome}
                            onChange={this.atualizaEstadoNome.bind(this)}
                            id="nome"/>
                        </div>

                        <div className="margens_cadastrar_medicos">
                            CRM
                            <input
                            required
                            value={this.state.crm}
                            onChange={this.atualizaEstadoCRM.bind(this)}
                            id="crm"/>
                        </div>

                        <div className="margens_cadastrar_medicos">
                            Endereço
                            <input
                            required
                            value={this.state.endereco}
                            onChange={this.atualizaEstadoEndereco.bind(this)}
                            id="endereco"/>
                        </div>

                        <div className="margens_cadastrar_medicos">
                            Telefone
                            <input
                            required
                            value={this.state.telefone}
                            onChange={this.atualizaEstadoTelefone.bind(this)}
                            id="telefone"/>
                        </div>

                        <div className="margens_cadastrar_medicos">
                            IdUsuário
                            <input
                            required
                            value={this.state.idUsuario}
                            onChange={this.atualizaEstadoIdUsuario.bind(this)}
                            id="idusuario"/>
                        </div>
                {/* Se colocar uma id que não exista na tabela de usuários, o cadastro não acontece. */}

                        <div className="margens_cadastrar_medicos">
                            IdEspecialidade
                            <input
                            required
                            value={this.state.idEspecialidade}
                            onChange={this.atualizaEstadoIdEspecialidade.bind(this)}
                            id="idusuario"/>
                        </div>

                        <div className="margens_cadastrar_medicos">
                            IdClínica
                            <input
                            required
                            value={this.state.idClinica}
                            onChange={this.atualizaEstadoIdClinica.bind(this)}
                            id="idclinica"/>
                        </div>

                        <div className="botao_cadastrar_medicos">
                            <button type="submit" className="botao_cadastrar">CADASTRAR MÉDICO(A)</button>
                        </div>
                    </form>

                </div>

            </main>
        )
    }

}

export default MedicosCadastrar;