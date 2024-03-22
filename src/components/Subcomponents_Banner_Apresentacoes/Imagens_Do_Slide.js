import styled from "styled-components";

const Imagens_de_Slide_Json = await fetch("./data/Slides_Apresentacao.json");

const Imagens_de_Slide = await Imagens_de_Slide_Json.json();

export default function Imagens_Do_Slide() {
  const Quantia_De_Imagens_Existentes = Object.keys(Imagens_de_Slide).length;
  const Slide_Ocupacao = Math.ceil(100 / Quantia_De_Imagens_Existentes);

  const Div_Slide = styled.div`
    width: ${Slide_Ocupacao}%;
    transition: 0.6s;
  `;

  return (
    <>
      {Imagens_de_Slide.map((item) => {
        return (
          <Div_Slide
            className={"Slide" + (item.Id === 1 ? " Primeiro_Slide" : "")}
            key={item.Imagem}
          >
            <img src={item.Imagem} />
          </Div_Slide>
        );
      })}
    </>
  );
}
