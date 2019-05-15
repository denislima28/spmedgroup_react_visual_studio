export const usuarioAutenticado = () => localStorage.getItem('usuario_spmedgroup') !== null; //verifica se usuário está autenticado


//Junto com o código no app.js, vai servir para verificar o tipo de usuário.
export const parseJwt = () =>{
  var base64Url = localStorage.getItem("usuario_spmedgroup").split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  
  return JSON.parse(window.atob(base64));
}


/*export const usuario_spmedgroup = "@airbnb-Token";
export const usuarioAutenticado = () => localStorage.getItem('usuario_spmedgroup') !== null;
export const getToken = () => localStorage.getItem('usuario_spmedgroup');
export const login = token => {
  localStorage.setItem('usuario_spmedgroup', token);
};
export const logout = () => {
  localStorage.removeItem('usuario_spmedgroup');
};

/*
https://imasters.com.br/front-end/implementando-autenticacao-jwt-utilizando-react
*/