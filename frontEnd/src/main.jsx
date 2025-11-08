import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cursos from './pages/Cursos.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/cursos" element={<Cursos/>}/>
    <Route path="/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)

