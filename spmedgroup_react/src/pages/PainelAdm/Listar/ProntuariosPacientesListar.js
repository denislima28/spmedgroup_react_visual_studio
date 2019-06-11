import React, { Component } from "react";
import logotipo from "../../../assets/img/logotipo.png";
import '../../../assets/css/paineladm/listar/prontuariospacienteslistar.css';
import Axios from 'axios';

class ProntuariosPacientesListar extends Component
{
    constructor(){
        super();

        this.state = {
            lista_prontuariospacientes: []
        };
    }
    
    
    buscarProntuariosPacientes (){
        Axios.get('http://192.168.3.70:5000/api/prontuariospacientes',
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('usuario_spmedgroup')
            }
        }
        )
        .then(res => {
            const prontuariospacientes = res.data;
            this.setState({ lista_prontuariospacientes : prontuariospacientes});
        })      
    }

    componentDidMount(){
        this.buscarProntuariosPacientes();
    }

    
    render() {
        return (
        
        <main className="prontuariospacientes_listar">
            <div className="prontuariospacientes_listar_logotipo">
                <img src={logotipo} />
            </div>
    
            <h1>Painel do Administrador</h1>

            <div>
            
                <table id="lista_prontuariospacientes">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>RG</th>
                        <th>CPF</th>
                        <th>Nascimento</th>
                        </tr>
                    </thead>

                    <tbody id="tabela_lista_prontuariospacientes">
                    {
                        this.state.lista_prontuariospacientes.map(function(todos_prontuariospacientes){
                            return(
                                <tr key={todos_prontuariospacientes.id}>
                                    <td>{todos_prontuariospacientes.id}</td>
                                    <td>{todos_prontuariospacientes.nome}</td>                                    
                                    <td>{todos_prontuariospacientes.endereco}</td>
                                    <td>{todos_prontuariospacientes.telefone}</td>
                                    <td>{todos_prontuariospacientes.rg}</td>
                                    <td>{todos_prontuariospacientes.cpf}</td>
                                    <td>{todos_prontuariospacientes.dataNascimento}</td>
                                </tr>
                            );
                        })

                    }
                    </tbody>
                
                </table>

            </div>

        </main>

        );
    }
}

export default ProntuariosPacientesListar;