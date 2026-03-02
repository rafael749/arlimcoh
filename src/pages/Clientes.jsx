import { AnimateOnScroll, CountUp } from '../components/AnimateOnScroll'
import { PageHeader, CTABanner } from '../components/PageSections'
import IMAGES from '../data/images'
import { Building2, Landmark, MapPin, Star, CheckCircle, ArrowRight, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'

const clients = [
  {
    name: 'Banco de la Nación Argentina',
    short: 'BNA',
    type: 'Sector público',
    icon: <Landmark size={28} />,
    description: 'Provisión de insumos de limpieza para sucursales y edificios centrales a través de procesos licitatorios.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Gobierno de la Ciudad de Buenos Aires',
    short: 'GCBA',
    type: 'Sector público',
    icon: <Landmark size={28} />,
    description: 'Contrato de suministro para dependencias del gobierno porteño mediante COMPR.AR.',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    name: 'Empresas de limpieza',
    short: 'Cleaning',
    type: 'Sector privado',
    icon: <Building2 size={28} />,
    description: 'Abastecimiento mayorista a empresas de servicios de limpieza en CABA y GBA.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Hoteles y gastronomía',
    short: 'HoReCa',
    type: 'Sector privado',
    icon: <Building2 size={28} />,
    description: 'Productos especializados para hotelería, restaurantes y servicios de catering.',
    color: 'from-purple-500 to-violet-600',
  },
  {
    name: 'Sanatorios y clínicas',
    short: 'Salud',
    type: 'Sector privado',
    icon: <Building2 size={28} />,
    description: 'Línea hospitalaria con desinfectantes, antisépticos y descartables de grado médico.',
    color: 'from-red-500 to-rose-600',
  },
  {
    name: 'Cooperativas y consorcios',
    short: 'Coops',
    type: 'Sector privado',
    icon: <Building2 size={28} />,
    description: 'Atención a consorcios de edificios y cooperativas de vivienda con entregas programadas.',
    color: 'from-teal-500 to-cyan-600',
  },
]

const testimonials = [
  {
    quote: 'Arlimcoh nos resolvió el abastecimiento de insumos con entregas puntuales y precios competitivos. Excelente atención comercial.',
    author: 'Gerente de Compras',
    company: 'Empresa de limpieza — CABA',
    avatar: IMAGES.team1,
  },
  {
    quote: 'Trabajamos juntos hace más de 5 años. Siempre cumplen con los plazos y la documentación exigida por el Estado.',
    author: 'Responsable de Contrataciones',
    company: 'Organismo público — Buenos Aires',
    avatar: IMAGES.team2,
  },
  {
    quote: 'La variedad de productos y la flexibilidad en las entregas nos permite mantener el stock sin preocuparnos.',
    author: 'Administrador',
    company: 'Consorcio de edificios — Microcentro',
    avatar: IMAGES.team3,
  },
]

export default function Clientes() {
  return (
    <>
      <PageHeader
        title="Nuestros clientes"
        subtitle="Empresas, organismos públicos y grandes consumidores que confían en Arlimcoh."
        breadcrumbs={[{ label: 'Clientes' }]}
        image={IMAGES.handshake}
      />

      {/* ═══ STATS ═══ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 200, suffix: '+', label: 'Clientes activos' },
              { value: 15, suffix: '+', label: 'Años en el mercado' },
              { value: 98, suffix: '%', label: 'Tasa de retención' },
              { value: 500, suffix: '+', label: 'Productos disponibles' },
            ].map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="py-6 px-4 bg-gray-50 rounded-2xl border border-gray-100 hover-scale">
                  <p className="text-4xl font-extrabold gradient-text mb-1">
                    <CountUp end={s.value} />{s.suffix}
                  </p>
                  <p className="text-sm text-gray-500 font-medium">{s.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLIENT GRID ═══ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-14">
            <div className="section-title-bar">
              <span className="text-secondary-600 font-semibold text-sm uppercase tracking-[0.15em]">Sectores que atendemos</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-1">Clientes por segmento</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((c, i) => (
              <AnimateOnScroll key={i} delay={i * 70}>
                <div className="group bg-white rounded-r-2xl border-l-4 border-secondary-400 p-8 shadow-sm hover-scale relative overflow-hidden">
                  {/* Decorative gradient */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${c.color} opacity-10 rounded-bl-[60px] group-hover:opacity-20 transition-opacity`} />

                  <div className={`w-14 h-14 bg-gradient-to-br ${c.color} text-white rounded-xl flex items-center justify-center mb-5 shadow-lg`}>
                    {c.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{c.type}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 mb-3">{c.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-14">
            <div className="section-title-bar">
              <span className="text-secondary-600 font-semibold text-sm uppercase tracking-[0.15em]">Testimonios</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-1">Lo que dicen de nosotros</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-gray-50 rounded-2xl p-8 relative border border-gray-100 h-full flex flex-col">
                  <Quote className="text-primary-200 mb-4" size={32} />
                  <p className="text-gray-600 italic leading-relaxed flex-1">"{t.quote}"</p>
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-10 h-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-bold text-gray-900">{t.author}</p>
                      <p className="text-xs text-gray-400">{t.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mt-3">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON ═══ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-14">
            <div className="section-title-bar">
              <span className="text-secondary-600 font-semibold text-sm uppercase tracking-[0.15em]">Comparativa</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-1">¿Por qué elegirnos?</h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Característica</th>
                      <th className="px-6 py-4 text-center font-semibold">Arlimcoh</th>
                      <th className="px-6 py-4 text-center font-semibold text-white/70">Otros proveedores</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Entrega en 24-48 hs', true, false],
                      ['Atención personalizada', true, false],
                      ['Más de 500 productos', true, false],
                      ['Factura A y B', true, true],
                      ['Cuenta corriente 30/60 días', true, false],
                      ['Entregas programadas', true, false],
                      ['Experiencia en licitaciones', true, false],
                      ['Fichas técnicas disponibles', true, true],
                    ].map(([feature, us, them], i) => (
                      <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="px-6 py-3.5 text-gray-700 font-medium">{feature}</td>
                        <td className="px-6 py-3.5 text-center">
                          {us ? <CheckCircle className="text-green-500 mx-auto" size={20} /> : <span className="text-gray-300">—</span>}
                        </td>
                        <td className="px-6 py-3.5 text-center">
                          {them ? <CheckCircle className="text-gray-300 mx-auto" size={20} /> : <span className="text-gray-300">—</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ MAP SECTION ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AnimateOnScroll className="lg:w-1/2">
              <div className="section-title-bar">
                <span className="text-secondary-600 font-semibold text-sm uppercase tracking-[0.15em]">Cobertura</span>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-1 mb-4">Alcance nacional</h2>
              </div>
              <p className="text-gray-500 leading-relaxed mb-6">
                Desde nuestro depósito en Buenos Aires despachamos a todo el país. Entrega directa en CABA y GBA, y envíos por transporte a provincias.
              </p>
              <div className="space-y-3">
                {[
                  'CABA: entrega en 24 hs',
                  'GBA: entrega en 24-48 hs',
                  'Interior: envíos por transporte, 3-5 días hábiles',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <MapPin className="text-primary-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary-500/20 transition-all hover:scale-105 mt-8"
              >
                Consultar envío a su zona <ArrowRight size={18} />
              </Link>
            </AnimateOnScroll>
            <AnimateOnScroll className="lg:w-1/2">
              <img
                src={IMAGES.buenosAires}
                alt="Buenos Aires"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                loading="lazy"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Quiere ser parte de nuestros clientes?"
        subtitle="Contáctenos y le enviamos una propuesta a medida en 24 horas."
        image={IMAGES.office2}
      />
    </>
  )
}
