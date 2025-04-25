import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <h1>Menu</h1>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="console">Console</Link></li>
          <li><Link to="alert">Alert</Link></li>
          <li><Link to="formulario">Formulário</Link></li>
        </ul>
      </nav>

      <Routes>
        {/*Aqui estarão as referências para as páginas */}
        {/* Por exemplo: */}
        {/* <Route path = "/console" element{<Console/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
