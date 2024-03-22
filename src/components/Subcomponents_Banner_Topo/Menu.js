import Cadastre_Seu_Mercado from "../../img/Cadastre_Seu_Mercado.png";
import Menor_Preco from "../../img/Menor_Preco.png";
import Mercados from "../../img/Mercados.png";
import Promocoes from "../../img/Promocoes.png";
import Carrinho from "../../img/Carrinho.png";

export default function Menu() {
  return (
    <div className="Links_Navegacao">
      <a href="" className="Link_De_Navegacao_Com_Imagem">
        <img src={Cadastre_Seu_Mercado} className="Imagem_Inicial" />
        Registre seu Mercado
      </a>
      <p className="Separacao_Links_Navegacao">
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </p>
      <a href="" className="Link_De_Navegacao_Com_Imagem">
        <img src={Menor_Preco} className="Imagem_Inicial" />
        Menor Preço
      </a>
      <p className="Separacao_Links_Navegacao">
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </p>
      <a href="" className="Link_De_Navegacao_Com_Imagem">
        <img src={Mercados} className="Imagem_Inicial" />
        Mercados
      </a>
      <p className="Separacao_Links_Navegacao">
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </p>
      <a href="" className="Link_De_Navegacao_Com_Imagem">
        <img src={Promocoes} className="Imagem_Inicial" />
        Promoções
      </a>
      <p className="Separacao_Links_Navegacao">
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </p>
      <a href="" className="Link_De_Navegacao_Com_Imagem">
        <img src={Carrinho} className="Imagem_Inicial" />
        Carrinho de compras
      </a>
    </div>
  );
}
