import "./style.css";
import "./Estilo_Responsivo_Geral.css";

export default function Admin_Painel() {
  return (
    <div className="Painel_Admin_Central">
      <h1 className="Titulo_Painel_Admin">Painel de Administração</h1>
      <div className="Opcoes_Administrativas">
        <button
          onClick={() => {
            // window.location.href = "/admin-painel/cadastrar-produto";
            window.location.href = "/cadastrar-produto";
          }}
          aria-label="Botão de Cadastro de Produtos"
        >
          Cadastro de Produtos
        </button>
        <button
          onClick={() => {
            // window.location.href = "/admin-painel/pesquisar-produto";
            window.location.href = "/pesquisar-produto";
          }}
          aria-label="Botão de Pesquisa de Produtos"
        >
          Pesquisa de Produtos
        </button>
        <button
          onClick={() => {
            // window.location.href = "/admin-painel/promocao-produto";
            window.location.href = "/promocao-produto";
          }}
          aria-label="Botão de Promoção de Produtos"
        >
          Promoção de Produtos
        </button>
        <button
          onClick={() => {
            // window.location.href = "/admin-painel/excluir-produto";
            window.location.href = "/excluir-produto";
          }}
          aria-label="Botão de Remoção de Produtos"
        >
          Remoção de Produtos
        </button>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          aria-label="Botão de Home de Produtos"
        >
          Home
        </button>
      </div>
    </div>
  );
}
