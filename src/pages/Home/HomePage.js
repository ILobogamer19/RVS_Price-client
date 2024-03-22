import "./style.css";
import "./Estilo_Banner_De_Slides.css";
import "./Estilo_Categorias_E_Produtos_Home.css";
import Banner_Topo from "../../components/Banner_Topo";
import Banner_Apresentacoes from "../../components/Banner_Apresentacoes";
import Categoria_Com_Produto_Inicial from "../../components/Categoria_Com_Produto_Inicial";

export default function HomePage() {
  return (
    <div className="Corpo_Site">
      <Banner_Topo />
      <Banner_Apresentacoes />
      <div className="Secao_Categorias_Com_Produtos">
        <Categoria_Com_Produto_Inicial />
      </div>
    </div>
  );
}
