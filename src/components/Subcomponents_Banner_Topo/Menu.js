import { useState, useEffect } from "react";
import Admin_Painel from "../../img/Admin_Painel.webp";
import Mais_Opcoes from "../../img/Mais_Opcoes.webp";
import Mudar_Tema_Do_Site from "../Subcomponents_Banner_Topo/Mudar_Tema_Do_Site";
import Tela_Login_Responsivo from "./Tela_Login_Responsivo";

const Menu_Link_Imagem_Texto_Json = await fetch("./data/Menu.json");
const Menu_Link_Imagem_Texto = await Menu_Link_Imagem_Texto_Json.json();

export default function Menu() {
  const [Ver_Admin_Painel, setVer_Admin_Painel] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setVer_Admin_Painel(true);
    } else {
      setVer_Admin_Painel(false);
    }
  }, []);

  return (
    <>
      <div className="Links_Navegacao">
        {Menu_Link_Imagem_Texto.map((item) => {
          return (
            <div key={item.Id + item.Link}>
              <a
                href={item.Link}
                className="Link_De_Navegacao_Com_Imagem"
                key={item.Link}
              >
                <img
                  src={item.Imagem}
                  className="Imagem_Inicial"
                  key={item.Imagem}
                />
                {item.Texto}
              </a>
              {item.Id !== 5 && (
                <p className="Separacao_Links_Navegacao" key={item.Id}>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                </p>
              )}
            </div>
          );
        })}
        {Ver_Admin_Painel && (
          <div>
            <p className="Separacao_Links_Navegacao">
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </p>
            <a href="/admin-painel" className="Link_De_Navegacao_Com_Imagem">
              <img src={Admin_Painel} className="Imagem_Inicial" />
              Painel Admin
            </a>
          </div>
        )}
      </div>
      <img
        src={Mais_Opcoes}
        className="Imagem_Inicial Menu_Responsivo_Para_Telas_Menores"
        onClick={() => {
          document.querySelector(".Links_Navegacao_Responsivel").style.display =
            "flex";
        }}
      />
      <span className="Links_Navegacao_Responsivel">
        <p
          className="Fechador_De_Menu"
          onClick={() => {
            document.querySelector(
              ".Links_Navegacao_Responsivel"
            ).style.display = "none";
          }}
        >
          X
        </p>
        {Menu_Link_Imagem_Texto.map((item) => {
          return (
            <div key={item.Id + item.Link}>
              <a
                href={item.Link}
                className="Link_De_Navegacao_Com_Imagem"
                key={item.Link}
              >
                <img
                  src={item.Imagem}
                  className="Imagem_Inicial"
                  key={item.Imagem}
                />
                {item.Texto}
              </a>
            </div>
          );
        })}

        <div
          style={{
            display: Ver_Admin_Painel ? "flex" : "none",
            width: "58.38",
            height: "29.7",
          }}
        >
          <a
            href="/admin-painel"
            className="Link_De_Navegacao_Com_Imagem"
            style={{}}
          >
            <img src={Admin_Painel} className="Imagem_Inicial" />
            Painel Admin
          </a>
          <button
            className="Login_Botao"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            Loggout
          </button>
        </div>

        <div style={{ display: Ver_Admin_Painel ? "none" : "flex" }}>
          <div
            style={{
              width: "29.19px",
              height: "10.85px",
            }}
          ></div>
          <button
            className="Login_Botao"
            style={{ fontSize: "20px" }}
            onClick={() => {
              document.querySelector(
                ".Tela_De_Login_Ativa_Desativa"
              ).style.display = "flex";

              document.querySelector("#Input_De_Login_User_Tela").focus();
            }}
          >
            Login
          </button>
        </div>

        <Mudar_Tema_Do_Site />
      </span>
      <div
        className="Tela_De_Login_Ativa_Desativa"
        style={{
          display: "none",
        }}
      >
        <Tela_Login_Responsivo />
      </div>
    </>
  );
}
