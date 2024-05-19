import Axios from "axios";
import React, { useState, useEffect } from "react";

export default function Login() {
  const [Input_User, setInput_User] = useState("");
  const [Input_Senha, setInput_Senha] = useState("");
  const [Visibilidade, setVisibilidade] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setVisibilidade(false);
    } else {
      setVisibilidade(true);
    }
  }, []);

  function Enviar_Dados_Para_Permissao(event) {
    event.preventDefault();

    setInput_User("");
    setInput_Senha("");

    setTimeout(() => {
      Axios.post(
        // "https://rvsprice-server.vercel.app/validar",
        // "http://localhost:5000/validar",
        "https://zvfmwc2c-5000.brs.devtunnels.ms/pesquisa-categoria-produto",

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
          setVisibilidade(false);
          window.location.reload();
          alert("Logado com sucesso");
        } else {
          alert("Falha no login");
        }
      });
    }, 1000);
  }
  return (
    <>
      {Visibilidade && (
        <div className="Login">
          <form>
            <div>
              <label htmlFor="Input_De_Login_User">User:</label>
              <input
                type="text"
                placeholder="User"
                id="Input_De_Login_User"
                name="Input_De_Login_User"
                value={Input_User}
                onChange={(e) => {
                  setInput_User(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Senha:</label>
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
            >
              Logar
            </button>
          </form>
        </div>
      )}
      {!Visibilidade && (
        <button
          className="Login_Botao"
          onClick={() => {
            localStorage.removeItem("token");
            setVisibilidade(true);
            window.location.reload();
          }}
        >
          Loggout
        </button>
      )}
    </>
  );
}
