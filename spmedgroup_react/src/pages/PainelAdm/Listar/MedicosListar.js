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
        Axios.get('http://localhost:5000/api/medicos',
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('usuario_spmedgroup')
            }
        }
        )
        .then(res => {
            const consultas = res.data;
            this.setState({ lista_medicos : medicos});
        })      
    }

    componentDidMount(){
        this.buscarConsultas();
    }

    
    render() {
        return (
        
        <main className="consultas_listar">
            <div className="consultas_listar_logotipo">
                <img src={logotipo} />
            </div>
    
            <h1>Painel do Administrador</h1>

            <div>
            
                <table id="lista_medicos">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>CRM</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>Paciente</th>
                        </tr>
                    </thead>

                    <tbody id="tabela_lista_consultas">
                    {
                        this.state.lista_consultas.map(function(todas_consultas){
                            return(
                                <tr key={todas_consultas.id}>
                                    <td>{todas_consultas.id}</td>
                                    <td>{todas_consultas.dataConsulta}</td>
                                    <td>{todas_consultas.situacao}</td>
                                    <td>{todas_consultas.descricao}</td>
                                    <td>{todas_consultas.idMedicoNavigation.nome}</td>
                                    <td>{todas_consultas.idProntuarioPacienteNavigation.nome}</td>
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

/*
"id": 2,
        "nome": "Roberto Possarle",
        "crm": "53452-SP",
        "endereco": "Av. Barão Limeira, 532, São Paulo, SP",
        "telefone": "-",
        "idUsuario": 4,
        "idEspecialidade": 17,
        "idClinica": 1,
        "consultas": []
*/