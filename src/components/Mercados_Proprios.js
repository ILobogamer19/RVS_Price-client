import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Verificar_Qual_Mercado_Pertence_O_Produto from "./Inserir_Etiqueta_Do_Mercado";

const Mercados_Json = await fetch("./data/Mercados.json");

const Mercados = await Mercados_Json.json();

const Hr_Marcacao_Limite = styled.hr`
  display: block;
  width: 98vw;
  border-top: 0.5vh solid black;
`;

export default function Marcados_Pagina_Propria() {
  const url = useNavigate();

  return (
    <>
      <div className="Mercados_Juntos Opacidade_De_Itens_Para_Temas">
        {Mercados.map((item) => {
          return (
            <div
              className="Div_Mercado_Individual"
              onClick={() => {
                url("/" + item.Mercado);
              }}
              key={item.Mercado}
            >
              {Verificar_Qual_Mercado_Pertence_O_Produto(
                item.Mercado,
                "Icon_Mercado_Para_Navegar_Para_Mercado"
              )}
            </div>
          );
        })}
      </div>

      <Hr_Marcacao_Limite className="Hr_Demarcacao_De_Separacao_Banners_Produtos" />
    </>
  );
}
