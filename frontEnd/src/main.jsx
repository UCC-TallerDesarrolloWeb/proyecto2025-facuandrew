import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Route} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Route path="/cursos" element={<Store/>} />
  </StrictMode>,
)
