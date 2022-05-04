import Inicio from "./pages/Inicio";
import { Route, Routes } from 'react-router-dom';
import Repositorios from "./pages/Repositorios";
import Contato from "./pages/Contato";
import Header from "./components/Header";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='repositorios' element={<Repositorios />} />
      <Route path='contato' element={<Contato />} />
    </Routes>
  );
}

export default App;
