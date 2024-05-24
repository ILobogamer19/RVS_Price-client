import "./style.css";
import "./Estilo_Logo_Nos_Produtos.css";
import "./Estilo_Banner_De_Slides.css";
import "./Estilo_Categorias_E_Produtos_Home.css";
import "./Estilo_Mudar_Tema.css";
import "./Estilo_Mercados_Links.css";
import "./Estilo_Complemento_Responsibilidade.css";
import "./Estilo_Tela_Login_Responsivo.css";
import "./Estilo_Responsivo_Geral.css";
import Banner_Topo from "../../components/Banner_Topo";
import Banner_Apresentacoes from "../../components/Banner_Apresentacoes";
import Categoria_Com_Produto_Inicial from "../../components/Categoria_Com_Produto_Inicial";
import Mercados_Proprios from "../../components/Mercados_Proprios";

export default function HomePage() {
  return (
    <div className="Corpo_Site">
      <Banner_Topo />
      <Banner_Apresentacoes />
      <Mercados_Proprios />
      <div className="Secao_Categorias_Com_Produtos Opacidade_De_Itens_Para_Temas">
        <Categoria_Com_Produto_Inicial />
      </div>
    <footer>
      <div className="Direitos_Autorais_RVS">
        <p>© 2024 RVS Price. Todos os direitos reservados.</p>
      </div>
    </footer>
    </div>
  );
}
