import React, { useState } from "react";

export default function Mudar_Tema_Do_Site_Funcao() {
  const [Valor_Checado_Ou_Nao_Do_Input, setValor_Checado_Ou_Nao_Do_Input] =
    useState(false);

  const Alterador_De_Tema_Do_Site = () => {
    setValor_Checado_Ou_Nao_Do_Input(!Valor_Checado_Ou_Nao_Do_Input);
    console.log(Valor_Checado_Ou_Nao_Do_Input);
    if (Valor_Checado_Ou_Nao_Do_Input) {
      document.querySelector(".Banner_Topo").style.backgroundColor =
        "rgb(255, 33, 33)";
      document.querySelector(".Banner_Topo").style.borderColor = "black";
      document.querySelector(".Links_Navegacao").style.filter = "invert(100%)";
      document.querySelector("body").style.backgroundColor = "white";
      document.querySelector("body").style.color = "black";
      document.querySelector(
        "#Hr_Demarcacao_De_Separacao_Banners_Produtos"
      ).style.borderColor = "black";
      console.log("Tema branco");
    } else {
      document.querySelector(".Banner_Topo").style.backgroundColor =
        "rgb(199, 0, 0)";
      document.querySelector(".Banner_Topo").style.borderColor = "white";
      document.querySelector(".Links_Navegacao").style.filter = "invert(0%)";
      document.querySelector("body").style.backgroundColor = "black";
      document.querySelector("body").style.color = "white";
      document.querySelector(
        "#Hr_Demarcacao_De_Separacao_Banners_Produtos"
      ).style.borderColor = "white";
      console.log("Tema preto");
    }
  };

  return (
    <div className="Div_Do_Trocador_De_Tema">
      <div className="Agrupador_De_Botao_E_Bola">
        <button
          className="Botao_De_Ativacao_De_Troca_De_Tema"
          onClick={Alterador_De_Tema_Do_Site}
        >
          <input
            type="checkbox"
            id="Input_De_Checagem_Para_Tema"
            checked={Valor_Checado_Ou_Nao_Do_Input}
          />
          <div className="Bola_De_Tema"></div>
        </button>
      </div>
    </div>
  );
}
