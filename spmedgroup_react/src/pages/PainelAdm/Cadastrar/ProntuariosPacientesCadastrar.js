import React, { Component } from "react";
import logotipo from "../../../assets/img/logotipo.png";
import '../../../assets/css/paineladm/cadastrar/prontuariospacientescadastrar.css';
import Axios from 'axios';
import apiService from "../../../services/apiService";

class ProntuariosPacientesCadastrar extends Component{
    constructor(){
        super();

        this.state = {
            nome: '',
            endereco: '',
            telefone: '',
            rg: '',
            cpf: '',
            dataNascimento: '',
            idUsuario: '',
            lista_prontuariospacientes: []
        };
    }

    atualizaEstadoNome(event){
        this.setState({ nome: event.target.value });
    }

    atualizaEstadoEndereco(event){
        this.setState({ endereco: event.target.value });
    }

    atualizaEstadoTelefone(event){
        this.setState({ telefone: event.target.value });
    }

    atualizaEstadoRG(event){
        this.setState({ rg: event.target.value });
    }

    atualizaEstadoCPF(event){
        this.setState({ cpf: event.target.value });
    }

    atualizaEstadoDataNascimento(event){
        this.setState({ dataNascimento: event.target.value });
    }

    atualizaEstadoIdUsuario(event){
        this.setState({ idUsuario: event.target.value });
    }

    cadastrarProntuariosPacientes(event) {

        event.preventDefault();

        let prontuariospacientes = {
            nome: this.state.nome,
            endereco: this.state.endereco,
            telefone: this.state.telefone,
            rg: this.state.rg,
            cpf: this.state.cpf,
            dataNascimento: this.state.dataNascimento,
            idUsuario: this.state.idUsuario
        };
    

    Axios.post('http://192.168.3.70:5000/api/prontuariospacientes', prontuariospacientes,
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('usuario_spmedgroup')
          }
    })
    .then(res => {
        let prontuariospacientes = res.data;
        this.setState({ lista_prontuariospacientes : prontuariospacientes});
        alert("Paciente cadastrado(a).");
    })
    .catch(erro => {
         console.log(erro);
         alert("Erro. Paciente não cadastrado(a).");
    })
    
    
    console.log(prontuariospacientes);

    }

render () {
    return (
        <main className="prontuariospacientes_cadastrar">
            <div className="prontuariospacientes_cadastrar_logotipo">
                <img src={logotipo} />
            </div>

            <h1>Painel do Administrador</h1>

            <div className="formulario_cadastrar_prontuariospacientes">
                <form onSubmit={this.cadastrarProntuariosPacientes.bind(this)}>
                    <div className="margens_cadastrar_prontuariospacientes">
                        Nome<input
                        required
                        id="nome"
                        value={this.state.nome}
                        onChange={this.atualizaEstadoNome.bind(this)}/>
                    </div>

                    <div className="margens_cadastrar_prontuariospacientes">
                        Endereço<input
                        required
                        id="endereco"
                        value={this.state.endereco}
                        onChange={this.atualizaEstadoEndereco.bind(this)}/>
                    </div>

                    <div className="margens_cadastrar_prontuariospacientes">
                        Telefone<input
                        id="telefone"
                        value={this.state.telefone}
                        onChange={this.atualizaEstadoTelefone.bind(this)}/>
                    </div>

                    <div className="margens_cadastrar_prontuariospacientes">
                        RG<input
                        required
                        id="rg"
                        value={this.state.rg}
                        onChange={this.atualizaEstadoRG.bind(this)}/>
                    </div>

                    <div className="margens_cadastrar_prontuariospacientes">
                        CPF<input
                        required
                        id="cpf"
                        value={this.state.cpf}
                        onChange={this.atualizaEstadoCPF.bind(this)}/>
                    </div>

                    <div className="margens_cadastrar_prontuariospacientes">
                        Nascimento<input
                        required
                        id="datanascimento"
                        value={this.state.dataNascimento}
                        onChange={this.atualizaEstadoDataNascimento.bind(this)}/>
                    </div>

                    <div className="margens_cadastrar_prontuariospacientes">
                        ID usuário<input
                        required
                        id="idusuario"
                        value={this.state.idUsuario}
                        onChange={this.atualizaEstadoIdUsuario.bind(this)}/>
                    </div>

                    <button type="submit" className="botao_cadastrar">CADASTRAR PACIENTE</button>

                </form>
            </div>

        </main>
    )
    }

}

export default ProntuariosPacientesCadastrar;