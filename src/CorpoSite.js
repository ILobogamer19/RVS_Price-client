//#region Estilos de paginas
import "./StylePadrao.css";
//#endregion

//#region Paginas
import HomePage from "./pages/Home/HomePage";
import Admin_Painel from "./pages/Admin_Painel/Admin_Painel";
import Cadastro_Produto from "./pages/Cadastro_De_Produto/Cadastro_Produto";
import Error_404_Pagina_Nao_Encontrada from "./pages/Pagina_404/404";
import Mercado_Correia_Home from "./pages/Mercado_Correia/Pagina_Mercado";
import Mercado_TCA_Home from "./pages/Mercado_TCA/Pagina_Mercado";
import Mercado_Bom_Jesus_Home from "./pages/Mercado_Bom_Jesus/Pagina_Mercado";
import Mercado_Super_M_Home from "./pages/Mercado_Super_M/Pagina_Mercado";
import Resultados_Obtidos from "./pages/Resultados_Obtidos/Resultados_Obtidos";
import Mercado_Emporio_Do_Portugues_Home from "./pages/Mercado_Emporio_Do_Portugues/Pagina_Mercado";
import Rota_Privada from "./routes/Rota_Privada";
//#endregion

//#region Importações de ferramentas/bibliotecas
import { BrowserRouter, Routes, Route } from "react-router-dom";
//#endregion

export default function CorpoSite() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Error_404_Pagina_Nao_Encontrada />} />
        <Route path="/correia" element={<Mercado_Correia_Home />} />
        <Route path="/tca" element={<Mercado_TCA_Home />} />
        <Route path="/bom-jesus" element={<Mercado_Bom_Jesus_Home />} />
        <Route path="/super-m" element={<Mercado_Super_M_Home />} />
        <Route path="/Resultados_Obtidos" element={<Resultados_Obtidos />} />
        <Route
          path="/emporio-do-portugues"
          element={<Mercado_Emporio_Do_Portugues_Home />}
        />
        <Route path="admin-painel" element={<Rota_Privada />}>
          <Route index element={<Admin_Painel />} />
        </Route>
        <Route path="/cadastrar-produto" element={<Rota_Privada />}>
          <Route index element={<Cadastro_Produto />} />
          <Route path="/cadastrar-produto" element={<Cadastro_Produto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
