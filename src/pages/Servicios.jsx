import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimateOnScroll } from '../components/AnimateOnScroll'
import { PageHeader, CTABanner } from '../components/PageSections'
import IMAGES from '../data/images'
import { CheckCircle, ArrowRight, ShieldCheck, Truck, Building2, ShoppingBag, ClipboardList, Users } from 'lucide-react'

const services = [
  {
    id: 'suministro',
    icon: <ShoppingBag size={24} />,
    tag: 'Core',
    title: 'Suministro integral',
    description: 'Provisi\u00f3n completa de qu\u00edmicos, descartables, bolsas, bazar y maquinaria para oficinas, plantas industriales y edificios corporativos.',
    image: IMAGES.cleaning2,
    features: [
      'Qu\u00edmicos concentrados y listos para uso',
      'Descartables y bolsas de residuo certificadas',
      'Art\u00edculos de bazar y utensilios',
      'Reposici\u00f3n autom\u00e1tica seg\u00fan consumo',
    ],
  },
  {
    id: 'contratos',
    icon: <ClipboardList size={24} />,
    tag: 'Sector p\u00fablico',
    title: 'Contratos estatales',
    description: 'Participamos en licitaciones a trav\u00e9s de COMPR.AR, ONC y portales provinciales. Experiencia en contrataciones directas y concursos de precios.',
    image: IMAGES.government,
    features: [
      'Inscripci\u00f3n vigente en COMPR.AR',
      'Legajo actualizado ante ONC',
      'Antecedentes con BNA, GCBA y m\u00e1s',
      'Cumplimiento de plazos y documentaci\u00f3n',
    ],
  },
  {
    id: 'logistica',
    icon: <Truck size={24} />,
    tag: 'Distribuci\u00f3n',
    title: 'Log\u00edstica y entrega',
    description: 'Flota propia y partners log\u00edsticos para entregas programadas en CABA, GBA y env\u00edos a todo el pa\u00eds con seguimiento.',
    image: IMAGES.delivery,
    features: [
      'Entrega en 24-48 hs en CABA y GBA',
      'Env\u00edos a todo el pa\u00eds por transporte',
      'Entregas programadas semanales/mensuales',
      'Sin cargo en pedidos mayoristas CABA',
    ],
  },
  {
    id: 'volumen',
    icon: <Building2 size={24} />,
    tag: 'Mayorista',
    title: 'Venta por volumen',
    description: 'Precios especiales para grandes consumidores, empresas de limpieza, hoteler\u00eda, gastronom\u00eda, sanatorios y cooperativas.',
    image: IMAGES.warehouse,
    features: [
      'Descuentos progresivos por volumen',
      'Cuenta corriente a 30/60 d\u00edas',
      'Atenci\u00f3n con ejecutivo de cuenta asignado',
      'Marcas l\u00edderes y l\u00ednea econ\u00f3mica',
    ],
  },
]

export default function Servicios() {
  const [activeTab, setActiveTab] = useState(0)
  const active = services[activeTab]

  return (
    <>
      <PageHeader
        title="Nuestros servicios"
        subtitle="Soluciones integrales en limpieza e higiene para empresas, organismos p\u00fablicos y grandes consumidores."
        breadcrumbs={[{ label: 'Servicios' }]}
        image={IMAGES.office1}
      />

      {/* TABBED SERVICES */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12">
            <div className="section-title-bar">
              <span className="text-secondary-600 font-semibold text-sm uppercase tracking-[0.15em]">Lo que ofrecemos</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-1">
                Servicios a medida
              </h2>
            </div>
          </AnimateOnScroll>

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-10">
            {services.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === i
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {s.icon}
                {s.title}
              </button>
            ))}
          </div>

          {/* Active tab content */}
          <div key={activeTab} className="grid lg:grid-cols-2 gap-10 items-center animate-fade-in-up" style={{ animationDuration: '0.5s' }}>
            {/* Image side */}
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-secondary-200 to-primary-200 rounded-3xl opacity-30 blur-xl" />
              <img
                src={active.image}
                alt={active.title}
                className="relative rounded-2xl shadow-2xl w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-1.5 shadow-md">
                <span className="text-xs font-bold text-secondary-600 uppercase tracking-wider">{active.tag}</span>
              </div>
            </div>

            {/* Text side */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4">{active.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6 text-lg">{active.description}</p>
              <ul className="space-y-3 mb-8">
                {active.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-secondary-600" size={14} />
                    </div>
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary-500/20 transition-all hover:scale-105"
              >
                Solicitar informaci\u00f3n <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRUST */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12">
            <div className="section-title-bar">
              <span className="text-secondary-600 font-semibold text-sm uppercase tracking-[0.15em]">Compromiso</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-1">\u00bfPor qu\u00e9 confiar en Arlimcoh?</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck size={28} />, title: 'Calidad garantizada', desc: 'Todos nuestros qu\u00edmicos cuentan con fichas de seguridad y hojas t\u00e9cnicas. Trabajamos con marcas l\u00edderes.' },
              { icon: <Users size={28} />, title: 'Equipo especializado', desc: 'Personal capacitado en productos de limpieza industrial con m\u00e1s de 15 a\u00f1os de experiencia en el rubro.' },
              { icon: <Truck size={28} />, title: 'Cumplimiento total', desc: 'Historial comprobable de entregas en tiempo y forma en contratos p\u00fablicos y privados.' },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 120}>
                <div className="bg-white rounded-r-2xl border-l-4 border-secondary-500 p-8 hover-scale">
                  <div className="w-14 h-14 bg-secondary-100 text-secondary-600 rounded-xl flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Hablemos de su proyecto"
        subtitle="Cu\u00e9ntenos qu\u00e9 necesita y armamos una propuesta personalizada sin compromiso."
        image={IMAGES.handshake}
      />
    </>
  )
}
