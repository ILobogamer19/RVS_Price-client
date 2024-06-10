import Axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Inserir_Etiqueta_Do_Mercado from "./Ferramentas/Inserir_Etiqueta_Do_Mercado";
import Estrelas_Do_Produto_Teste from "./Ferramentas/Estrelas_Do_Produto_Veridicacao";

const Categoria_Produto_Json = await fetch(
  "./data/Categorias_Para_Aparecer_Na_Home.json"
);
const Categoria_Produto_Objeto = await Categoria_Produto_Json.json();

const Categoria_Produto = Categoria_Produto_Objeto;

var Primeira_Adicao_Carrinho = 0;

export default function Categoria_Com_Produto_Inicial(Atributos) {
  const [
    Produtos_Da_Categoria_Selecionada,
    setProdutos_Da_Categoria_Selecionada,
  ] = useState([]);

  if (localStorage.getItem("Produtos_No_Carrinho")) {
    var Produtos_No_Carrinho_Inicial = JSON.parse(
      localStorage.getItem("Produtos_No_Carrinho")
    );
  }

  const [Produtos_No_Carrinho, setProdutos_No_Carrinho] = useState([]);

  //#region Envio de Categoria e resultado
  const Enviar_Dados_De_Cadastro_Para_Servidor = (
    Categoria_Pesquisada,
    Numero_Categoria
  ) => {
    Axios.post(
      // "https://rvsprice-server.vercel.app/pesquisa-categoria-produto",
      // "http://localhost:5000/pesquisa-categoria-produto",
      "https://zvfmwc2c-5000.brs.devtunnels.ms/pesquisa-categoria-produto",
      Atributos.Filtro
        ? {
            Categoria_Para_Pesquisa: Categoria_Pesquisada,
            Filtro_De_Pesquisa: Atributos.Filtro,
          }
        : { Categoria_Para_Pesquisa: Categoria_Pesquisada },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((Resposta) => {
      if (!Produtos_Da_Categoria_Selecionada[Numero_Categoria]) {
        setProdutos_Da_Categoria_Selecionada((prevState) => ({
          ...prevState,
          [Numero_Categoria]: Resposta.data.produtos_achados,
        }));
      } else {
        setProdutos_Da_Categoria_Selecionada((prevState) => ({
          ...prevState,
          [Numero_Categoria]: [
            ...prevState[Numero_Categoria],
            Resposta.data.produtos_achados,
          ],
        }));
      }

      return Resposta.data.produtos_achados;
    });
  };
  //#endregion

  //#region Adicionar itens ao carrinho
  const Adicionar_Itens_Ao_Carrinho = (Informacoes_Do_Item) => {
    //#region Notificações de carrinho
    var Div_De_Notificacao_De_Carrinho = document.querySelector(
      ".Bola_Que_Informa_Quantos_Produtos_Tem_No_Carrinho"
    );
    var Teste_De_Igualdade = 0;
    var Quantia_De_Produtos_Adicionados_No_Carrinho = Cookies.get(
      "Quantia_De_Produtos_Adicionados_No_Carrinho"
    );

    if (Primeira_Adicao_Carrinho == 0) {
      if (
        Quantia_De_Produtos_Adicionados_No_Carrinho &&
        Quantia_De_Produtos_Adicionados_No_Carrinho !== "undefined" &&
        Quantia_De_Produtos_Adicionados_No_Carrinho !== "NaN"
      ) {
        Div_De_Notificacao_De_Carrinho.style.display = "flex";

        Primeira_Adicao_Carrinho = 1;
        Teste_De_Igualdade = 1;

        if (localStorage.getItem("Produtos_No_Carrinho")) {
          setProdutos_No_Carrinho(Produtos_No_Carrinho_Inicial);
        }

        Div_De_Notificacao_De_Carrinho.innerHTML =
          Quantia_De_Produtos_Adicionados_No_Carrinho;
      } else if (Quantia_De_Produtos_Adicionados_No_Carrinho == "NaN") {
        Cookies.remove("Quantia_De_Produtos_Adicionados_No_Carrinho");
      } else {
        Div_De_Notificacao_De_Carrinho.style.display = "flex";

        Primeira_Adicao_Carrinho = 1;

        Div_De_Notificacao_De_Carrinho.innerHTML = 1;

        Cookies.set("Quantia_De_Produtos_Adicionados_No_Carrinho", 1, {
          expires: 30,
        });
      }
    } else {
      var Itens_No_Carrinho =
        parseFloat(Div_De_Notificacao_De_Carrinho.innerHTML) + 1;

      Cookies.set(
        "Quantia_De_Produtos_Adicionados_No_Carrinho",
        Itens_No_Carrinho,
        { expires: 30 }
      );

      Div_De_Notificacao_De_Carrinho.innerHTML = Itens_No_Carrinho;
    }
    //#endregion

    //#region Itens no carrinho
    if (Produtos_No_Carrinho[0] && Teste_De_Igualdade == 0) {
      Produtos_No_Carrinho.forEach((Produto_Existente) => {
        if (Produto_Existente.Id_Produtos) {
          if (
            Produto_Existente.Id_Produtos == Informacoes_Do_Item.Id_Produtos
          ) {
            Teste_De_Igualdade = 1;
          }
        }
      });
    }

    if (Teste_De_Igualdade == 0) {
      setProdutos_No_Carrinho((prevState) => [
        ...prevState,
        Informacoes_Do_Item,
      ]);
    }

    //#endregion
  };
  //#endregion

  //#region useEffect
  useEffect(() => {
    Primeira_Adicao_Carrinho = 0;

    Categoria_Produto.map((item, index) => {
      Enviar_Dados_De_Cadastro_Para_Servidor(item.Categoria, index);
    });

    if (Cookies.get("Quantia_De_Produtos_Adicionados_No_Carrinho")) {
      Adicionar_Itens_Ao_Carrinho();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "Produtos_No_Carrinho",
      JSON.stringify(Produtos_No_Carrinho)
    );
  }, [Produtos_No_Carrinho]);
  //#endregion

  return (
    <>
      {Categoria_Produto.map((item, index) => {
        return (
          <div
            className={"Categorias Categoria_" + item.Categoria}
            key={item.Categoria}
          >
            <h2 key={item.Categoria + 1}>{item.Categoria}</h2>
            <div className="Produtos">
              {Produtos_Da_Categoria_Selecionada[index]
                ? Produtos_Da_Categoria_Selecionada[index].map((Categoria) => {
                    return (
                      <div
                        className={
                          "Produto_" +
                          Categoria.Id_Produtos +
                          " Produto_Individual_Estilo_Generalizado"
                        }
                        key={Categoria.Nome}
                      >
                        <div className="Div_Logo_Imagem_Nome_Preco_Avaliacao_Do_Produto">
                          {Inserir_Etiqueta_Do_Mercado(
                            Categoria.Mercado,
                            "Logo_Mercado_Produtos_Home"
                          )}
                          <div className="Div_De_Imagem_Do_Produto_Home">
                            <img
                              src={Categoria.Imagem}
                              className="Imagem_Do_Produto_Home"
                              alt={"Produto " + Categoria.Nome}
                              loading="lazy"
                            />
                          </div>
                          <p className="Nome_Do_Produto">{Categoria.Nome}</p>
                          <p className="Preco_Do_Produto">{Categoria.Preco}</p>
                          {Estrelas_Do_Produto_Teste(
                            Math.floor(Math.random() * 6)
                          )}
                        </div>
                        <div className="Div_Do_Botao_De_Carrinho">
                          <button
                            className="Botao_De_Adicao_De_Produto_No_Carrinho"
                            onClick={() => {
                              Adicionar_Itens_Ao_Carrinho(Categoria);
                            }}
                          >
                            Adicionar ao Carrinho
                          </button>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        );
      })}
    </>
  );
}
