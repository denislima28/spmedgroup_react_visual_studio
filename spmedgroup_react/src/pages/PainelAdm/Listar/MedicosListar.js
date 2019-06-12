import React, { Component } from "react";
import logotipo from "../../../assets/img/logotipo.png";
import '../../../assets/css/paineladm/listar/medicoslistar.css';
import Axios from 'axios';

class MedicosListar extends Component
{
    constructor(){
        super();

        this.state = {
            lista_medicos: []
        };
    }
    
    
    buscarMedicos (){
        Axios.get('http://192.168.3.70:5000/api/medicos',
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('usuario_spmedgroup')
            }
        }
        )
        .then(res => {
            const medicos = res.data;
            this.setState({ lista_medicos : medicos});
        })      
    }

    componentDidMount(){
        this.buscarMedicos();
    }

    
    render() {
        return (
        
        <main className="medicos_listar">
            <div className="medicos_listar_logotipo">
                <img src={logotipo} />
            </div>
    
            <h1>Painel do Administrador</h1>

            LISTA DE MÉDICOS

            <div>
            
                <table id="lista_medicos">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>CRM</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>Especialidade</th>
                        </tr>
                    </thead>

                    <tbody id="tabela_lista_medicos">
                    {
                        this.state.lista_medicos.map(function(todos_medicos){
                            return(
                                <tr key={todos_medicos.id}>
                                    <td>{todos_medicos.id}</td>
                                    <td>{todos_medicos.nome}</td>
                                    <td>{todos_medicos.crm}</td>
                                    <td>{todos_medicos.endereco}</td>
                                    <td>{todos_medicos.telefone}</td>
                                    <td>{todos_medicos.idEspecialidadeNavigation.nome}</td>
                                    {/* Esse comando permite exibir o nome da especialidade em vez do número. Só funciona se
                                    usar o Include no arquivo do repositório no backend */}
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

export default MedicosListar;
