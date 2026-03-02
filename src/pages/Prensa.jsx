import { AnimateOnScroll } from '../components/AnimateOnScroll'
import { PageHeader, CTABanner } from '../components/PageSections'
import IMAGES from '../data/images'
import { FileText, Download, ExternalLink, Shield, Award, Landmark, Building2 } from 'lucide-react'

const sections = [
  {
    title: 'Banco de la Nación Argentina',
    icon: <Landmark size={24} />,
    color: 'from-blue-500 to-blue-700',
    docs: [
      { name: 'Orden de compra BNA — Insumos de limpieza', type: 'PDF', year: '2024' },
      { name: 'Constancia de proveedor — BNA', type: 'PDF', year: '2023' },
      { name: 'Acta de recepción conforme', type: 'PDF', year: '2023' },
    ],
  },
  {
    title: 'Gobierno de la Ciudad de Buenos Aires',
    icon: <Building2 size={24} />,
    color: 'from-yellow-500 to-amber-600',
    docs: [
      { name: 'Orden de compra GCBA — Productos químicos', type: 'PDF', year: '2024' },
      { name: 'Adjudicación contratación directa', type: 'PDF', year: '2023' },
      { name: 'Certificado de cumplimiento', type: 'PDF', year: '2023' },
    ],
  },
  {
    title: 'COMPR.AR — Contrataciones electrónicas',
    icon: <FileText size={24} />,
    color: 'from-green-500 to-emerald-600',
    docs: [
      { name: 'Inscripción vigente en COMPR.AR', type: 'PDF', year: '2024' },
      { name: 'Legajo de proveedor actualizado', type: 'PDF', year: '2024' },
      { name: 'Historial de contrataciones', type: 'PDF', year: '2023' },
    ],
  },
]

const certifications = [
  { name: 'Habilitación ANMAT', desc: 'Registro de productos domisanitarios ante la Administración Nacional de Medicamentos.', icon: <Shield size={24} /> },
  { name: 'Certificado INAL', desc: 'Certificación del Instituto Nacional de Alimentos para productos en contacto con alimentos.', icon: <Award size={24} /> },
  { name: 'Inscripción AFIP', desc: 'Constancia de inscripción vigente ante la Administración Federal de Ingresos Públicos.', icon: <FileText size={24} /> },
  { name: 'Seguro de responsabilidad civil', desc: 'Cobertura de responsabilidad civil comprensiva con póliza vigente.', icon: <Shield size={24} /> },
]

export default function Prensa() {
  return (
    <>
      <PageHeader
        title="Prensa y documentación"
        subtitle="Órdenes de compra, certificaciones y documentación institucional de respaldo."
        breadcrumbs={[{ label: 'Prensa' }]}
        image={IMAGES.office2}
      />

      {/* ═══ INTRO ═══ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <span className="text-secondary-500 font-semibold text-sm uppercase tracking-widest">Transparencia</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-4">Documentación de respaldo</h2>
            <p className="text-gray-500 leading-relaxed">
              En Arlimcoh creemos en la transparencia. Publicamos nuestros antecedentes comerciales, certificaciones y órdenes
              de compra para que conozca nuestra trayectoria antes de trabajar con nosotros.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ DOCUMENT SECTIONS ═══ */}
      {sections.map((section, si) => (
        <section key={si} className={`py-16 ${si % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 bg-gradient-to-br ${section.color} text-white rounded-xl flex items-center justify-center shadow-lg`}>
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
              </div>
            </AnimateOnScroll>

            <div className="space-y-3">
              {section.docs.map((doc, di) => (
                <AnimateOnScroll key={di} delay={di * 80}>
                  <div className="group bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm group-hover:text-primary-600 transition-colors">{doc.name}</h4>
                        <p className="text-xs text-gray-400">{doc.type} · {doc.year}</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm font-semibold bg-primary-50 hover:bg-primary-100 px-4 py-2 rounded-lg transition-all flex-shrink-0">
                      <Download size={16} /> Descargar
                    </button>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ═══ CERTIFICATIONS ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-secondary-500 font-semibold text-sm uppercase tracking-widest">Certificaciones</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-4">Habilitaciones vigentes</h2>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-500/20">
                    {cert.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{cert.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{cert.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXTERNAL LINKS ═══ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Enlaces de interés</h3>
            <p className="text-gray-500 text-sm">Portales oficiales donde puede verificar nuestros antecedentes.</p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: 'COMPR.AR', url: 'https://comprar.gob.ar' },
              { name: 'Argentina Compra', url: 'https://www.argentina.gob.ar/onc' },
              { name: 'Buenos Aires Compras', url: 'https://www.buenosairescompras.gob.ar' },
            ].map((link, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white rounded-xl p-5 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all text-sm font-semibold text-gray-700 hover:text-primary-600"
                >
                  <ExternalLink size={16} /> {link.name}
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Necesita documentación adicional?"
        subtitle="Solicite fichas técnicas, hojas de seguridad o cualquier documento que precise."
        image={IMAGES.factory}
      />
    </>
  )
}
