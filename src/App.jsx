
import { Routes, Route } from 'react-router-dom'

// Importacion de  las páginas que creadas
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'

function App() {
  return (
    <>
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
