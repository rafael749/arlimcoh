import { Link } from 'react-router-dom'
import { AnimateOnScroll, CountUp } from '../components/AnimateOnScroll'
import { CTABanner } from '../components/PageSections'
import IMAGES from '../data/images'
import {
  Building2, UtensilsCrossed, FileCheck, Truck, Shield, Clock,
  Users, Award, CheckCircle2, ArrowRight, Sparkles, Phone, TrendingUp, Package
} from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* ═══ HERO — angled clip design ═══ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden clip-angle-bottom">
        {/* BG image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Equipo profesional de limpieza industrial"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-secondary-900/70" />
        </div>

        {/* Geometric decorations */}
        <div className="absolute top-20 right-10 w-64 h-64 border-2 border-white/10 rounded-full" />
        <div className="absolute top-32 right-20 w-40 h-40 border border-secondary-500/20 rounded-full" />
        <div className="absolute bottom-32 left-10 w-32 h-32 bg-secondary-500/10 rotate-45" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-3xl">
            {/* Top accent line */}
            <AnimateOnScroll animation="animate-fade-in" delay={100}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-0.5 bg-secondary-400" />
                <span className="text-secondary-400 text-sm font-semibold uppercase tracking-[0.2em]">Proveedor del Estado Argentino</span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-fade-in-up" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight">
                Soluciones en{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500">
                    limpieza
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-secondary-400 to-transparent rounded-full" />
                </span>{' '}
                para empresas
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-fade-in-up" delay={400}>
              <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl leading-relaxed">
                Distribuimos productos industriales, descartables y químicos con respaldo para contratos públicos y entrega a gran escala en CABA y Gran Buenos Aires.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-fade-in-up" delay={500}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-full text-base font-bold shadow-2xl shadow-secondary-500/30 hover:shadow-secondary-500/40 transition-all hover:scale-105"
                >
                  <Phone size={18} />
                  Solicitar presupuesto
                </Link>
                <Link
                  to="/productos"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-105"
                >
                  Ver catálogo
                  <ArrowRight size={18} />
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Mini stats row */}
            <AnimateOnScroll animation="animate-fade-in" delay={700}>
              <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/15">
                {[
                  { value: '15+', label: 'Años' },
                  { value: '500+', label: 'Productos' },
                  { value: '100%', label: 'Cumplimiento' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-2xl font-extrabold text-white">{s.value}</span>
                    <span className="text-xs text-white/50 uppercase tracking-wider">{s.label}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ TRUSTED BY — ticker style ═══ */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-400">Confían en nosotros</p>
            <div className="flex flex-wrap items-center gap-8">
              {['Banco Nación', 'GCBA', 'Ministerios Nacionales', 'Clínicas y Hospitales'].map((name) => (
                <span key={name} className="text-sm font-semibold text-gray-500 hover:text-primary-600 transition cursor-default">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICIOS — horizontal cards with left accent ═══ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-16">
            <div className="section-title-bar">
              <span className="text-secondary-600 font-semibold text-sm uppercase tracking-[0.15em]">Nuestras soluciones</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-1">
                Tres áreas de <span className="gradient-text">especialización</span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-2xl text-lg mt-4">
              Desde el suministro diario hasta contratos de largo plazo con organismos públicos.
            </p>
          </AnimateOnScroll>

          <div className="space-y-6">
            {[
              {
                icon: <Building2 size={28} />,
                title: 'Productos Industriales',
                desc: 'Limpiadores concentrados, desengrasantes, desinfectantes y productos químicos de uso profesional.',
                img: IMAGES.cleaning1,
                link: '/productos#industrial',
                color: 'border-primary-500',
                iconBg: 'bg-primary-100 text-primary-600',
              },
              {
                icon: <UtensilsCrossed size={28} />,
                title: 'Insumos para Gastronomía',
                desc: 'Descartables, papel tissue, bolsas, guantes y artículos de bazar para restaurantes y catering.',
                img: IMAGES.gastro1,
                link: '/productos#gastronomia',
                color: 'border-secondary-500',
                iconBg: 'bg-secondary-100 text-secondary-600',
              },
              {
                icon: <FileCheck size={28} />,
                title: 'Contratos Públicos',
                desc: 'Experiencia comprobada en licitaciones y órdenes de compra con organismos nacionales y de CABA.',
                img: IMAGES.government,
                link: '/clientes',
                color: 'border-accent-500',
                iconBg: 'bg-accent-100 text-accent-600',
              },
            ].map((service, i) => (
              <AnimateOnScroll key={i} delay={i * 120}>
                <div className={`group flex flex-col md:flex-row bg-white rounded-r-2xl overflow-hidden border-l-4 ${service.color} shadow-sm hover-scale`}>
                  {/* Image */}
                  <div className="md:w-72 h-52 md:h-auto overflow-hidden flex-shrink-0">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-lg">{service.desc}</p>
                    <Link
                      to={service.link}
                      className="inline-flex items-center gap-1.5 text-primary-600 font-semibold text-sm hover:text-primary-700 group-hover:gap-3 transition-all w-fit"
                    >
                      Ver más <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS — horizontal colored cards ═══ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: 15, suffix: '+', label: 'Años de experiencia', icon: <Award size={22} />, bg: 'bg-primary-50 border-primary-200', text: 'text-primary-700' },
              { value: 500, suffix: '+', label: 'Productos en catálogo', icon: <Package size={22} />, bg: 'bg-secondary-50 border-secondary-200', text: 'text-secondary-700' },
              { value: 50, suffix: '+', label: 'Clientes activos B2B', icon: <Users size={22} />, bg: 'bg-accent-50 border-accent-200', text: 'text-accent-700' },
              { value: 100, suffix: '%', label: 'Cumplimiento documental', icon: <TrendingUp size={22} />, bg: 'bg-blue-50 border-blue-200', text: 'text-blue-700' },
            ].map((stat, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className={`${stat.bg} border rounded-2xl p-6 text-center hover-scale`}>
                  <div className={`w-10 h-10 ${stat.text} mx-auto mb-3 flex items-center justify-center`}>
                    {stat.icon}
                  </div>
                  <p className={`text-3xl md:text-4xl font-extrabold ${stat.text} mb-1`}>
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ POR QUÉ ARLIMCOH — right image, different layout ═══ */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image — LEFT side (flipped vs Facility) */}
            <AnimateOnScroll animation="animate-slide-left" className="order-1">
              <div className="relative">
                <img
                  src={IMAGES.handshake}
                  alt="Acuerdo comercial"
                  className="w-full h-[460px] object-cover rounded-3xl shadow-2xl"
                  loading="lazy"
                />
                {/* Decorative corner badge */}
                <div className="absolute top-6 right-6 bg-secondary-500 text-white rounded-full px-5 py-2 shadow-lg">
                  <span className="text-sm font-bold">+15 años</span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Text — RIGHT side */}
            <AnimateOnScroll animation="animate-slide-right" delay={200} className="order-2">
              <div className="section-title-bar">
                <span className="text-secondary-600 font-semibold text-sm uppercase tracking-[0.15em]">¿Por qué elegirnos?</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-1">
                  Lo que nos diferencia
                </h2>
              </div>
              <p className="text-gray-500 my-6 leading-relaxed">
                A diferencia de fabricantes de consumo masivo, ofrecemos contratos a medida, entregas por volumen y cumplimiento documental para proveedores estatales.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: 'Contratos a medida', desc: 'Cantidades, frecuencia y condiciones adaptadas.' },
                  { label: 'Logística B2B dedicada', desc: 'Flota propia, entregas sin costo en CABA.' },
                  { label: 'Respuesta en 24 h', desc: 'Cotización rápida con disponibilidad real.' },
                  { label: 'Documentación completa', desc: 'Requisitos de licitaciones públicas.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 hover-scale">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 size={16} className="text-secondary-500 flex-shrink-0" />
                      <h4 className="font-semibold text-gray-800 text-sm">{item.label}</h4>
                    </div>
                    <p className="text-gray-500 text-xs pl-6">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ TEAM — circular avatars ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-secondary-600 font-semibold text-sm uppercase tracking-[0.15em]">Nuestro equipo</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
              Profesionales a su servicio
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full mx-auto" />
          </AnimateOnScroll>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { img: IMAGES.team1, name: 'Dirección Comercial', role: 'Presupuestos y cuentas clave' },
              { img: IMAGES.team2, name: 'Administración', role: 'Documentación y facturación' },
              { img: IMAGES.team3, name: 'Logística', role: 'Entregas y coordinación' },
              { img: IMAGES.team4, name: 'Atención al Cliente', role: 'Consultas y seguimiento' },
            ].map((person, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="group text-center">
                  {/* Circular avatar with gradient border */}
                  <div className="relative w-36 h-36 mx-auto mb-5">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary-400 to-primary-500 p-0.5">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                        <img
                          src={person.img}
                          alt={person.name}
                          className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800">{person.name}</h3>
                  <p className="text-sm text-gray-500">{person.role}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <CTABanner
        title="¿Necesita abastecer su empresa u organismo?"
        subtitle="Solicite un presupuesto sin compromiso. Respondemos en 24 horas hábiles con disponibilidad, precios y condiciones de entrega."
        image={IMAGES.delivery}
      />
    </>
  )
}
