// Importando react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importando Pages
import Dashboard from "./../pages/Dashboard";
// Importando Layouts
import Main from "./../layouts/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route (Públicas) */}
        {/* Route para el usuario  */}
        <Route element={<Main />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
