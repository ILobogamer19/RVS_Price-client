import Logo from "../img/RVS_Price.webp";
import Lupa from "../img/Lupa.webp";
import Barra_De_Pesquisa from "./Subcomponents_Banner_Topo/Barra_De_Pesquisa";
import Menu from "./Subcomponents_Banner_Topo/Menu";
import Menu_Para_Ajuste_De_Tamanho from "./Subcomponents_Banner_Topo/Menu_Para_Ajuste_De_Tamanho";
import Mudar_Tema_Do_Site_Funcao from "./Subcomponents_Banner_Topo/Mudar_Tema_Do_Site";

export default function Banner_Topo() {
  return (
    <header>
      <div className="Parte_Superior_Do_Site">
        <div className="Banner_Topo" id="Banner_Topo">
          <Barra_De_Pesquisa />
          <Menu />
        </div>
        <Mudar_Tema_Do_Site_Funcao />
      </div>
      <div className="Parte_Superior_Do_Site Parte_Superior_Do_Site_Ocupar_Espaco">
        <div className="Banner_Topo" id="Banner_Topo">
          <div className="Barra_De_Pesquisa_Logo_Pesquisa">
            <img src={Logo} className="Logo_Site" alt="Logo do Site" />

            <img
              src={Lupa}
              className="Img_Lupa"
              onClick={() =>
                document.querySelector("#Input_De_Pesquisa").focus()
              }
              alt="Lupa de pesquisa"
            />
          </div>
          <Menu_Para_Ajuste_De_Tamanho />
        </div>
        <Mudar_Tema_Do_Site_Funcao />
      </div>
    </header>
  );
}
