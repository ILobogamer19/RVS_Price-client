import Logo from "../../img/RVS_Price.png";
import Lupa from "../../img/Lupa.png";

export default function Barra_De_Pesquisa() {
  return (
    <div>
      <img src={Logo} className="Logo_Site" />
      <input
        type="text"
        placeholder="Buscar produtos, mercados, e muito mais"
        className="Pesquisa"
        id="Input_De_Pesquisa"
      />
      <img
        src={Lupa}
        className="Img_Lupa"
        onClick={() => document.querySelector("#Input_De_Pesquisa").focus()}
      />
    </div>
  );
}
