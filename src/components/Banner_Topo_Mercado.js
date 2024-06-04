import Logo from "../img/RVS_Price.webp";
import Lupa from "../img/Lupa.webp";
import Home from "../img/Home.webp";
import Mudar_Tema_Do_Site_Funcao_Mercado from "./Subcomponents_Banner_Topo_Mercado/Mudar_Tema_Do_Site_Mercado";
import Inserir_Etiqueta_Do_Mercado from "./Ferramentas/Inserir_Etiqueta_Do_Mercado";

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
              onClick={() => {
                console.log(Atributos.Mercado);
              }}
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
        <Mudar_Tema_Do_Site_Funcao_Mercado />
      </div>
      <div className="Parte_Superior_Do_Site Parte_Superior_Do_Site_Ocupar_Espaco">
        <div className="Banner_Topo" id="Banner_Topo">
          <div className="Barra_De_Pesquisa_Logo_Pesquisa">
            <img
              src={Inserir_Etiqueta_Do_Mercado(Atributos.Mercado, "", "Site")}
              className="Logo_Site"
              alt="Logo do Site"
              onClick={() => {
                console.log(Atributos.Mercado);
              }}
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
