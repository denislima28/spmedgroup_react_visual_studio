import React, { Component } from "react";
import logotipo from "../../../assets/img/logotipo.png";
import '../../../assets/css/paineladm/cadastrar/usuarioscadastrar.css';
import Axios from 'axios';
import apiService from "../../../services/apiService";

class UsuariosCadastrar extends Component{

    constructor(){
        super();

        this.state = {
            email: '',
            senha: '',
            idTipoUsario: '',
            lista_usuarios: []
        };
    }

    // usar o componentDidMount não funcionou aqui. Ao contrário, só fazia acontecer falsos negativos. 
    //Ou seja, barrava ações de usuários que deveriam ser autorizados.

    atualizaEstadoEmail(event){
        this.setState({ email: event.target.value });
    }

    atualizaEstadoSenha(event){
        this.setState({ senha: event.target.value });
    }

    atualizaEstadoIdTipoUsario(event){
        this.setState({ idTipoUsario: event.target.value });
    }
    
    cadastrarUsuarios(event) {
        event.preventDefault();
        
        let usuarios = {
            email: this.state.email,
            senha: this.state.senha,
            idTipoUsario: this.state.idTipoUsario
        };

        Axios.post('http://192.168.3.70:5000/api/usuarios', usuarios,
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('usuario_spmedgroup')
            }
        }
        )
        .then(res => {
            let usuarios = res.data;
            this.setState({ lista_usuarios : usuarios});
            alert("Usuário cadastrado");
        })  
        
        console.log(usuarios);
    }

    

    render () {
        return (
            <main className="usuarios_cadastrar">
                <div className="usuarios_cadastrar_logotipo">
                    <img src={logotipo} />
                </div>
        
                <h1>Painel do Administrador</h1>

                <div className="formulario_usuarios_consultas">
                    <form onSubmit={this.cadastrarUsuarios.bind(this)}>
                        <div className="margens_usuarios_consultas">
                            <input 
                            placeholder="Digite o e-mail do usuário" required              
                            type="email" 
                            value={this.state.email}
                            onChange={this.atualizaEstadoEmail.bind(this)}
                            name="email"
                            id="email"/>
                        </div>
                        
                        <div className="margens_usuarios_consultas">
                            <input 
                            placeholder="Digite a senha do usuário" required              
                            type="password" 
                            value={this.state.senha}
                            onChange={this.atualizaEstadoSenha.bind(this)}
                            name="senha"
                            id="senha"/>
                        </div>

                        <div className="margens_usuarios_consultas">
                            <select
                            id="opcao_usuario"
                            value={this.state.idMedico}
                            onChange={this.atualizaEstadoIdTipoUsario.bind(this)} required>
                                <option>Selecione o tipo de usuário</option>
                                <option value="1">ADM</option>
                                <option value="2">Médico</option>
                                <option value="3">Paciente</option>
                            </select>       
                        </div>
                        {/* Se não der certo com nomes, tente números */}

                        <div className="botao_cadastrar_usuarios">
                            
                            {/* <input type="button" value="CADASTRAR-SE"></input> */}

                            <button type="submit" className="botao_cadastrar">CADASTRAR USUÁRIO</button>
                            
                        </div>
                    </form>
                </div>

            </main>
        )
    }

}

export default UsuariosCadastrar;