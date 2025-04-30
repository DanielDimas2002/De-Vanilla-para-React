import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Alert from "./Art4/Alert";
import Console from './Art4/Console';

function App() {
  return (
    <BrowserRouter>
      <h1>Menu</h1>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/console">Console</Link></li>
          <li><Link to="/alert">Alert</Link></li>
          <li><Link to="/formulario">Formulário</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/console" element={<Console />} />
        <Route path="/alert" element={<Alert />} />
        {/* Outras rotas podem ser adicionadas aqui conforme necessário */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
