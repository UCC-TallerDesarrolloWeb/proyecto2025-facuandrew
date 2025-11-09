import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Cursos from './pages/Cursos'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
        {/* Ruta principal con Layout que contiene Home */}
          <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
  )
}

export default App