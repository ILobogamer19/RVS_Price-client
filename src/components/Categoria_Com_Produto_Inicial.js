import Axios from "axios";
import React, { useEffect, useState } from "react";
import Inserir_Etiqueta_Do_Mercado from "../components/Inserir_Etiqueta_Do_Mercado";

const Categoria_Produto_Json = await fetch(
  "./data/Categorias_Para_Aparecer_Na_Home.json"
);
const Categoria_Produto_Objeto = await Categoria_Produto_Json.json();

const Categoria_Produto = Categoria_Produto_Objeto;

export default function Categoria_Com_Produto_Inicial() {
  const [
    Produtos_Da_Categoria_Selecionada,
    setProdutos_Da_Categoria_Selecionada,
  ] = useState([]);

  //#region Envio de Categoria e resultado
  const Enviar_Dados_De_Cadastro_Para_Servidor = (
    Categoria_Pesquisada,
    Numero_Categoria
  ) => {
    console.log("Enviando para servidor");
    console.log(Numero_Categoria);
    console.log(Categoria_Pesquisada);

    Axios.post(
      "https://rvsprice-server.vercel.app/pesquisa-categoria-produto",
      // "http://localhost:5000/pesquisa-categoria-produto",
      { Categoria_Para_Pesquisa: Categoria_Pesquisada },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((Resposta) => {
      console.log("Resposta: ");
      console.log(Resposta.data.produtos_achados);

      if (!Produtos_Da_Categoria_Selecionada[Numero_Categoria]) {
        console.log("Adicionando valor: " + Numero_Categoria);
        setProdutos_Da_Categoria_Selecionada((prevState) => ({
          ...prevState,
          [Numero_Categoria]: Resposta.data.produtos_achados,
        }));
        console.log(Produtos_Da_Categoria_Selecionada);
      } else {
        console.error("Ja tem valor dentro: " + Numero_Categoria);
        setProdutos_Da_Categoria_Selecionada((prevState) => ({
          ...prevState,
          [Numero_Categoria]: [
            ...prevState[Numero_Categoria],
            Resposta.data.produtos_achados,
          ],
        }));
        console.log(Produtos_Da_Categoria_Selecionada);
      }

      return Resposta.data.produtos_achados;
    });
    console.log("Finalizado");
  };
  //#endregion

  useEffect(() => {
    Categoria_Produto.map((item, index) => {
      console.log(item.Categoria);
      console.log(index);
      Enviar_Dados_De_Cadastro_Para_Servidor(item.Categoria, index);
    });

    console.log(Categoria_Produto);
  }, []);

  return (
    <>
      {Categoria_Produto.map((item, index) => {
        console.log("Produtos: Tentativa: " + index);
        console.log(Produtos_Da_Categoria_Selecionada[index]);
        return (
          <div
            className={"Categorias Categoria_" + item.Categoria}
            key={item.Categoria}
          >
            <h1 key={item.Categoria + 1}>{item.Categoria}</h1>
            <div className="Produtos">
              {Produtos_Da_Categoria_Selecionada[index]
                ? Produtos_Da_Categoria_Selecionada[index].map((Categoria) => {
                    // console.log(Categoria.Imagem);

                    console.log(Categoria.Imagem);
                    return (
                      <div
                        className={"Produto_" + Categoria.Id_Produtos}
                        key={Categoria.Nome}
                      >
                        {Inserir_Etiqueta_Do_Mercado(
                          Categoria.Mercado,
                          "Logo_Mercado_Produtos_Home"
                        )}
                        <img
                          src={Categoria.Imagem}
                          className="Imagem_Do_Produto_Home"
                        />
                        <h3>{Categoria.Nome}</h3>
                        <p>R$ {Categoria.Preco}</p>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        );
      })}
    </>
  );
}

//  return (
//   <>
//   {Categoria_Produto.map((Categoria) => (
//     <div className={"Categorias Categoria_" + Categoria} key={Categoria}>
//       <h1 key={Categoria + 1}>{Categoria}</h1>
//       <div className="Produtos">
//         {Categoria_Produto_Objeto[Categoria].map((Categoria) => (
//           <div
//             className={"Produto_" + Categoria.Produto}
//             key={Categoria.Produto}
//           >
//             <img src={Categoria.Imagem} />
//             <h3>{Categoria.Produto}</h3>
//             <p>R$ {Categoria.Preco.toFixed(2)}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   ))}
// </>
// );
