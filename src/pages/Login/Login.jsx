import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-section">
        <img src="/image/imgTelaLogin.jpg" alt="Login" />
      </div>
      <div className="form-section">
        <img className="logoDpe" src="/image/LogoDPEBA21.png" alt="Logo DPE" />
        <img className="logo" src="/image/t2.svg" alt="Logo Cheguei" />
        <h2>Bem vindo(a)</h2>
        <form>
          <div className="floating-input">
            <input id="usuario" placeholder="Ex: nome.sobrenome" required />
            <label>Usuario</label>
          </div>

          <div className="floating-input">
            <input
              type="password"
              id="senha"
              placeholder="Ex: 1234567"
              required
            />
            <label for="senha">Senha</label>
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
