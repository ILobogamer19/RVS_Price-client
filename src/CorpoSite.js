import "./StylePadrao.css";
import HomePage from "./pages/Home/HomePage";
import Admin_Painel from "./pages/Admin_Painel/Admin_Painel";
import Cadastro_Produto from "./pages/Cadastro_De_Produto/Cadastro_Produto";
import Rota_Privada from "./routes/Rota_Privada";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function CorpoSite() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/admin-painel" element={<Rota_Privada />}>
          <Route index element={<Admin_Painel />}></Route>
        </Route>
        <Route
          path="/admin-painel/cadastrar-produto"
          element={<Cadastro_Produto />}
        />
      </Routes>
    </BrowserRouter>
  );
}
