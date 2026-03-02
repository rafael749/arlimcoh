import { Link } from 'react-router-dom'

export function PageHeader({ title, subtitle, breadcrumbs = [], image }) {
  return (
    <section className="relative pt-24 pb-24 md:pt-32 md:pb-28 overflow-hidden clip-angle-bottom">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={image || 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80'}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/85 to-secondary-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav className="mb-6" aria-label="Ruta de navegación">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><Link to="/" className="hover:text-white transition">Inicio</Link></li>
              {breadcrumbs.map((bc, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span>/</span>
                  {bc.to ? (
                    <Link to={bc.to} className="hover:text-white transition">{bc.label}</Link>
                  ) : (
                    <span className="text-white/90 font-medium">{bc.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="flex items-center gap-4 mb-3">
          <div className="w-1 h-12 bg-gradient-to-b from-secondary-400 to-secondary-600 rounded-full" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">{title}</h1>
        </div>
        {subtitle && <p className="text-lg text-white/80 max-w-2xl ml-5">{subtitle}</p>}
      </div>
    </section>
  )
}

export function CTABanner({ title, subtitle, buttonText = 'Solicitar presupuesto →', buttonTo = '/contacto', image }) {
  return (
    <section className="relative py-20 overflow-hidden clip-angle-top">
      <div className="absolute inset-0">
        <img
          src={image || 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=80'}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-bl from-primary-900/95 to-secondary-800/90" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-white/80 max-w-xl">{subtitle}</p>}
        </div>
        <Link
          to={buttonTo}
          className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-secondary-50 px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition-all hover:scale-105 flex-shrink-0"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
