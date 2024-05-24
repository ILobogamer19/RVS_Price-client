import Barra_De_Pesquisa from "./Subcomponents_Banner_Topo/Barra_De_Pesquisa";
import Menu from "./Subcomponents_Banner_Topo/Menu";
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
    <header/>
  );
}
