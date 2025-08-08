
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar' // Menú

import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'

function App() {
  return (
    <>
      <Navbar /> {/* Menú siempre visible */}

      {/* Definimos las rutas principales */}
      <Routes>
        <Route path="/" element={<Home />} />           {/* Página principal */}
        <Route path="/about" element={<About />} />     {/* Sobre nosotros */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard vacío */}
        <Route path="/settings" element={<Settings />} />   {/* Configuración vacía */}
      </Routes>
    </>
  )
}

export default App
