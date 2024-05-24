import Axios from "axios";
import React, { useEffect, useState } from "react";
import Inserir_Etiqueta_Do_Mercado from "../components/Inserir_Etiqueta_Do_Mercado";

const Categoria_Produto_Json = await fetch(
  "./data/Categorias_Para_Aparecer_Na_Home.json"
);
const Categoria_Produto_Objeto = await Categoria_Produto_Json.json();

const Categoria_Produto = Categoria_Produto_Objeto;

export default function Categoria_Com_Produto_Inicial() {
  const [
    Produtos_Da_Categoria_Selecionada,
    setProdutos_Da_Categoria_Selecionada,
  ] = useState([]);

  //#region Envio de Categoria e resultado
  const Enviar_Dados_De_Cadastro_Para_Servidor = (
    Categoria_Pesquisada,
    Numero_Categoria
  ) => {
    Axios.post(
      // "https://rvsprice-server.vercel.app/pesquisa-categoria-produto",
      // "http://localhost:5000/pesquisa-categoria-produto",
      "https://zvfmwc2c-5000.brs.devtunnels.ms/pesquisa-categoria-produto",
      { Categoria_Para_Pesquisa: Categoria_Pesquisada },
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

  useEffect(() => {
    Categoria_Produto.map((item, index) => {
      Enviar_Dados_De_Cadastro_Para_Servidor(item.Categoria, index);
    });
  }, []);

  return (
    <>
      {Categoria_Produto.map((item, index) => {
        return (
          <div
            className={"Categorias Categoria_" + item.Categoria}
            key={item.Categoria}
          >
            <h1 key={item.Categoria + 1}>{item.Categoria}</h1>
            <div className="Produtos">
              {Produtos_Da_Categoria_Selecionada[index]
                ? Produtos_Da_Categoria_Selecionada[index].map((Categoria) => {
                    return (
                      <div
                        className={"Produto_" + Categoria.Id_Produtos}
                        key={Categoria.Nome}
                      >
                        {Inserir_Etiqueta_Do_Mercado(
                          Categoria.Mercado,
                          "Logo_Mercado_Produtos_Home"
                        )}
                        <img
                          src={Categoria.Imagem}
                          className="Imagem_Do_Produto_Home"
                          alt={"Produto " + Categoria.Nome}
                        />
                        <h3>{Categoria.Nome}</h3>
                        <p>{Categoria.Preco}</p>
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
