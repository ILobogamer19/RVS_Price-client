import React, { useState } from "react";
import Cookies from "js-cookie";

import Paleta_De_Cores_De_Mercados from "../Ferramentas/Paleta_De_Cores_De_Mercados";

var Contador_De_Vezes = 0;
var Teste_De_Modo = 0;

export default function Mudar_Tema_Do_Site_Funcao_Mercado(Atributos) {
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
  const Temas = Paleta_De_Cores_De_Mercados(Atributos.Mercado);

  const Tema_Escuro = Temas.Escuro;

  const Tema_Claro = Temas.Claro;
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
    document.querySelector(
      ".Bola_Que_Informa_Quantos_Produtos_Tem_No_Carrinho"
    ).style.filter = Tema_Escolhido.Notificacao_Do_Carrinho;
    // document.querySelector(".Menu_Responsivo_Para_Telas_Menores").style.filter =
    //   Tema_Escolhido.Links_De_Navegacao;
    document.querySelector("body").style.backgroundColor =
      Tema_Escolhido.Fundo_Site;
    document.querySelector("body").style.opacity =
      Tema_Escolhido.Opacidade_Itens;
    document
      .querySelectorAll(".Botao_De_Ativacao_De_Troca_De_Tema")
      .forEach((item) => {
        item.style.backgroundColor = Tema_Escolhido.Botao_De_Alteracao_De_Tema;
      });
    document.querySelector("body").style.color = Tema_Escolhido.Letras_Do_Site;
    document.querySelector("#Input_De_Pesquisa").style.color =
      Tema_Escolhido.Letras_Do_Site;
  };
  //#endregion

  //#region Função de modificar tema e alterar as cores do site
  const Alterador_De_Tema_Do_Site = () => {
    if (Valor_Checado_Ou_Nao_Do_Input || Teste_De_Modo == 2) {
      if (!Valor_Checado_Ou_Nao_Do_Input && Teste_De_Modo == 2) {
        document
          .querySelectorAll(".Botao_De_Ativacao_De_Troca_De_Tema")
          .forEach((item) => {
            setTimeout(() => {
              item.click();
            }, 0);
          });
      }
      Tema_Escolhido = Tema_Claro;
      Teste_De_Modo = 1;
    } else {
      Tema_Escolhido = Tema_Escuro;
      Teste_De_Modo = 2;
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
        document
          .querySelectorAll(".Input_De_Checagem_Para_Tema")
          .forEach((item) => {
            item.checked = !Valor_Checado_Ou_Nao_Do_Input;
          });
        setValor_Checado_Ou_Nao_Do_Input(!Valor_Checado_Ou_Nao_Do_Input);
      }
    }, 1);
  } else if (Contador_De_Vezes === 0) {
    Contador_De_Vezes = 1;
    setTimeout(() => {
      Tema_Escolhido = Tema_Claro;
      if (document.querySelector(".Banner_Topo")) {
        Itens_Para_Modificacao();
        document
          .querySelectorAll(".Input_De_Checagem_Para_Tema")
          .forEach((item) => {
            item.checked = Valor_Checado_Ou_Nao_Do_Input;
          });
      }
    }, 1);
  }
  //#endregion

  return (
    <div className="Div_Do_Trocador_De_Tema">
      <div className="Agrupador_De_Botao_E_Bola">
        <button
          className="Botao_De_Ativacao_De_Troca_De_Tema"
          onClick={() => {
            setValor_Checado_Ou_Nao_Do_Input(!Valor_Checado_Ou_Nao_Do_Input);
            Alterador_De_Tema_Do_Site();
            document
              .querySelectorAll(".Input_De_Checagem_Para_Tema")
              .forEach((item) => {
                item.checked = !Valor_Checado_Ou_Nao_Do_Input;
              });
            Cookies.set("Tema_Escolhido", Valor_Checado_Ou_Nao_Do_Input, {
              expires: 60,
            });
          }}
          aria-label="Alteração de tema"
        >
          <input
            type="checkbox"
            id="Input_De_Checagem_Para_Tema"
            className="Input_De_Checagem_Para_Tema"
            checked={Valor_Checado_Ou_Nao_Do_Input}
            onChange={(event) => {
              setValor_Checado_Ou_Nao_Do_Input(event.target.checked);
            }}
            aria-label="Marcador de tema ativo e desativo"
          />
          <div className="Bola_De_Tema"></div>
        </button>
      </div>
    </div>
  );
}
