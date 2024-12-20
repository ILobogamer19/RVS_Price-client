//#region Importações de imagens
import Logo_Sem_Imagem from "../../img/Logo_Sem_Imagem.webp";
import Logo_Correia from "../../img/Logo_Correia.webp";
import Logo_Bom_Jesus from "../../img/Logo_Bom_Jesus.webp";
import Logo_TCA from "../../img/Logo_TCA.webp";
import Logo_Super_M from "../../img/Logo_Super_M.webp";
import Logo_Emporio_Do_Portugues from "../../img/Logo_Emporio_Do_Portugues.webp";
import Logo_Cofepaes from "../../img/Logo_Cofepaes.webp";

//#endregion

export default function Verificar_Qual_Mercado_Pertence_O_Produto(
  Nome_Do_Mercado_Do_Produto,
  Nome_Da_Classe,
  Tipo_De_Verificacao
) {
  if (Tipo_De_Verificacao == "Site") {
    if (Nome_Do_Mercado_Do_Produto.includes("Correia")) {
      return Logo_Correia;
    } else if (
      Nome_Do_Mercado_Do_Produto.includes("Bom") &&
      Nome_Do_Mercado_Do_Produto.includes("Jesus")
    ) {
      return Logo_Bom_Jesus;
    } else if (Nome_Do_Mercado_Do_Produto.includes("TCA")) {
      return Logo_TCA;
    } else if (
      Nome_Do_Mercado_Do_Produto.includes("Super") &&
      Nome_Do_Mercado_Do_Produto.includes("M")
    ) {
      return Logo_Super_M;
    } else if (
      Nome_Do_Mercado_Do_Produto.includes("Emporio") ||
      (Nome_Do_Mercado_Do_Produto.includes("Imporio") &&
        Nome_Do_Mercado_Do_Produto.includes("Portugues"))
    ) {
      return Logo_Emporio_Do_Portugues;
    } else if (Nome_Do_Mercado_Do_Produto == "") {
      return;
    } else {
      return Logo_Sem_Imagem;
    }
  } else {
    if (Nome_Do_Mercado_Do_Produto.includes("Correia")) {
      return (
        <img
          src={Logo_Correia}
          className={Nome_Da_Classe}
          alt={"Logo do " + Nome_Do_Mercado_Do_Produto}
          loading="lazy"
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
          loading="lazy"
        />
      );
    } else if (Nome_Do_Mercado_Do_Produto.includes("TCA")) {
      return (
        <img
          src={Logo_TCA}
          className={Nome_Da_Classe}
          alt={"Logo do " + Nome_Do_Mercado_Do_Produto}
          loading="lazy"
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
          loading="lazy"
        />
      );
    } else if (
      Nome_Do_Mercado_Do_Produto.includes("Emporio") ||
      (Nome_Do_Mercado_Do_Produto.includes("Imporio") &&
        Nome_Do_Mercado_Do_Produto.includes("Portugues"))
    ) {
      return (
        <img
          src={Logo_Emporio_Do_Portugues}
          className={Nome_Da_Classe}
          alt={"Logo do " + Logo_Emporio_Do_Portugues}
          loading="lazy"
        />
      );
    } else if (Nome_Do_Mercado_Do_Produto.includes("Cofepaes")) {
      return (
        <img
          src={Logo_Cofepaes}
          className={Nome_Da_Classe}
          alt={"Logo do " + Logo_Cofepaes}
          loading="lazy"
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
          loading="lazy"
        />
      );
    }
  }
}
