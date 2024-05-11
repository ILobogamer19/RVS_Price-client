//#region Importações de estilização
import "./style.css";
//#endregion

//#region Importações de imagem
import Sem_Imagem from "../../img/Sem_Imagem.png";
//#endregion

//#region Importações de bibliotecas
import Axios from "axios";
import Cookies from "js-cookie";
import React, { useState, useEffect, useRef } from "react";
//#endregion

//#region Importações de componentes
import Inserir_Etiqueta_Do_Mercado from "../../components/Inserir_Etiqueta_Do_Mercado";
import Opcoes_De_Cadastro_De_Mercados from "../../components/Opcoes_De_Cadastro_De_Mercados";
//#endregion

export default function Cadastro_Produto() {
  var Dados_Cadastrados = {};

  //#region Envio de cadastro para o servidor
  function Enviar_Dados_De_Cadastro_Para_Servidor() {
    console.log("Enviando para servidor");
    setTimeout(() => {
      Axios.post(
        "https://rvsprice-server.vercel.app/cadastrar",
        // "http://localhost:5000/cadastrar",
        Dados_Cadastrados,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((Resposta) => {
        console.log("Cadastro realizado: " + Resposta.data.cadastro_realizado);
        if (Resposta.data.cadastro_realizado) {
          alert("Cadastrado com sucesso");
        } else {
          alert("Falha no cadastro");
          if (Resposta.data.imagem) {
            console.log("imagem: " + Resposta.data.imagem);
          } else if (Resposta.data.nome) {
            console.log("nome: " + Resposta.data.nome);
          } else if (Resposta.data.valor) {
            console.log("valor: " + Resposta.data.valor);
          } else if (Resposta.data.mercado) {
            console.log("mercado: " + Resposta.data.mercado);
          } else if (Resposta.data.categoria) {
            console.log("categoria: " + Resposta.data.categoria);
          }
        }
      });
      console.log("Finalizado");
    }, 1000);
  }
  //#endregion

  //#region Referencias de Inputs
  const Input_De_Referencia_Imagem = useRef(null);
  const Input_De_Referencia_Nome_Produto = useRef(null);
  const Input_De_Referencia_Valor = useRef(null);
  const Input_De_Referencia_Mercado = useRef(null);
  const Input_De_Referencia_Categoria = useRef(null);
  const Input_De_Referencia_Informacoes = useRef(null);
  const Input_De_Referencia_Outros_Nomes = useRef(null);
  //#endregion

  //#region Obtendo valores anteriores
  var Imagem_Escolhido = localStorage.getItem("Imagem_Produto");
  var Nome_Escolhido = Cookies.get("Nome_Produto");
  var Valor_Escolhido = Cookies.get("Valor_Produto");
  var Mercado_Escolhido = Cookies.get("Nome_Mercado");
  var Categoria_Escolhido = Cookies.get("Categoria");
  var Informacoes_Escolhido = Cookies.get("Informacoes_Adicionais");
  var Outros_Nomes_Escolhido = Cookies.get("Outros_Nomes");
  //#endregion

  //#region Definindo o valor de Valor_Escolhido para R$ se for undefined
  if (Valor_Escolhido == "undefined") {
    Valor_Escolhido = "R$";
  }
  //#endregion

  //#region Criando variaveis para receber os valores dos inputs
  const [Imagem_Produto, setImagem_Produto] = useState(
    Imagem_Escolhido ? Imagem_Escolhido : Sem_Imagem
  );
  const [Nome_Produto, setNome_Produto] = useState(
    Nome_Escolhido ? Nome_Escolhido : ""
  );
  const [Valor_Produto, setValor_Produto] = useState(
    Valor_Escolhido ? Valor_Escolhido : "R$"
  );
  const [Nome_Mercado, setNome_Mercado] = useState(
    Mercado_Escolhido ? Mercado_Escolhido : ""
  );
  const [Categoria, setCategoria] = useState(
    Categoria_Escolhido ? Categoria_Escolhido : ""
  );
  const [Informacoes_Adicionais, setInformacoes_Adicionais] = useState(
    Informacoes_Escolhido ? Informacoes_Escolhido : ""
  );
  const [Outros_Nomes, setOutros_Nomes] = useState(
    Outros_Nomes_Escolhido ? Outros_Nomes_Escolhido : ""
  );
  //#endregion

  //#region Atualização de Cookies e localStorage
  useEffect(() => {
    localStorage.setItem("Imagem_Produto", Imagem_Produto);
  }, [Imagem_Produto]);

  useEffect(() => {
    Cookies.set("Nome_Produto", Nome_Produto, { expires: 30 });
  }, [Nome_Produto]);

  useEffect(() => {
    Cookies.set("Valor_Produto", Valor_Produto, { expires: 30 });
  }, [Valor_Produto]);

  useEffect(() => {
    Cookies.set("Nome_Mercado", Nome_Mercado, { expires: 30 });
  }, [Nome_Mercado]);

  useEffect(() => {
    Cookies.set("Categoria", Categoria, { expires: 30 });
  }, [Categoria]);

  useEffect(() => {
    Cookies.set("Informacoes_Adicionais", Informacoes_Adicionais, {
      expires: 30,
    });
  }, [Informacoes_Adicionais]);

  useEffect(() => {
    Cookies.set("Outros_Nomes", Outros_Nomes, { expires: 30 });
  }, [Outros_Nomes]);
  //#endregion

  //#region Função de envio e limpeza de cadastro
  const Envio_E_Limpeza_De_Cadastro = () => {
    if (
      !Imagem_Produto ||
      Imagem_Produto == "/static/media/Sem_Imagem.60408411369fbfea2d38.png"
    ) {
      alert("Está faltando colocar a imagem");
      Input_De_Referencia_Imagem.current.click();
      return;
    }
    if (!Nome_Produto) {
      alert("Está faltando colocar o nome");
      Input_De_Referencia_Nome_Produto.current.focus();
      return;
    }
    if (!Valor_Produto || Valor_Produto == "R$") {
      alert("Está faltando colocar o preço");
      Input_De_Referencia_Valor.current.focus();
      return;
    }
    if (!Nome_Mercado) {
      alert("Está faltando selecionar o mercado");
      Input_De_Referencia_Mercado.current.focus();
      return;
    }
    if (!Categoria) {
      alert("Está faltando selecionar a categoria");
      Input_De_Referencia_Categoria.current.focus();
      return;
    }

    var Valor_Produto_Formatado = Testador_De_Casas_Decimais(Valor_Produto);

    Dados_Cadastrados = {
      Imagem_Produto,
      Nome_Produto,
      Valor_Produto_Formatado,
      Nome_Mercado,
      Categoria,
      Informacoes_Adicionais,
      Outros_Nomes,
    };

    console.log(Dados_Cadastrados);

    Mercado_Escolhido = undefined;
    setImagem_Produto(Sem_Imagem);
    setNome_Produto("");
    setValor_Produto("R$");
    setNome_Mercado("");
    setCategoria("");
    setInformacoes_Adicionais("");
    setOutros_Nomes("");
    Produto_Cadastrado = true;

    Enviar_Dados_De_Cadastro_Para_Servidor();
  };
  //#endregion

  //#region Função que testa se existem casas decimais
  const Testador_De_Casas_Decimais = (Valores) => {
    var Valores_Sem_Texto;

    console.log(Valores);

    if (Valores == "R$" || Valores == "R" || Valores === undefined) {
      return;
    } else if (Valores.includes("R$")) {
      Valores_Sem_Texto = Valores.replace("R$", "");
    }

    if (Valores_Sem_Texto === NaN || Valores_Sem_Texto == "NaN") {
      return;
    }

    var Valores_Com_Ponto = Valores_Sem_Texto;

    if (Valores.includes(",")) {
      Valores_Com_Ponto = Valores_Sem_Texto.replace(",", ".");
    }

    if (Valores_Com_Ponto === NaN || Valores_Com_Ponto == "NaN") {
      return;
    }

    var Valores_Em_Formato_Numerico = parseFloat(Valores_Com_Ponto);

    var Valores_Final_Com_Decimal = Valores_Em_Formato_Numerico.toFixed(2);

    if (
      Valores_Final_Com_Decimal === NaN ||
      Valores_Final_Com_Decimal == "NaN"
    ) {
      return;
    } else {
      return "R$" + Valores_Final_Com_Decimal.replace(".", ",");
    }
  };

  //#endregion

  //#region Criando um leitor de arquivos para converter input file para imagem
  const Leitor_De_File = new FileReader();
  //#endregion

  //#region Configurações da pré vizualização de cadastro
  var Produto_Cadastrado = false;
  var Imagem_Produto_Pre_Cadastro =
    Imagem_Produto !== "/static/media/Sem_Imagem.60408411369fbfea2d38.png"
      ? Imagem_Produto
      : "";

  //#endregion

  //#region Excluir produto pré cadastrado
  const Excluir_Pre_Cadastro = () => {
    Mercado_Escolhido = false;
    setImagem_Produto(Sem_Imagem);
    setNome_Produto("");
    setValor_Produto("R$");
    setNome_Mercado("");
    setCategoria("");
    setInformacoes_Adicionais("");
    setOutros_Nomes("");
  };
  //#endregion

  //#region Retorno em JSX
  return (
    <>
      <div className="Controle_De_Tamanho">
        <div className="Painel_Pre_Cadastro">
          <h1>Vizualização de pré cadastro</h1>
          <div
            className="Pre_Produto_Cadastrado_Informacoes"
            title={
              Informacoes_Adicionais !== ""
                ? Informacoes_Adicionais
                : "Sem informações adicionais"
            }
          >
            <img
              src={Imagem_Produto_Pre_Cadastro}
              className="Imagem_Do_Pre_Produto_Cadastrado"
            />
            {Inserir_Etiqueta_Do_Mercado(
              Nome_Mercado,
              "Logo_Mercado_Pre_Cadastro"
            )}
            <h3 className="Nome_Do_Pre_Produto_Cadastrado">{Nome_Produto}</h3>
            <p className="Valor_Do_Pre_Produto_Cadastrado">
              {Valor_Produto !== "R$" ? Valor_Produto : ""}
            </p>
          </div>
        </div>

        <div className="Painel">
          <h1 style={{ textAlign: "center" }}>Cadastre o Produto</h1>
          <div>
            <div className="Caixa_De_Input_De_Imagem">
              <p className="Input_De_Imagem_Borda"></p>
              <input
                type="file"
                accept="image/*"
                className="Input_De_Imagem"
                id="Input_Imagem_"
                ref={Input_De_Referencia_Imagem}
                onChange={(e) => {
                  Leitor_De_File.onload = () => {
                    setImagem_Produto(Leitor_De_File.result);
                  };

                  if (e.target.files[0]) {
                    Leitor_De_File.readAsDataURL(e.target.files[0]);
                  }
                  setValor_Produto(Testador_De_Casas_Decimais(Valor_Produto));
                }}
              />
            </div>
            <div className="Div_Imagem_Do_Produto">
              <div className="Diminuidor_De_Tamanho">
                <img src={Imagem_Produto} className="Imagem_Do_Produto" />
              </div>
            </div>
          </div>
          <br />
          <label>Nome: </label>
          <input
            type="text"
            placeholder="Nome Completo"
            value={Nome_Produto}
            ref={Input_De_Referencia_Nome_Produto}
            onChange={(e) => {
              setNome_Produto(e.target.value);
              setValor_Produto(Testador_De_Casas_Decimais(Valor_Produto));
            }}
          />
          <br />
          <label>Preço: </label>
          <input
            type="text"
            placeholder="Preço"
            value={Valor_Produto}
            ref={Input_De_Referencia_Valor}
            onChange={(e) => {
              var Valor_Do_Input_Preco = e.target.value;

              if (Valor_Do_Input_Preco.includes("R$")) {
                setValor_Produto(Valor_Do_Input_Preco);
              } else if (!Valor_Do_Input_Preco.includes("$")) {
                setValor_Produto("R$" + Valor_Do_Input_Preco.replace("R", ""));
              } else {
                setValor_Produto("R$" + Valor_Do_Input_Preco);
              }
              if (Valor_Do_Input_Preco.includes(".")) {
                setValor_Produto(Valor_Do_Input_Preco.replace(".", ","));
              }
            }}
          />
          <br />
          <label>Mercado: </label>
          <select
            value={Nome_Mercado}
            ref={Input_De_Referencia_Mercado}
            onChange={(e) => {
              setNome_Mercado(e.target.value);
              setValor_Produto(Testador_De_Casas_Decimais(Valor_Produto));
            }}
          >
            {!Mercado_Escolhido ? <option value=""></option> : ""}
            <Opcoes_De_Cadastro_De_Mercados />
          </select>
          <br />
          <label>Categoria: </label>
          <input
            type="text"
            placeholder="Categoria"
            value={Categoria}
            ref={Input_De_Referencia_Categoria}
            onChange={(e) => {
              setCategoria(e.target.value);
              setValor_Produto(Testador_De_Casas_Decimais(Valor_Produto));
            }}
          />
          <br />
          <label>Informações adicionais: </label>
          <input
            type="text"
            placeholder="Informações"
            value={Informacoes_Adicionais}
            ref={Input_De_Referencia_Informacoes}
            onChange={(e) => {
              setInformacoes_Adicionais(e.target.value);
              setValor_Produto(Testador_De_Casas_Decimais(Valor_Produto));
            }}
          />
          <br />
          <label>Outros nomes: </label>
          <input
            type="text"
            placeholder="Outros nomes"
            value={Outros_Nomes}
            ref={Input_De_Referencia_Outros_Nomes}
            onChange={(e) => {
              setOutros_Nomes(e.target.value);
              setValor_Produto(Testador_De_Casas_Decimais(Valor_Produto));
            }}
          />

          <button
            className="Botao_De_Cadastro"
            onClick={Envio_E_Limpeza_De_Cadastro}
          >
            Cadastrar
          </button>
          <br />
          <button onClick={Excluir_Pre_Cadastro}>Excluir</button>
        </div>
        {Produto_Cadastrado && (
          <div className="Painel_Ultimo_Cadastro">
            <h1>Ultimo cadastro</h1>
            <div className="Ultimo_Produto_Cadastrado_Informacoes">
              <img
                src={Sem_Imagem}
                className="Imagem_Do_Ultimo_Produto_Cadastrado"
              />
              <h3 className="Nome_Do_Ultimo_Produto_Cadastrado">
                Nome Produto
              </h3>
              <p className="Valor_Do_Ultimo_Produto_Cadastrado">R$10,00</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
  //#endregion
}
