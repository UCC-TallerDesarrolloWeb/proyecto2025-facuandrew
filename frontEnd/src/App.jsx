import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Cursos from './pages/Cursos'
import Login from './Login'

function App() {

  return (
      <Routes>
        {/* path ="/" ruta raiz principal con Layout que contiene Home */}
          <Route path="/" element={<Layout />}>
        {/*index indica el componente que se mostrara por default cuando path ="/"*/}
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cursos" element={<Cursos />} />
        </Route>
      </Routes>
  )
}

export default App