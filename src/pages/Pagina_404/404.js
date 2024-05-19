import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Cookies from "js-cookie";
import "./style.css";

var Contador_De_Vezes = 0;
export default function Error_404_Pagina_Nao_Encontrada() {
  const url = useNavigate();

  //#region Puxando Cookies
  var Busca_De_Tema_Ja_Escolhido = Cookies.get("Tema_Escolhido");
  //#endregion

  //#region Definição de variaveis
  var Tema_Escolhido;
  //#endregion

  //#region Criando variaveis de useState
  const [Valor_Checado_Ou_Nao_Do_Input, setValor_Checado_Ou_Nao_Do_Input] =
    useState(false);
  //#endregion

  //#region Configurações de temas
  const Tema_Escuro = {
    Header_Em_Cima: "rgb(91, 0, 0)",
    Pesquisa_Header: "rgb(0,0,0)",
    Imagem_Pesquisa: "invert(100%)",
    Borda_Do_Header: "rgb(0,0,0)",
    Links_De_Navegacao: "invert(0%)",
    Fundo_Site: "rgb(33,33,33)",
    Botao_De_Alteracao_De_Tema: "rgb(0,0,0)",
    Letras_Do_Site: "rgb(255,255,255)",
    Linha_De_Separacao: "rgb(113,113,113)",
  };

  const Tema_Claro = {
    Header_Em_Cima: "rgb(255, 33, 33)",
    Pesquisa_Header: "rgb(255,255,255)",
    Imagem_Pesquisa: "invert(0%)",
    Borda_Do_Header: "rgb(0,0,0)",
    Links_De_Navegacao: "invert(100%)",
    Fundo_Site: "rgb(255,255,255)",
    Botao_De_Alteracao_De_Tema: "rgb(255,255,255)",
    Letras_Do_Site: "rgb(0,0,0)",
    Linha_De_Separacao: "rgb(0,0,0)",
  };
  //#endregion

  //#region Função que retorna os items a serem modificados
  const Itens_Para_Modificacao = () => {
    document.querySelector(".Banner_Topo").style.backgroundColor =
      Tema_Escolhido.Header_Em_Cima;
    document.querySelector(".Pesquisa").style.backgroundColor =
      Tema_Escolhido.Pesquisa_Header;
    document.querySelector(".Img_Lupa").style.filter =
      Tema_Escolhido.Imagem_Pesquisa;
    document.querySelector(".Banner_Topo").style.borderColor =
      Tema_Escolhido.Borda_Do_Header;
    document.querySelector(".Links_Navegacao").style.filter =
      Tema_Escolhido.Links_De_Navegacao;
    document.querySelector("body").style.backgroundColor =
      Tema_Escolhido.Fundo_Site;
    document.querySelector(
      ".Botao_De_Ativacao_De_Troca_De_Tema"
    ).style.backgroundColor = Tema_Escolhido.Botao_De_Alteracao_De_Tema;
    document.querySelector("body").style.color = Tema_Escolhido.Letras_Do_Site;
    document
      .querySelectorAll(".Hr_Demarcacao_De_Separacao_Banners_Produtos")
      .forEach((item) => {
        item.style.borderColor = Tema_Escolhido.Linha_De_Separacao;
      });
  };
  //#endregion

  //#region Função de modificar tema e alterar as cores do site
  const Alterador_De_Tema_Do_Site = () => {
    if (Valor_Checado_Ou_Nao_Do_Input) {
      Tema_Escolhido = Tema_Claro;
    } else {
      Tema_Escolhido = Tema_Escuro;
    }

    Itens_Para_Modificacao();
  };

  if (
    Busca_De_Tema_Ja_Escolhido !== undefined &&
    Busca_De_Tema_Ja_Escolhido !== true &&
    Busca_De_Tema_Ja_Escolhido !== "true" &&
    Contador_De_Vezes === 0
  ) {
    Contador_De_Vezes = 1;
    setTimeout(() => {
      if (document.querySelector(".Banner_Topo")) {
        setValor_Checado_Ou_Nao_Do_Input(Busca_De_Tema_Ja_Escolhido);
        Alterador_De_Tema_Do_Site();
        setValor_Checado_Ou_Nao_Do_Input(!Valor_Checado_Ou_Nao_Do_Input);
      }
    }, 1);
  } else if (Contador_De_Vezes === 0) {
    Contador_De_Vezes = 1;
    setTimeout(() => {
      Tema_Escolhido = Tema_Claro;
      if (document.querySelector(".Banner_Topo")) {
        Itens_Para_Modificacao();
      }
    }, 1);
  }
  //#endregion

  return (
    <div className="Erro_404_Div">
      <h1
        style={{
          margin: "0px",
          padding: "3px",
        }}
      >
        Pagina não encontrada
      </h1>
      <h5
        style={{
          margin: "5px",
          padding: "0px",
        }}
      >
        Error 404
      </h5>
      <button
        onClick={() => {
          setTimeout(() => {
            window.location.reload();
          }, 1);

          url("");
        }}
      >
        Home
      </button>
    </div>
  );
}
