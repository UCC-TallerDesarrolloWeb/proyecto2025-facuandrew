import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home'
import Cursos from './pages/Cursos'
import Login from './pages/Login.jsx'

function App() {
  return (
      <Routes>
        {/* Rutas que usan el layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cursos" element={<Cursos />} />
        </Route>

        {/* Ruta que NO usa layout */}
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
