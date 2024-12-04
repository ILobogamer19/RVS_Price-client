import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

import Inserir_Etiqueta_Do_Mercado from "../../components/Ferramentas/Inserir_Etiqueta_Do_Mercado";
import Banner_Topo from "../../components/Banner_Topo";

import "./style.css";

export default function Carrinho_Gerenciar() {
  const Navegar = useNavigate();

  const [
    Produtos_No_Carrinho_Pagina_Do_Carrinho,
    setProdutos_No_Carrinho_Pagina_Do_Carrinho,
  ] = useState([]);

  const [Produtos_Ordenados_Por_Mercado, setProdutos_Ordenados_Por_Mercado] =
    useState({});
  const [
    Mercados_Salvos_Dentro_Do_Carrinho,
    setMercados_Salvos_Dentro_Do_Carrinho,
  ] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("Produtos_No_Carrinho")) {
      setProdutos_No_Carrinho_Pagina_Do_Carrinho(
        JSON.parse(localStorage.getItem("Produtos_No_Carrinho"))
      );
    } else {
      alert("Não existem produtos no carrinho");
    }
  }, []);

  useEffect(() => {
    Produtos_No_Carrinho_Pagina_Do_Carrinho.map((item) => {
      setProdutos_Ordenados_Por_Mercado((prev) => {
        if (prev[item.Mercado]) {
          return { ...prev, [item.Mercado]: [item, ...prev[item.Mercado]] };
        }
        return { ...prev, [item.Mercado]: [item] };
      });
      setMercados_Salvos_Dentro_Do_Carrinho((prev) => {
        if (prev.includes(item.Mercado)) {
          return [...prev];
        } else {
          return [...prev, item.Mercado];
        }
      });
    });
  }, [Produtos_No_Carrinho_Pagina_Do_Carrinho]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Banner_Topo />
      <div className="Conteudo_Onde_Vai_Ficar_Produtos">
        {Mercados_Salvos_Dentro_Do_Carrinho.map((item) => {
          var Valor_Total_Dos_Produtos = 0;

          return (
            <div className="Itens_Do_Carrinho_Do_Mercado">
              <div className="Conjunto_De_Titulo_E_Links">
                <h2 className="Titulo_Do_Conjunto_De_Itens_Do_Carrinho">
                  {item.replace(/_/g, " ")}
                  <span
                    onClick={() => {
                      Navegar("/" + item.replace(/_/g, "-").toLowerCase());
                      Cookies.set(
                        "Pagina_De_Mercado",
                        item.replace(/-/g, "_"),
                        { expires: 60 }
                      );
                    }}
                  >
                    {Inserir_Etiqueta_Do_Mercado(
                      item,
                      "Logo_Mercado_Produtos_Home Estilizacao_De_Carrinho_Do_Produto"
                    )}
                  </span>
                </h2>
                <span className="Conjunto_De_Ferramentas">
                  <a
                    href="https://wa.me/5515996164698"
                    className="Botao_Do_WhatsApp"
                  >
                    WhatsApp
                  </a>
                  <button
                    className="Excluir_Mercado_Do_Carrinho"
                    onClick={() => {
                      setProdutos_Ordenados_Por_Mercado({});
                      setMercados_Salvos_Dentro_Do_Carrinho([]);

                      setProdutos_No_Carrinho_Pagina_Do_Carrinho((prev) => {
                        var Novos_Itens_Filtrados = [];

                        prev.map((sub_item) => {
                          if (sub_item.Mercado !== item) {
                            Novos_Itens_Filtrados.push(sub_item);
                          }
                        });

                        localStorage.setItem(
                          "Produtos_No_Carrinho",
                          JSON.stringify(Novos_Itens_Filtrados)
                        );

                        return Novos_Itens_Filtrados;
                      });
                    }}
                  >
                    Excluir Mercado
                  </button>
                </span>
              </div>
              <div className="Conjunto_De_Itens_Do_Carrinho_Do_Mercado">
                {Produtos_Ordenados_Por_Mercado[item].map(
                  (sub_item, sub_index) => {
                    Valor_Total_Dos_Produtos += parseFloat(
                      sub_item.Preco.replace("R$ ", "")
                        .replace("R$", "")
                        .replace(",", ".")
                    );

                    return (
                      <div
                        className="Imagem_Nome_E_Dados_Dos_Itens_Do_Carrinho"
                        key={"Todos_Os_Itens_" + sub_index}
                      >
                        <span className="Imagem_Nome_Do_Item_Do_Carrinho">
                          <img
                            src={sub_item.Imagem}
                            className="Imagem_Demostrativa_no_Carrinho"
                          />
                          {sub_item.Nome}
                        </span>
                        <span className="Preco_Do_Item">{sub_item.Preco}</span>
                      </div>
                    );
                  }
                )}
                <div className="Valor_Total_Da_Compra_Do_Mercado">
                  <h3>
                    Total da compra: R$
                    {Valor_Total_Dos_Produtos.toString().replace(".", ",")}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
