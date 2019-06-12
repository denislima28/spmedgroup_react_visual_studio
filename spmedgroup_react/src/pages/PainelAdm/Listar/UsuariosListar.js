import React, { Component } from "react";
import logotipo from "../../../assets/img/logotipo.png";
import '../../../assets/css/paineladm/listar/usuarioslistar.css';
import Axios from 'axios';


class UsuariosListar extends Component
{
    constructor(){
        super();

        this.state = {
            lista_usuarios: []
        };
    }
    
    
    buscarUsuarios (){
        Axios.get('http://192.168.3.70:5000/api/usuarios',
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.getItem('usuario_spmedgroup')
            }
        }
        )
        .then(res => {
            const usuarios = res.data;
            this.setState({ lista_usuarios : usuarios});
        })      
    }

    componentDidMount(){
        this.buscarUsuarios();
    }

    
    render() {
        return (
        
        <main className="usuarios_listar">
            <div className="usuarios_listar_logotipo">
                <img src={logotipo} />
            </div>
    
            <h1>Painel do Administrador</h1>

            LISTA DE USUÁRIOS

            <div>
            
                <table id="lista_usuarios">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Tipo Usuario</th>
                        </tr>
                    </thead>

                    <tbody id="tabela_lista_usuarios">
                    {
                        this.state.lista_usuarios.map(function(todos_usuarios){
                            return(
                                <tr key={todos_usuarios.id}>
                                    <td>{todos_usuarios.id}</td>
                                    <td>{todos_usuarios.email}</td>
                                    <td>{todos_usuarios.idTipoUsarioNavigation.nome}</td> 
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

export default UsuariosListar;