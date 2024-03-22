import React, { useState } from "react";

const Imagens_de_Slide_Json = await fetch("./data/Slides_Apresentacao.json");

const Imagens_de_Slide = await Imagens_de_Slide_Json.json();

export default function Input_Tipo_Radio() {
  const [Input_Radio_Selecionado, setInput_Radio_Selecionado] = useState(1);

  const Atualizar_O_Input_Selecionado = (evento) => {
    setInput_Radio_Selecionado(parseInt(evento.target.value));
  };

  return (
    <>
      {Imagens_de_Slide.map((item) => {
        return (
          <input
            type="radio"
            name="Slides_Control"
            id={"Slide_" + item.Id}
            value={item.Id}
            checked={Input_Radio_Selecionado === item.Id}
            onChange={Atualizar_O_Input_Selecionado}
            key={item.Id}
            className="Input_Tipo_Radio_Alteracao_Slide"
          />
        );
      })}
    </>
  );
}
