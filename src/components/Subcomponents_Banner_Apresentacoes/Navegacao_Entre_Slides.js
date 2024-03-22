//#region Importes
import React, { useState, useEffect } from "react";
//#endregion

//#region Importação de Json
const Imagens_de_Slide_Json = await fetch("./data/Slides_Apresentacao.json");
const Imagens_de_Slide = await Imagens_de_Slide_Json.json();
//#endregion

//#region Aplicação de navegação de slides
export default function Navegacao_Entre_Slides() {
  //#region Função que Avança para o proximo slide quando clicar em um botão ou quando o tempo do temporizador acaba
  function Avancar_Slide() {
    setTemporizador_Para_Troca_Automatica(10);
    var Proximo_Input_Radio;
    const Atual_Input_Radio_Selecionado = document.querySelector(
      "input[name='Slides_Control']:checked"
    );

    const Numero_Do_Id_Ativo = Atual_Input_Radio_Selecionado.value;

    var Numero_Do_Id_Para_Ativar = parseInt(Numero_Do_Id_Ativo) + 1;

    if (
      document.getElementById("Barra_De_Pesquisa_" + Numero_Do_Id_Para_Ativar)
    ) {
      Proximo_Input_Radio = document.getElementById(
        "Barra_De_Pesquisa_" + Numero_Do_Id_Para_Ativar
      );
    } else {
      Proximo_Input_Radio = document.getElementById("Barra_De_Pesquisa_" + 1);
    }
    Proximo_Input_Radio.click();
  }
  //#endregion

  //#region Função que Volta para o slide anterior quando clicar em um botão
  function Voltar_Slide() {
    setTemporizador_Para_Troca_Automatica(10);
    var Anterior_Input_Radio;
    const Atual_Input_Radio_Selecionado = document.querySelector(
      "input[name='Slides_Control']:checked"
    );

    const Numero_Do_Id_Ativo = Atual_Input_Radio_Selecionado.value;

    var Numero_Do_Id_Para_Ativar = parseInt(Numero_Do_Id_Ativo) - 1;

    if (
      document.getElementById("Barra_De_Pesquisa_" + Numero_Do_Id_Para_Ativar)
    ) {
      Anterior_Input_Radio = document.getElementById(
        "Barra_De_Pesquisa_" + Numero_Do_Id_Para_Ativar
      );
    } else {
      for (var i = 5; i >= 1; i--) {
        if (document.getElementById("Barra_De_Pesquisa_" + i)) {
          Anterior_Input_Radio = document.getElementById(
            "Barra_De_Pesquisa_" + i
          );
          break;
        }
      }
    }

    Anterior_Input_Radio.click();
  }
  //#endregion

  //#region Timer de avanço de slide após 10 segundos
  const [
    Temporizador_Para_Troca_Automatica,
    setTemporizador_Para_Troca_Automatica,
  ] = useState(10);

  useEffect(() => {
    const Intervalo_De_Troca_De_Slide = setInterval(() => {
      setTemporizador_Para_Troca_Automatica((Valor_Antigo) => Valor_Antigo - 1);
    }, 1000);

    return () => clearInterval(Intervalo_De_Troca_De_Slide);
  }, []);

  useEffect(() => {
    if (Temporizador_Para_Troca_Automatica === 0) {
      console.log("Slide sendo avançado...");
      document.getElementById("Botao_De_Avancar_Para_O_Proximo_Slide").click();
      if (Temporizador_Para_Troca_Automatica === 0) {
        setTemporizador_Para_Troca_Automatica(10);
      }
    }
  }, [Temporizador_Para_Troca_Automatica]);
  //#endregion

  //#region Retorno JSX
  return (
    <div className="Navegacao_Entre_Slides">
      <button onClick={Voltar_Slide} className="Botao_Slide_Anterior">
        {"<"}
      </button>
      {Imagens_de_Slide.map((item) => {
        return (
          <label
            className="Barra_De_Navegacao_De_Imagem"
            htmlFor={"Slide_" + item.Id}
            key={item.Id + item.Imagem}
            id={"Barra_De_Pesquisa_" + item.Id}
            style={
              item.Id === 1
                ? { backgroundColor: "rgb(29, 29, 29)" }
                : { backgroundColor: "" }
            }
            onClick={() => {
              setTemporizador_Para_Troca_Automatica(10);
              setTimeout(() => {
                var Todos_Os_Input_Radio_De_Navegacao =
                  document.querySelectorAll(
                    ".Input_Tipo_Radio_Alteracao_Slide"
                  );

                Todos_Os_Input_Radio_De_Navegacao.forEach((item) => {
                  var Label_Correspondente = document.getElementById(
                    "Barra_De_Pesquisa_" + item.value
                  );
                  Label_Correspondente.style.backgroundColor = "";
                  if (item.checked) {
                    Label_Correspondente.style.backgroundColor =
                      "rgb(29, 29, 29)";
                  }
                });
              }, 50);
            }}
          ></label>
        );
      })}
      <button
        onClick={Avancar_Slide}
        className="Botao_Proximo_Slide"
        id="Botao_De_Avancar_Para_O_Proximo_Slide"
      >
        {">"}
      </button>
    </div>
  );
  //#endregion
}
//#endregion
