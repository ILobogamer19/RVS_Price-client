import styled from "styled-components";

const Div_Espacamento = styled.div`
  height: 36vw;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

const Hr_Marcacao_Limite = styled.hr`
  display: block;
  width: 98vw;
  border-top: 0.5vh solid black;
`;

export default function Reespacamento_Do_Banner_Apresentacoes() {
  return (
    <Div_Espacamento className="Div_Espacamento_Entre_Linha">
      <Hr_Marcacao_Limite className="Hr_Demarcacao_De_Separacao_Banners_Produtos" />
    </Div_Espacamento>
  );
}
