import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Alert from "./Art4/Alert";
import Console from './Art4/Console';
import Prompt from './Art5/Prompt';
import UsandouseState from './Art7/UsandouseState';
import UsandodangerouslySetInnerHTML from './Art7/UsandodangerouslySetInnerHTML';
import CapturandoDados from './Art7/CapturandoDados';
import Formulario from './Art7/Formulario';

function App() {
  return (
    <BrowserRouter>
      <h1>Menu</h1>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/console">Console</Link></li>
          <li><Link to="/alert">Alert</Link></li>
          <li><Link to="/prompt">Prompt</Link></li>
          <li><Link to = "/useState">UsandouseState</Link></li>
          <li><Link to = "/UsandodangerouslySetInnerHTML">UsandodangerouslySetInnerHTML</Link></li>
          <li><Link to="/CapturandoDados">CapturandoDados</Link></li>
          <li><Link to="/Formulario">Formulario</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/console" element={<Console />} />
        <Route path="/alert" element={<Alert />} />
        <Route path='/prompt' element = {<Prompt/>} />
        <Route path='/useState' element = {<UsandouseState/>}/>
        <Route path='/UsandodangerouslySetInnerHTML' element = {<UsandodangerouslySetInnerHTML/>}/>
        <Route path='/CapturandoDados' element = {<CapturandoDados/>}/>
        <Route path='/Formulario' element = {<Formulario/>}/>
        {/* Outras rotas podem ser adicionadas aqui conforme necessário */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
