import Lupa from "../img/Lupa.webp";
import Home from "../img/Home.webp";
import Mudar_Tema_Do_Site_Funcao_Mercado from "./Subcomponents_Banner_Topo_Mercado/Mudar_Tema_Do_Site_Mercado";
import Inserir_Etiqueta_Do_Mercado from "./Ferramentas/Inserir_Etiqueta_Do_Mercado";
import Cookies from "js-cookie";

export default function Banner_Topo_Mercado(Atributos) {
  return (
    <header>
      <div className="Parte_Superior_Do_Site">
        <div className="Banner_Topo" id="Banner_Topo">
          <div className="Barra_De_Pesquisa_Logo_Pesquisa">
            <img
              src={Inserir_Etiqueta_Do_Mercado(Atributos.Mercado, "", "Site")}
              className="Logo_Site"
              alt="Logo do Site"
            />
            <input
              type="text"
              placeholder="Buscar produtos, mercados, e muito mais"
              className="Pesquisa"
              id="Input_De_Pesquisa"
            />
            <img
              src={Lupa}
              className="Img_Lupa"
              onClick={() =>
                document.querySelector("#Input_De_Pesquisa").focus()
              }
              alt="Lupa de pesquisa"
            />
          </div>
          <nav>
            <div className="Links_Navegacao">
              <div
                className="Div_Com_Os_Links_De_Navegacao"
                style={{
                  margin: "0px",
                }}
              >
                <a href="/" className="Link_De_Navegacao_Com_Imagem">
                  <img
                    src={Home}
                    className="Imagem_Inicial"
                    alt={"Icon da Home"}
                  />
                  Home
                </a>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <p>|</p>
                  <p>|</p>
                  <p>|</p>
                </div>
                <div
                  className="Div_Com_Os_Links_De_Navegacao"
                  onClick={(e) => {
                    var Dados_De_Itens_De_Carrinho_Convertido = JSON.parse(
                      localStorage.getItem("Produtos_No_Carrinho")
                    );
                  }}
                  style={{
                    margin: "0px",
                  }}
                >
                  <a href="/Correia" className="Link_De_Navegacao_Com_Imagem">
                    <div
                      onClick={() => {
                        Cookies.set(
                          "Quantia_De_Produtos_Adicionados_No_Carrinho",
                          ""
                        );

                        var Dados_De_Itens_De_Carrinho_Convertido = JSON.parse(
                          localStorage.getItem("Produtos_No_Carrinho")
                        );
                      }}
                      className="Bola_Que_Informa_Quantos_Produtos_Tem_No_Carrinho"
                      style={{ display: "none", zIndex: "9999999999999999999" }}
                    ></div>
                    <img
                      src="img/Carrinho.webp"
                      className="Imagem_Inicial"
                      alt="Imagem do Carrinho"
                    />
                    Carrinho
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <Mudar_Tema_Do_Site_Funcao_Mercado Mercado={Atributos.Mercado} />
      </div>
      <div className="Parte_Superior_Do_Site Parte_Superior_Do_Site_Ocupar_Espaco">
        <div className="Banner_Topo" id="Banner_Topo">
          <div className="Barra_De_Pesquisa_Logo_Pesquisa">
            <img
              src={Inserir_Etiqueta_Do_Mercado(Atributos.Mercado, "", "Site")}
              className="Logo_Site"
              alt="Logo do Site"
            />
            <input
              type="text"
              placeholder="Buscar produtos, mercados, e muito mais"
              className="Pesquisa"
              id="Input_De_Pesquisa"
            />
            <img
              src={Lupa}
              className="Img_Lupa"
              onClick={() =>
                document.querySelector("#Input_De_Pesquisa").focus()
              }
              alt="Lupa de pesquisa"
            />
            {/* <Login /> */}
          </div>
          <nav>
            <div className="Links_Navegacao">
              <div className="Div_Com_Os_Links_De_Navegacao">
                <a href="/" className="Link_De_Navegacao_Com_Imagem">
                  <img
                    src={Home}
                    className="Imagem_Inicial"
                    alt={"Icon da Home"}
                  />
                  Home
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
