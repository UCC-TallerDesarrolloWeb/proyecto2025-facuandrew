import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Cursos from './pages/Cursos'
import Login from './Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal con Layout que contiene Home */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cursos" element={<Cursos />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App