import React, { Component } from "react";
import logotipo from "../../assets/img/logotipo.png";
import '../../assets/css/pacientes/pacientes.css';
import {Link} from 'react-router-dom';

class Pacientes extends Component{
    render(){
        return(
            <main className="pacientes">
                <div className="paciente_logotipo">
                    <img src={logotipo} />
                </div>

                <h1>PÁGINA FEITA PARA OS PACIENTES ACESSAREM</h1>

                <button name="botao_paciente_sair">SAIR</button>
            </main>
        );

    }

}

export default Pacientes;