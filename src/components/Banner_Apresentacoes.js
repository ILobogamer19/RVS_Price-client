import Input_Tipo_Radio from "./Subcomponents_Banner_Apresentacoes/Input_Tipo_Radio";
import Imagens_Do_Slide from "./Subcomponents_Banner_Apresentacoes/Imagens_Do_Slide";
import Navegacao_Entre_Slides from "./Subcomponents_Banner_Apresentacoes/Navegacao_Entre_Slides";
import Reespacamento_Do_Banner_Apresentacoes from "./Subcomponents_Banner_Apresentacoes/Reespacamento_Do_Banner_Apresentacoes";
import styled from "styled-components";

const Imagens_de_Slide_Json = await fetch("./data/Slides_Apresentacao.json");
const Imagens_de_Slide = await Imagens_de_Slide_Json.json();

export default function Banner_Apresentacoes() {
  const Quantia_De_Imagens_Existentes = Object.keys(Imagens_de_Slide).length;

  const Tamanho_Total_De_Largura = Quantia_De_Imagens_Existentes * 100;

  const Div_Slides = styled.div`
    display: flex;
    width: ${Tamanho_Total_De_Largura}%;
    height: 100%;
  `;

  return (
    <>
      <div className="Imagens_De_Apresentacoes">
        <Div_Slides>
          <Input_Tipo_Radio />
          <Imagens_Do_Slide />
          <Navegacao_Entre_Slides />
        </Div_Slides>
      </div>
      <Reespacamento_Do_Banner_Apresentacoes />
    </>
  );
}
