import Admin_Painel from "../../img/Admin_Painel.png";
import { useState, useEffect } from "react";
import Mais_Opcoes from "../../img/Mais_Opcoes.png";

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
        {
          /*localStorage.getItem("token")*/ Ver_Admin_Painel && (
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
          )
        }
      </div>
      <img
        src={Mais_Opcoes}
        className="Imagem_Inicial Menu_Responsivo_Para_Telas_Menores"
        onClick={() => {
          console.log("Menu Clicado");
        }}
      />
    </>
  );
}
