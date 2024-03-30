import "./StylePadrao.css";
import HomePage from "./pages/Home/HomePage";
import Admin_Painel from "./pages/Admin_Painel/Admin_Painel";
import Rota_Privada from "./routes/Rota_Privada";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function CorpoSite() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/admin-painel"
          element={
            <Rota_Privada>
              <Admin_Painel />
            </Rota_Privada>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
