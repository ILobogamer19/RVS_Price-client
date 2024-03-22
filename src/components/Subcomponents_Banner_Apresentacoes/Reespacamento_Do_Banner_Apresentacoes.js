import styled from "styled-components";

export default function Reespacamento_Do_Banner_Apresentacoes() {
  const Div_Espacamento = styled.div`
    height: 55vh;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
  `;

  const Hr_Marcacao_Limite = styled.hr`
    display: block;
    width: 98vw;
    border-top: 1vh solid black;
  `;

  return (
    <Div_Espacamento>
      <Hr_Marcacao_Limite />
    </Div_Espacamento>
  );
}
