import { Navigate } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";

export default function Rota_Privada({ children }) {
  function Ir_Para_Pagina_Inicial() {
    alert("Você não está logado");
    return <Navigate to="/" />;
  }

  var Token = localStorage.getItem("token");
  var Acesso_Admin;
  if (Token == "3MqUWY6LRqV8660067c81cf74") {
    Acesso_Admin = true;
  }

  return Acesso_Admin ? children : Ir_Para_Pagina_Inicial();
}
