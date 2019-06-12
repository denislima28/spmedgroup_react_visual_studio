import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home_Login/App';
import PainelAdm from './pages/PainelAdm/PainelAdm';
import UsuariosListar from './pages/PainelAdm/Listar/UsuariosListar';
import ConsultasListar from './pages/PainelAdm/Listar/ConsultasListar';
import MedicosListar from './pages/PainelAdm/Listar/MedicosListar';
import ProntuariosPacientesListar from './pages/PainelAdm/Listar/ProntuariosPacientesListar';
import UsuariosCadastrar from './pages/PainelAdm/Cadastrar/UsuariosCadastrar';
import ConsultasCadastrar from './pages/PainelAdm/Cadastrar/ConsultasCadastrar';
import MedicosCadastrar from './pages/PainelAdm/Cadastrar/MedicosCadastrar';
import ProntuariosPacientesCadastrar from './pages/PainelAdm/Cadastrar/ProntuariosPacientesCadastrar';
import Pacientes from './pages/Pacientes/Pacientes';
import { usuarioAutenticado } from './services/auth';

import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


//Altera o comportamento das routes
//converte component para Component porque dá problema declarar como minúsculo
const Permissao = ({component : Component}) => (
    <Route
        render = {props => usuarioAutenticado() ? 
            (<Component {...props } />) :
            (<Redirect to={{ pathname : '/', state : {from: props.location}}} /> ) //se não estiver autenticado, redireciona para a página do login
        }
    />
); 

const rotas = (
    <Router>
        <div>
           <Switch>
                <Route exact path="/" component={App} />
                <Permissao path="/paineladm" component={PainelAdm} />
                <Permissao path="/usuarioslistar" component={UsuariosListar} />
                <Permissao path="/consultaslistar" component={ConsultasListar} />
                <Permissao path="/medicoslistar" component={MedicosListar} />
                <Permissao path="/prontuariospacienteslistar" component={ProntuariosPacientesListar} />
                <Permissao path="/usuarioscadastrar" component={UsuariosCadastrar} />
                <Permissao path="/consultascadastrar" component={ConsultasCadastrar} />
                <Permissao path="/medicoscadastrar" component={MedicosCadastrar} />
                <Permissao path="/prontuariospacientescadastrar" component={ProntuariosPacientesCadastrar} />
                <Permissao path="/pacientes" component={Pacientes} />

           </Switch>
        </div>
    </Router>
);

//Se você tentar acessar o tiposeventos direto, sem estar logado, vai ser direcionado para a página de login. Contudo, isso, sozinho, não protege contra entradas não autorizadas.

ReactDOM.render(rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
