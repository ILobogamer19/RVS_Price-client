//#region Importações de imagens
import Logo_Sem_Imagem from "../img/Logo_Sem_Imagem.webp";
import Logo_Correia from "../img/Logo_Correia.webp";
import Logo_Bom_Jesus from "../img/Logo_Bom_Jesus.webp";
import Logo_TCA from "../img/Logo_TCA.webp";
import Logo_Super_M from "../img/Logo_Super_M.webp";
//#endregion

export default function Verificar_Qual_Mercado_Pertence_O_Produto(
  Nome_Do_Mercado_Do_Produto,
  Nome_Da_Classe
) {
  if (Nome_Do_Mercado_Do_Produto.includes("Correia")) {
    return (
      <img
        src={Logo_Correia}
        className={Nome_Da_Classe}
        alt={"Logo do " + Nome_Do_Mercado_Do_Produto}
      />
    );
  } else if (
    Nome_Do_Mercado_Do_Produto.includes("Bom") &&
    Nome_Do_Mercado_Do_Produto.includes("Jesus")
  ) {
    return (
      <img
        src={Logo_Bom_Jesus}
        className={Nome_Da_Classe}
        alt={"Logo do " + Nome_Do_Mercado_Do_Produto}
      />
    );
  } else if (Nome_Do_Mercado_Do_Produto.includes("TCA")) {
    return (
      <img
        src={Logo_TCA}
        className={Nome_Da_Classe}
        alt={"Logo do " + Nome_Do_Mercado_Do_Produto}
      />
    );
  } else if (
    Nome_Do_Mercado_Do_Produto.includes("Super") &&
    Nome_Do_Mercado_Do_Produto.includes("M")
  ) {
    return (
      <img
        src={Logo_Super_M}
        className={Nome_Da_Classe}
        alt={"Logo do " + Nome_Do_Mercado_Do_Produto}
      />
    );
  } else if (Nome_Do_Mercado_Do_Produto == "") {
    return;
  } else {
    return (
      <img
        src={Logo_Sem_Imagem}
        className={Nome_Da_Classe}
        alt={"Logo do " + Nome_Do_Mercado_Do_Produto}
      />
    );
  }
}
