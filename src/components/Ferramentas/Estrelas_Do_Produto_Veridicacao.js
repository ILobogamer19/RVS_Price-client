export default function Estrelas_Do_Produto_Teste(Pontuacao_Do_Produto) {
  var Estrelas_Correspondentes = "Invalido";

  if (Pontuacao_Do_Produto == "5") {
    Estrelas_Correspondentes = "★★★★★";
  } else if (Pontuacao_Do_Produto == "4") {
    Estrelas_Correspondentes = "★★★★☆";
  } else if (Pontuacao_Do_Produto == "3") {
    Estrelas_Correspondentes = "★★★☆☆";
  } else if (Pontuacao_Do_Produto == "2") {
    Estrelas_Correspondentes = "★★☆☆☆";
  } else if (Pontuacao_Do_Produto == "1") {
    Estrelas_Correspondentes = "★☆☆☆☆";
  } else if (Pontuacao_Do_Produto == "0") {
    Estrelas_Correspondentes = "☆☆☆☆☆";
  }

  return <p>{Estrelas_Correspondentes}</p>;
}
