//#region Bibliotecas
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
//#endregion

//#region Imagens
import Admin_Painel from "../../img/Admin_Painel.webp";
import Mais_Opcoes from "../../img/Mais_Opcoes.webp";
//#endregion

//#region Componentes da pagina
import Mudar_Tema_Do_Site from "./Mudar_Tema_Do_Site";
//#endregion

//#region Dados Importados
const Menu_Link_Imagem_Texto_Json = await fetch("./data/Menu.json");
const Menu_Link_Imagem_Texto = await Menu_Link_Imagem_Texto_Json.json();
//#endregion

export default function Menu_Para_Ajuste_De_Tamanho() {
  const [Ver_Admin_Painel, setVer_Admin_Painel] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setVer_Admin_Painel(true);
    } else {
      setVer_Admin_Painel(false);
    }
  }, []);

  return (
    <nav className="Nav_Estilizacao">
      <div className="Links_Navegacao">
        {Menu_Link_Imagem_Texto.map((item) => {
          return (
            <div
              key={item.Id + item.Link}
              className="Div_Com_Os_Links_De_Navegacao"
              onClick={(e) => {
                var Dados_De_Itens_De_Carrinho_Convertido = JSON.parse(
                  localStorage.getItem("Produtos_No_Carrinho")
                );
                alert("Continue");
              }}
            >
              <a
                href={item.Link}
                className="Link_De_Navegacao_Com_Imagem"
                key={item.Link}
              >
                {item.Id == 5 && (
                  <div
                    onClick={() => {
                      Cookies.set(
                        "Quantia_De_Produtos_Adicionados_No_Carrinho",
                        ""
                      );

                      var Dados_De_Itens_De_Carrinho_Convertido = JSON.parse(
                        localStorage.getItem("Produtos_No_Carrinho")
                      );
                    }}
                    className="Bola_Que_Informa_Quantos_Produtos_Tem_No_Carrinho"
                    style={{ display: "none", zIndex: "9999999999999999999" }}
                  ></div>
                )}
                <img
                  src={item.Imagem}
                  className="Imagem_Inicial"
                  key={item.Imagem}
                  alt={"Icon de " + item.Texto}
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
              <img
                src={Admin_Painel}
                className="Imagem_Inicial"
                alt="Painel de Administração"
              />
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
        alt="Menu de Opções"
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
                  alt={"Icon de " + item.Texto}
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
            <img
              src={Admin_Painel}
              className="Imagem_Inicial"
              alt="Painel de Administração"
            />
            Painel Admin
          </a>
          <button
            className="Login_Botao"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
            aria-label="Botão de Loggout"
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
            aria-label="Botão de Login"
          >
            Login
          </button>
        </div>
      </span>
    </nav>
  );
}
