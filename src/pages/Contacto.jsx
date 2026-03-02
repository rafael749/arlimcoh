import { useState } from 'react'
import { AnimateOnScroll } from '../components/AnimateOnScroll'
import { PageHeader } from '../components/PageSections'
import IMAGES from '../data/images'
import { Send, Phone, Mail, MapPin, Clock, MessageCircle, Building2, User, FileText, CheckCircle, AlertCircle, X } from 'lucide-react'

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '', empresa: '', cuit: '', email: '', telefono: '', tipo: '', mensaje: '',
  })
  const [showPopup, setShowPopup] = useState(false)
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.nombre.trim()) errs.nombre = 'Ingrese su nombre'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Ingrese un email válido'
    if (!form.mensaje.trim()) errs.mensaje = 'Escriba un mensaje'
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setShowPopup(true)
    setForm({ nombre: '', empresa: '', cuit: '', email: '', telefono: '', tipo: '', mensaje: '' })
  }

  const Field = ({ label, name, type = 'text', icon, placeholder, required }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label} {required && <span className="text-red-400">*</span>}</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>
        <input
          type={type}
          value={form[name]}
          onChange={e => { setForm({ ...form, [name]: e.target.value }); if (errors[name]) setErrors({ ...errors, [name]: undefined }) }}
          placeholder={placeholder}
          className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors[name] ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-sm`}
        />
      </div>
      {errors[name] && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors[name]}</p>}
    </div>
  )

  return (
    <>
      <PageHeader
        title="Contacto"
        subtitle="Estamos para ayudarle. Escribanos y le respondemos en menos de 24 horas hábiles."
        breadcrumbs={[{ label: 'Contacto' }]}
        image={IMAGES.contact}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* ═══ FORM ═══ */}
            <AnimateOnScroll className="lg:w-3/5">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-10">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-1">Envíenos su consulta</h2>
                  <p className="text-gray-500 text-sm mb-8">Complete el formulario y nos comunicaremos a la brevedad.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <Field label="Nombre completo" name="nombre" icon={<User size={16} />} placeholder="Juan Pérez" required />
                      <Field label="Empresa" name="empresa" icon={<Building2 size={16} />} placeholder="Su empresa S.A." />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <Field label="CUIT" name="cuit" icon={<FileText size={16} />} placeholder="XX-XXXXXXXX-X" />
                      <Field label="Email" name="email" type="email" icon={<Mail size={16} />} placeholder="email@empresa.com" required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <Field label="Teléfono" name="telefono" type="tel" icon={<Phone size={16} />} placeholder="+54 11 XXXX-XXXX" />
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tipo de consulta</label>
                        <select
                          value={form.tipo}
                          onChange={e => setForm({ ...form, tipo: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-sm text-gray-700"
                        >
                          <option value="">Seleccione...</option>
                          <option value="presupuesto">Presupuesto</option>
                          <option value="productos">Consulta de productos</option>
                          <option value="licitacion">Licitaciones</option>
                          <option value="reclamo">Reclamo</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mensaje <span className="text-red-400">*</span></label>
                      <textarea
                        value={form.mensaje}
                        onChange={e => { setForm({ ...form, mensaje: e.target.value }); if (errors.mensaje) setErrors({ ...errors, mensaje: undefined }) }}
                        rows={5}
                        placeholder="Describa su consulta..."
                        className={`w-full px-4 py-3 rounded-xl border ${errors.mensaje ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-sm resize-none`}
                      />
                      {errors.mensaje && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.mensaje}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white py-4 rounded-full font-bold text-base shadow-lg shadow-secondary-500/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                      <Send size={18} /> Enviar mensaje
                    </button>
                  </form>
                </div>
            </AnimateOnScroll>

            {/* ═══ SIDEBAR ═══ */}
            <AnimateOnScroll className="lg:w-2/5 space-y-6" delay={150}>
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-r-2xl border-l-4 border-secondary-400 p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-6">Datos de contacto</h3>
                <div className="space-y-5">
                  {[
                    { icon: <Phone size={18} />, label: 'Teléfono', value: '(011) 15-4044-2000', href: 'tel:+5491140442000' },
                    { icon: <Mail size={18} />, label: 'Email', value: 'arlimcoh_sa@yahoo.com.ar', href: 'mailto:arlimcoh_sa@yahoo.com.ar' },
                    { icon: <MapPin size={18} />, label: 'Dirección', value: 'Buenos Aires, Argentina' },
                    { icon: <Clock size={18} />, label: 'Horario', value: 'Lun-Vie 8:00 - 17:00' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white/60 text-xs font-medium">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-white hover:text-white/80 text-sm font-semibold transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-white text-sm font-semibold">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5491140442000?text=Hola,%20quiero%20consultar%20sobre%20productos%20de%20limpieza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl p-6 shadow-lg transition-all hover:-translate-y-0.5 group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">WhatsApp</p>
                  <p className="text-white/80 text-sm">Respuesta inmediata</p>
                </div>
              </a>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105098.16455707527!2d-58.50791929178267!3d-34.61565368193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Arlimcoh"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ POPUP DE CONFIRMACIÓN ═══ */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowPopup(false)} />
          {/* Modal */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-10 max-w-md w-full text-center animate-[fade-in-up_0.4s_ease-out_forwards]">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="text-green-500" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje enviado!</h3>
            <p className="text-gray-500 mb-6">Su consulta fue recibida correctamente. Nos pondremos en contacto en menos de 24 horas hábiles.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-secondary-500/20 transition-all hover:scale-105"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  )
}
