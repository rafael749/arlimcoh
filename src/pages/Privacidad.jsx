import { AnimateOnScroll } from '../components/AnimateOnScroll'
import { PageHeader } from '../components/PageSections'
import IMAGES from '../data/images'
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from 'lucide-react'

const sections = [
  {
    icon: <Eye size={22} />,
    title: '1. Datos que recopilamos',
    content: `Recopilamos los datos personales que usted nos proporciona voluntariamente a través de nuestro formulario de contacto: nombre y apellido, razón social, CUIT, dirección de correo electrónico, número de teléfono y el contenido de su mensaje. No recopilamos datos sensibles ni información financiera a través de este sitio web.`,
  },
  {
    icon: <FileText size={22} />,
    title: '2. Finalidad del tratamiento',
    content: `Sus datos personales son tratados con las siguientes finalidades: (a) responder a sus consultas comerciales, (b) enviar presupuestos y propuestas comerciales solicitadas, (c) gestionar la relación comercial y contractual, (d) cumplir con obligaciones legales y fiscales. No utilizamos sus datos para fines de marketing no solicitado ni los compartimos con terceros con fines comerciales.`,
  },
  {
    icon: <Lock size={22} />,
    title: '3. Base legal del tratamiento',
    content: `El tratamiento de sus datos se fundamenta en: (a) su consentimiento libre, expreso e informado al completar el formulario de contacto, conforme al artículo 5 de la Ley 25.326, (b) la ejecución de medidas precontractuales o contractuales, (c) el cumplimiento de obligaciones legales aplicables.`,
  },
  {
    icon: <Shield size={22} />,
    title: '4. Seguridad de los datos',
    content: `Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción. El acceso a los datos está restringido al personal autorizado que necesita conocerlos para cumplir con las finalidades descritas.`,
  },
  {
    icon: <UserCheck size={22} />,
    title: '5. Derechos del titular (ARCO)',
    content: `Conforme a la Ley 25.326 y su Decreto Reglamentario 1558/2001, usted tiene derecho a: (a) Acceder a sus datos personales en nuestras bases, (b) Rectificar datos inexactos o desactualizados, (c) Suprimir sus datos cuando ya no sean necesarios, (d) Oponerse al tratamiento de sus datos. Para ejercer estos derechos, envíe un correo electrónico a arlimcoh_sa@yahoo.com.ar con el asunto "Ejercicio de derechos ARCO", indicando su nombre completo y DNI.`,
  },
  {
    icon: <FileText size={22} />,
    title: '6. Conservación de datos',
    content: `Conservamos sus datos personales durante el tiempo necesario para cumplir con las finalidades para las cuales fueron recopilados, y durante los plazos de prescripción legal aplicables. Una vez cumplido el plazo, los datos serán eliminados o anonimizados.`,
  },
  {
    icon: <Shield size={22} />,
    title: '7. Cookies y tecnologías similares',
    content: `Este sitio web puede utilizar cookies técnicas necesarias para su funcionamiento. No utilizamos cookies de seguimiento ni de publicidad. Las cookies técnicas se eliminan automáticamente al cerrar el navegador.`,
  },
  {
    icon: <FileText size={22} />,
    title: '8. Modificaciones a esta política',
    content: `Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta misma página con la fecha de la última actualización. Le recomendamos revisar periódicamente esta política.`,
  },
  {
    icon: <Mail size={22} />,
    title: '9. Contacto y autoridad de control',
    content: `Para consultas sobre esta política o el tratamiento de sus datos personales, puede contactarnos a: arlimcoh_sa@yahoo.com.ar. Asimismo, le informamos que la Agencia de Acceso a la Información Pública (AAIP), en su carácter de Órgano de Control de la Ley 25.326, tiene la atribución de atender denuncias y reclamos relacionados con el incumplimiento de las normas sobre protección de datos personales (www.argentina.gob.ar/aaip).`,
  },
]

export default function Privacidad() {
  return (
    <>
      <PageHeader
        title="Política de privacidad"
        subtitle="Cómo protegemos y tratamos sus datos personales conforme a la Ley 25.326."
        breadcrumbs={[{ label: 'Privacidad' }]}
        image={IMAGES.office1}
      />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro card */}
          <AnimateOnScroll>
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-100 rounded-2xl p-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Compromiso con su privacidad</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    En <strong>Arlimcoh S.A.</strong>, con domicilio en Buenos Aires, Argentina, nos comprometemos a
                    proteger la privacidad de los visitantes de nuestro sitio web. Esta política describe cómo recopilamos,
                    usamos y protegemos sus datos personales de acuerdo con la <strong>Ley N° 25.326 de Protección de
                    Datos Personales</strong> y su Decreto Reglamentario 1558/2001.
                  </p>
                  <p className="text-gray-400 text-xs mt-3">Última actualización: Enero 2025</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((s, i) => (
              <AnimateOnScroll key={i} delay={i * 40}>
                <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3">{s.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{s.content}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Footer note */}
          <AnimateOnScroll className="mt-12">
            <div className="text-center text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Arlimcoh S.A. — Todos los derechos reservados.</p>
              <p className="mt-1">CUIT: 30-71617649-3 | Buenos Aires, Argentina</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
