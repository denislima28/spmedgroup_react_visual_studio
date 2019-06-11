import React, { Component } from "react";
import logotipo from "../../../assets/img/logotipo.png";
import '../../../assets/css/paineladm/listar/consultaslistar.css';
import Axios from 'axios';

class ConsultasListar extends Component
{
    constructor(){
        super();

        this.state = {
            lista_consultas: []
        };
    }
    
    
    buscarConsultas (){
        Axios.get('http://192.168.3.70:5000/api/consultas',
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('usuario_spmedgroup')
            }
        }
        )
        .then(res => {
            const consultas = res.data;
            this.setState({ lista_consultas : consultas});
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

            O médico não consegue ver as próprias consultas por causa da configuração da tabela no front-end.
            Isso deve ser consertado.

            <div>
            
                <table id="lista_consultas">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Data da Consulta</th>
                        <th>Situação</th>
                        <th>Descrição</th>
                        <th>Médico</th>
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
                                     {/* Os dois últimos comandos permitem exibir os nomes do médico e do paciente
                                     em vez dos ids. Só funciona se usar o Include no arquivo do repositório no backend */}
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

export default ConsultasListar;