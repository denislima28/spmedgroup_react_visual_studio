import React, { Component } from 'react';
import logotipo from "../../assets/img/logotipo.png";
import './App.css';
import Axios from 'axios';
import jwtDecode from 'jwt-decode';

import {parseJwt} from '../../services/auth';

export default class App extends Component {
    constructor()
    {
      super();

      this.state ={
        email : '',
        senha : ''
      }
    }

    atualizaEstadoEmail(event)
    {
      this.setState({ email: event.target.value});
    }// Utilizada para atualizar o valor do e-mail;

    atualizaEstadoSenha(event)
    {
        this.setState({ senha: event.target.value});
    } // Utilizada para atualizar o valor da senha;
    
    efetuaLogin(event){
      event.preventDefault();
      
      // alert(this.state.email + " - " + this.state.senha);

      Axios.post('http://localhost:5000/api/login', {
         email : this.state.email,
         senha: this.state.senha
      })
      .then(data => {
        //if(data.status === 200){
          console.log(data);
              localStorage.setItem("usuario_spmedgroup", data.data.token); //Gravar o token

              // let jwtDecode = require('jwt-decode'); // Importando framework

              // let decodificado = jwtDecode(localStorage.getItem("usuario-spmedgroup")); // Decodificando token
              //       console.log("decodificado");
              //       console.log(decodificado);

              //if(decodificado.tipoUsuario === "ADM"){
                this.props.history.push('/paineladm');
              //} 
              // else {
              //    this.props.history.push('/pacientes');
              // }
        //}  
      })
      .catch(erro => {
          this.setState({ erroMensagem : 'Email ou senha inválido'});
      })
}

  render() {
    return (
      
      <main className="app">
      <div className="logotipo">
        <img src={logotipo} />
      </div>

      <div className="formulario">
        <form onSubmit={this.efetuaLogin.bind(this)}>
              <div className="margens">
                  <input 
                  placeholder="Digite seu e-mail"              
                  type="text" 
                  value={this.state.email}
                  onChange={this.atualizaEstadoEmail.bind(this)}
                  name="email"
                  id="email"/>
              </div>
              
              <div className="margens">
                  <input  
                  placeholder="Digite sua senha"
                  type="password" 
                  value={this.state.senha}
                  onChange={this.atualizaEstadoSenha.bind(this)}
                  name="senha"
                  id="senha"
                  />
              </div>
              
              <div className="botao">
                  
                  <input type="button" value="CADASTRAR-SE"></input>

                  <button type="submit" className="botao_login">LOGIN</button>
                  
              </div>
          </form>
      </div>
      </main> 
    );
  }
}


//Colocar o main resolveu o problema da linha 89.