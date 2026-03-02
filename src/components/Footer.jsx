import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-gray-300">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-secondary-500 via-primary-400 to-secondary-500" />
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M6 20L12 4L18 20H6Z" opacity="0.9" />
                  <circle cx="12" cy="11" r="2.5" fill="white" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">
                Arlimcoh<span className="text-secondary-400">.SA</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              Distribución de insumos de limpieza industrial, descartables y productos químicos para empresas y organismos públicos en Argentina.
            </p>
            <p className="text-xs text-gray-500">CUIT: 30-62627209-2</p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2.5">
              {[
                ['/', 'Inicio'],
                ['/empresa', 'Empresa'],
                ['/productos', 'Productos'],
                ['/servicios', 'Servicios'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-400 hover:text-white transition">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Institucional</h4>
            <ul className="space-y-2.5">
              {[
                ['/clientes', 'Clientes y contratos'],
                ['/prensa', 'Prensa'],
                ['/contacto', 'Contacto'],
                ['/privacidad', 'Política de privacidad'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-400 hover:text-white transition">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+541143621341" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition">
                  <Phone size={15} className="text-secondary-400 flex-shrink-0" />
                  (011) 4362-1341
                </a>
              </li>
              <li>
                <a href="tel:+541143625316" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition">
                  <Phone size={15} className="text-secondary-400 flex-shrink-0" />
                  (011) 4362-5316
                </a>
              </li>
              <li>
                <a href="mailto:info@arlimcoh.com.ar" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition">
                  <Mail size={15} className="text-secondary-400 flex-shrink-0" />
                  info@arlimcoh.com.ar
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={15} className="text-secondary-400 flex-shrink-0 mt-0.5" />
                Carlos Calvo 577, CABA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">© 2026 Arlimcoh S.A. Todos los derechos reservados.</p>
          <Link to="/privacidad" className="text-xs text-gray-500 hover:text-gray-300 transition">
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  )
}
