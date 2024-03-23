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
      <div className="Login">
        <div>
          <label htmlFor="Input_De_Login_User">User:</label>
          <input type="text" placeholder="User" id="Input_De_Login_User" />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            placeholder="Senha"
            id="Input_De_Login_Senha"
          />
        </div>
        <hr />
        <button className="Botao_De_Logar_User_Senha">Logar</button>
      </div>
    </div>
  );
}
