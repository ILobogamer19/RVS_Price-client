import Logo from "../../img/RVS_Price.webp";
import Lupa from "../../img/Lupa.webp";
import Login from "./Login";

export default function Barra_De_Pesquisa() {
  return (
    <div className="Barra_De_Pesquisa_Logo_Pesquisa">
      <img src={Logo} className="Logo_Site" alt="Logo do Site" />
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
        alt="Lupa de pesquisa"
      />
      <Login />
    </div>
  );
}
