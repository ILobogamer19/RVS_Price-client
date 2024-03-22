const Categoria_Produto_Json = await fetch(
  "./data/Categorias_Com_Produtos_Home.json"
);
const Categoria_Produto_Objeto = await Categoria_Produto_Json.json();

const Categoria_Produto = Object.keys(Categoria_Produto_Objeto);

export default function Categoria_Com_Produto_Inicial() {
  return (
    <>
      {Categoria_Produto.map((Categoria) => (
        <div className={"Categorias Categoria_" + Categoria} key={Categoria}>
          <h1 key={Categoria + 1}>{Categoria}</h1>
          <div className="Produtos">
            {Categoria_Produto_Objeto[Categoria].map((Categoria) => (
              <div className={"Produto_" + Categoria.Produto}>
                <img src={Categoria.Imagem} />
                <h3>{Categoria.Produto}</h3>
                <p>R$ {Categoria.Preco.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
