import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-section">
        <img src="/image/imgTelaLogin.jpg" alt="Login" />
      </div>
      <div className="form-section">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
export default Login;