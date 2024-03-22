import Barra_De_Pesquisa from "./Subcomponents_Banner_Topo/Barra_De_Pesquisa";
import Menu from "./Subcomponents_Banner_Topo/Menu";

export default function Banner_Topo() {
  return (
    <div className="Banner_Topo">
      <Barra_De_Pesquisa />
      <Menu />
    </div>
  );
}
