import { AnimateOnScroll } from '../components/AnimateOnScroll'
import { PageHeader, CTABanner } from '../components/PageSections'
import IMAGES from '../data/images'
import { CheckCircle2, Award, Building, FileCheck, Shield, Landmark } from 'lucide-react'

const timeline = [
  { year: '~2005', title: 'Fundación de Arlimcoh S.A.', desc: 'Se constituye la sociedad con foco en distribución de artículos de limpieza y bazar en CABA.', verify: true },
  { year: '~2010', title: 'Inscripción como proveedor del Estado', desc: 'Alta en el Registro de Proveedores de organismos nacionales para participar en licitaciones públicas.' },
  { year: '2015–2018', title: 'Contratos con Banco Nación', desc: 'Preadjudicación y adjudicación de órdenes de compra para suministro de insumos de limpieza.' },
  { year: '2018–2022', title: 'Expansión de cartera', desc: 'Incorporación de contratos con organismos de CABA y ampliación del catálogo a descartables y químicos.' },
  { year: '2023–Actualidad', title: 'Consolidación y presencia digital', desc: 'Fortalecimiento de logística B2B, canal digital y mantenimiento como proveedor estatal activo.' },
]

export default function Empresa() {
  return (
    <>
      <PageHeader
        title="Quiénes somos"
        subtitle="Más de 15 años distribuyendo soluciones de limpieza e higiene para el sector privado y público argentino."
        breadcrumbs={[{ label: 'Empresa' }]}
        image={IMAGES.about}
      />

      {/* ═══ SOBRE NOSOTROS ═══ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="animate-slide-left">
              <div className="section-title-bar">
                <span className="text-secondary-600 font-semibold text-sm uppercase tracking-[0.15em]">Nuestra empresa</span>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-1">
                  Compromiso con la <span className="gradient-text">calidad y el cumplimiento</span>
                </h2>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                <strong>Arlimcoh S.A.</strong> es una empresa argentina dedicada a la distribución de insumos de limpieza, artículos de bazar y productos químicos de uso industrial. Desde nuestra sede en CABA, abastecemos a comercios, empresas de servicios, instituciones educativas, organismos públicos y establecimientos gastronómicos.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nos diferenciamos por nuestra capacidad de cumplir con los requisitos documentales y operativos que exige la contratación pública, manteniendo la agilidad y el trato personalizado del sector privado.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                <p className="text-sm text-amber-800"><strong>CUIT:</strong> 30-62627209-2 <span className="text-amber-600">(verificar con constancia AFIP)</span></p>
              </div>

              <div className="space-y-3">
                {[
                  'Inscripción vigente en registros de proveedores del Estado',
                  'Participación comprobada en licitaciones públicas nacionales',
                  'Cumplimiento de normativas ANMAT para productos químicos',
                  'Logística propia para entregas en CABA y Gran Buenos Aires',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-secondary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{text}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="animate-slide-right" delay={200}>
              <div className="relative">
                <img
                  src={IMAGES.team2}
                  alt="Profesional de Arlimcoh S.A."
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-white card-accent-left shadow-2xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Building className="text-primary-600" size={28} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Sede Central</p>
                      <p className="text-sm text-gray-500">Carlos Calvo 577, CABA</p>
                      <p className="text-xs text-amber-500">Sujeta a verificación</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-16">
            <div className="section-title-bar">
              <span className="text-secondary-600 font-semibold text-sm uppercase tracking-[0.15em]">Nuestra trayectoria</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-1">Hitos principales</h2>
            </div>
          </AnimateOnScroll>

          <div className="relative">
            {/* Vertical line — single side */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary-400 via-primary-500 to-primary-700" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <AnimateOnScroll
                  key={i}
                  animation="animate-fade-in-up"
                  delay={i * 120}
                >
                  <div className="relative flex items-start pl-16">
                    {/* Dot + horizontal bar */}
                    <div className="absolute left-4 w-4 h-4 bg-secondary-500 rounded-full border-4 border-white shadow-md z-10 mt-5" />
                    <div className="absolute left-10 w-6 h-0.5 bg-secondary-300 mt-7" />

                    <div className="flex-1 bg-white card-accent-left shadow-sm hover-scale p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-secondary-100 text-secondary-700 font-bold text-xs px-3 py-1 rounded-full">{item.year}</span>
                        {item.verify && <span className="text-amber-500 text-xs">(VERIFICAR)</span>}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CERTIFICACIONES ═══ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-14">
            <div className="section-title-bar">
              <span className="text-secondary-600 font-semibold text-sm uppercase tracking-[0.15em]">Respaldo institucional</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-1">Certificaciones e inscripciones</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FileCheck size={32} />, title: 'Registro de Proveedores del Estado', desc: 'Inscripción activa para participar en licitaciones y contrataciones directas con organismos nacionales.', color: 'bg-primary-100 text-primary-600' },
              { icon: <Landmark size={32} />, title: 'AFIP — Contribuyente activo', desc: 'CUIT 30-62627209-2 en situación regular. Facturación electrónica habilitada.', color: 'bg-secondary-100 text-secondary-600' },
              { icon: <Shield size={32} />, title: 'Productos habilitados ANMAT', desc: 'Los productos químicos distribuidos cuentan con habilitación y fichas de seguridad.', color: 'bg-accent-100 text-accent-600' },
            ].map((cert, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover-scale text-center">
                  <div className={`w-16 h-16 ${cert.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                    {cert.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{cert.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{cert.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Quiere trabajar con un proveedor confiable?"
        subtitle="Conozca nuestro catálogo o solicite un presupuesto personalizado."
        image={IMAGES.office1}
      />
    </>
  )
}
