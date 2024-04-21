import "./style.css";

export default function Admin_Painel() {
  return (
    <div className="Painel_Admin_Central">
      <h1 className="Titulo_Painel_Admin">Painel de Administração</h1>
      <div className="Opcoes_Administrativas">
        <button
          onClick={() => {
            window.location.href = "/admin-painel/cadastrar-produto";
          }}
        >
          Cadastro de Produtos
        </button>
        <button
          onClick={() => {
            window.location.href = "/admin-painel/pesquisar-produto";
          }}
        >
          Pesquisa de Produtos
        </button>
        <button
          onClick={() => {
            window.location.href = "/admin-painel/promocao-produto";
          }}
        >
          Promoção de Produtos
        </button>
        <button
          onClick={() => {
            window.location.href = "/admin-painel/excluir-produto";
          }}
        >
          Remoção de Produtos
        </button>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Home
        </button>
      </div>
    </div>
  );
}
