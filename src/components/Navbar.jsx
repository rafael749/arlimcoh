import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/empresa', label: 'Empresa' },
  { to: '/productos', label: 'Productos' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/clientes', label: 'Clientes' },
  { to: '/prensa', label: 'Prensa' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary-500/30 transition-shadow">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M6 20L12 4L18 20H6Z" opacity="0.9" />
                <circle cx="12" cy="11" r="2.5" fill="white" />
              </svg>
            </div>
            <span className="text-xl font-bold text-primary-700">
              Arlimcoh<span className="text-secondary-500">.SA</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.to
                    ? 'text-primary-600'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {link.label}
                {/* Animated underline */}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full transition-all duration-300 ${
                  location.pathname === link.to ? 'w-3/4' : 'w-0'
                }`} />
              </Link>
            ))}
            <Link
              to="/contacto"
              className="ml-3 flex items-center gap-2 bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-secondary-500/20 hover:shadow-secondary-500/30 transition-all hover:scale-105"
            >
              <Phone size={15} />
              Presupuesto
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition ${
                location.pathname === link.to
                  ? 'bg-secondary-50 text-secondary-700 border-l-4 border-secondary-500'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link.label}
              <ChevronRight size={16} className="opacity-40" />
            </Link>
          ))}
          <Link
            to="/contacto"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-5 py-3 rounded-full text-sm font-semibold mt-3"
          >
            <Phone size={15} />
            Solicitar presupuesto
          </Link>
        </nav>
      </div>
    </header>
  )
}
