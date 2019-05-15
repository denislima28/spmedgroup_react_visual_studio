import React, { Component } from "react";
import logotipo from "../../assets/img/logotipo.png";
import '../../assets/css/paineladm/paineladm.css';
import {Link} from 'react-router-dom';

class PainelAdm extends Component{
    render() {
        return (
        <main className="painel_adm">
            <div className="logotipo">
                <img src={logotipo} />
            </div>
    
            <h1>Painel do Administrador</h1>

            <button name="botao_sair">SAIR</button>

            <section className="menus">
                <article className="listar">
                    <h2>LISTAR</h2> 

                        <nav className="submenus">
                            <ul>
                                <li><Link to="/ConsultasListar">CONSULTAS</Link></li>
                                <li><Link to="#">PACIENTES</Link></li>
                                <li><Link to="/UsuariosListar">USUÁRIOS</Link></li>
                                <li><Link to="#">MÉDICOS</Link></li>
                            </ul>
                        </nav>
            
                </article>

                <article className="cadastrar">

                    <h2>CADASTRAR</h2>
                    
                        <nav className="submenus">
                            <ul>
                                <li><Link to="/ConsultasCadastrar">CONSULTAS</Link></li>
                                <li><Link to="#">PACIENTES</Link></li>
                                <li><Link to="/UsuariosCadastrar">USUÁRIOS</Link></li>
                                <li><Link to="#">MÉDICOS</Link></li>
                            </ul>
                        </nav>

                </article>

                <article className="clinicas">
                    
                    <nav className="menu_clinica">
                        <ul>
                            <li><h2><a href="#">CLÍNICAS</a></h2></li>
                        </ul> 
                    </nav>
                    
                </article>
            

            </section>
        </main>
        );
    }
}

export default PainelAdm;