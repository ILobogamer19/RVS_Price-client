import Banner_Topo_Mercado from "./Banner_Topo_Mercado";
import Banner_Apresentacoes from "./Banner_Apresentacoes";
import Categoria_Com_Produto_Inicial from "./Categoria_Com_Produto_Inicial";

export default function Mercado_Home(Atributos) {
  return (
    <div>
      <Banner_Topo_Mercado Mercado={Atributos.Mercado} />
      <Banner_Apresentacoes Banco_De_Banners={"Mercado_" + Atributos.Mercado} />
      <div className="Secao_Categorias_Com_Produtos Opacidade_De_Itens_Para_Temas">
        <Categoria_Com_Produto_Inicial Filtro="Correia" />
      </div>
    </div>
  );
}
