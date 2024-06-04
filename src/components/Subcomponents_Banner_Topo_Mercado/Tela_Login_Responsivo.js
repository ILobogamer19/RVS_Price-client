import Axios from "axios";
import React, { useState, useEffect } from "react";

export default function Tela_Login_Responsivo() {
  const [Input_User, setInput_User] = useState("");
  const [Input_Senha, setInput_Senha] = useState("");

  function Enviar_Dados_Para_Permissao(event) {
    event.preventDefault();

    setInput_User("");
    setInput_Senha("");

    console.log("Verificando Login");

    setTimeout(() => {
      Axios.post(
        // "https://rvsprice-server.vercel.app/validar",
        // "http://localhost:5000/validar",
        "https://zvfmwc2c-5000.brs.devtunnels.ms/validar",

        {
          User: Input_User,
          Senha: Input_Senha,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((Resposta) => {
        if (Resposta.data.token) {
          var token = Resposta.data.token;
          localStorage.setItem("token", token);
          window.location.reload();
          alert("Logado com sucesso");
        } else {
          console.log("Erro: " + Resposta);
          console.log(Resposta);
          console.log("Enviados: " + Input_User + " , " + Input_Senha);
          console.log(Resposta.data);
          console.log("Data extratida: " + Resposta.data);
          console.log("Permissão: " + Resposta.data.permitir);
          alert("Falha no login");
        }
      });
    }, 1000);
  }

  return (
    <div className="Tela_De_Login_Geral">
      <div
        style={{
          margin: "0",
        }}
      >
        <div
          className="Login"
          style={{
            margin: "0",
          }}
        >
          <form>
            <div
              style={{
                fontSize: "16px",
                margin: "0",
              }}
            >
              <label htmlFor="Input_De_Login_User_Tela">User:</label>
              <input
                type="text"
                placeholder="User"
                id="Input_De_Login_User_Tela"
                name="Input_De_Login_User_Tela"
                value={Input_User}
                onChange={(e) => {
                  setInput_User(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                fontSize: "16px",
                margin: "0",
              }}
            >
              <label htmlFor="Input_De_Login_Senha">Senha:</label>
              <input
                type="password"
                placeholder="Senha"
                id="Input_De_Login_Senha"
                name="Input_De_Login_Senha"
                value={Input_Senha}
                onChange={(e) => {
                  setInput_Senha(e.target.value);
                }}
              />
            </div>
            <hr />
            <button
              className="Botao_De_Logar_User_Senha"
              onClick={Enviar_Dados_Para_Permissao}
              aria-label="Botão de Login"
            >
              Logar
            </button>
            <button
              className="Botao_De_Fechar_Login"
              onClick={(event) => {
                event.preventDefault();

                document.querySelector(
                  ".Tela_De_Login_Ativa_Desativa"
                ).style.display = "none";
              }}
              aria-label="Botão de Fechar menu de opções"
            >
              Fechar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
