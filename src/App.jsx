import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Productos from './pages/Productos'
import Servicios from './pages/Servicios'
import Clientes from './pages/Clientes'
import Contacto from './pages/Contacto'
import Prensa from './pages/Prensa'
import Privacidad from './pages/Privacidad'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/prensa" element={<Prensa />} />
          <Route path="/privacidad" element={<Privacidad />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
