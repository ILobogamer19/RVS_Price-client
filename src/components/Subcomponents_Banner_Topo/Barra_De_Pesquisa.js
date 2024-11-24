import Axios from "axios";
import Inserir_Etiqueta_Do_Mercado from "../Ferramentas/Inserir_Etiqueta_Do_Mercado";
import React, { useEffect, useState } from "react";

import Logo from "../../img/RVS_Price.webp";
import Lupa from "../../img/Lupa.webp";
import Login from "./Login";

export default function Barra_De_Pesquisa() {
  const [Texto_Digitado_Para_Pesquisa, setTexto_Digitado_Para_Pesquisa] =
    useState("");
  const [Produtos_Catalogados_Achados, setProdutos_Catalogados_Achados] =
    useState([]);
  const [
    Visualizacao_De_Itens_Correspondentes,
    setVisualizacao_De_Itens_Correspondentes,
  ] = useState(false);

  useEffect(() => {
    Enviar_Dados_De_Cadastro_Para_Servidor();
  }, []);

  useEffect(() => {
    console.log(Produtos_Catalogados_Achados[5]);
  }, [Produtos_Catalogados_Achados]);

  //#region Envio de Categoria e resultado
  const Enviar_Dados_De_Cadastro_Para_Servidor = () => {
    Axios.post(
      // "https://rvsprice-server.vercel.app/pesquisa-categoria-produto",
      // "http://localhost:5000/pesquisa-categoria-produto",
      "https://zvfmwc2c-5000.brs.devtunnels.ms/produtos-cadastrados",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((Resposta) => {
      setProdutos_Catalogados_Achados(Resposta.data.produtos_achados);

      console.log(Resposta.data.produtos_achados);
    });
  };
  //#endregion

  return (
    <div className="Barra_De_Pesquisa_Logo_Pesquisa">
      <img src={Logo} className="Logo_Site" alt="Logo do Site" />
      <div className="Conjunto_Barra_De_Pesquisa_Com_Escolhas">
        <input
          type="text"
          value={Texto_Digitado_Para_Pesquisa}
          onChange={(e) => {
            setTexto_Digitado_Para_Pesquisa(e.target.value);
          }}
          list="Produtos_Catalogados"
          placeholder="Buscar produtos, mercados, e muito mais"
          className="Pesquisa"
          onFocus={() => {
            setVisualizacao_De_Itens_Correspondentes(true);
          }}
          onBlur={() => {
            setVisualizacao_De_Itens_Correspondentes(false);
          }}
          id="Input_De_Pesquisa"
        />
        {Visualizacao_De_Itens_Correspondentes && (
          <div className="Resultados_A_Escolher_Conjunto">
            {Produtos_Catalogados_Achados.map((item) => {
              if (
                item.Nome.normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .toLowerCase()
                  .includes(
                    Texto_Digitado_Para_Pesquisa.normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .toLowerCase()
                  )
              ) {
                return (
                  <p
                    className="Item_Do_Resultado_Da_Busca"
                    onClick={() => {
                      setTexto_Digitado_Para_Pesquisa(item.Nome);
                    }}
                    onMouseDown={() => {
                      setTexto_Digitado_Para_Pesquisa(item.Nome);
                    }}
                  >
                    <div className="Controle_De_Imagem_De_Pesquisa">
                      {Inserir_Etiqueta_Do_Mercado(
                        item.Mercado,
                        "Logo_Mercado_Resultados"
                      )}
                      <img
                        src={item.Imagem}
                        className="Imagem_do_Produto_no_Resultado"
                      />
                    </div>
                    {item.Nome}
                  </p>
                );
              }
            })}
          </div>
        )}
      </div>
      <img
        src={Lupa}
        className="Img_Lupa"
        onClick={() => document.querySelector("#Input_De_Pesquisa").focus()}
        alt="Lupa de pesquisa"
      />
      <Login />
    </div>
  );
}
