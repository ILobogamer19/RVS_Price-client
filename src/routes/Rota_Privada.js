import { Navigate, Outlet } from "react-router-dom";

export default function Rota_Privada() {
  function Ir_Para_Pagina_Inicial() {
    alert("Você não está logado");
    return <Navigate to="/" />;
  }

  var Token = localStorage.getItem("token");
  var Acesso_Admin;
  if (Token === "3MqUWY6LRqV8660067c81cf74") {
    Acesso_Admin = true;
  }

  return Acesso_Admin ? <Outlet /> : Ir_Para_Pagina_Inicial();
}
