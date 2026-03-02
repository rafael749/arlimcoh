import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { AnimateOnScroll, CountUp } from '../components/AnimateOnScroll'
import { PageHeader, CTABanner } from '../components/PageSections'
import { products, categories } from '../data/products'
import IMAGES from '../data/images'
import { ArrowRight, Leaf, FileText, Package, Truck, Search, ShoppingCart, Sparkles, Brush, UtensilsCrossed, Recycle, Boxes } from 'lucide-react'

const categoryIcons = {
  all: <Boxes size={20} />,
  industrial: <Sparkles size={20} />,
  bazar: <Brush size={20} />,
  gastronomia: <UtensilsCrossed size={20} />,
  descartables: <Package size={20} />,
  eco: <Recycle size={20} />,
}

export default function Productos() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    let list = filter === 'all' ? products : products.filter(p => p.category === filter)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      )
    }
    return list
  }, [filter, search])

  const categoryCount = useMemo(() => {
    const counts = { all: products.length }
    products.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1
    })
    return counts
  }, [])

  return (
    <>
      <PageHeader
        title="Catálogo de productos"
        subtitle="Más de 500 insumos de limpieza industrial, descartables, químicos, artículos de bazar y línea eco para empresas y organismos."
        breadcrumbs={[{ label: 'Productos' }]}
        image={IMAGES.cleaning1}
      />

      {/* ═══ CATEGORY CARDS ═══ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-10">
            <div className="section-title-bar">
              <span className="text-secondary-600 font-semibold text-sm uppercase tracking-[0.15em]">Explore nuestro catálogo</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-1">Categorías de productos</h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.filter(c => c.id !== 'all').map((cat, i) => (
              <AnimateOnScroll key={cat.id} delay={i * 60}>
                <button
                  onClick={() => { setFilter(cat.id); document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="group flex flex-col items-center bg-gray-50 hover:bg-primary-50 rounded-2xl p-6 transition-all duration-300 border border-transparent hover:border-primary-200 hover:shadow-lg w-full"
                >
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {categoryIcons[cat.id]}
                  </div>
                  <span className="font-bold text-gray-900 text-sm mb-1">{cat.label}</span>
                  <span className="text-xs text-gray-400 font-medium">{categoryCount[cat.id] || 0} productos</span>
                </button>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FILTROS + SEARCH + GRID ═══ */}
      <section id="catalogo" className="py-20 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-10">
            <div className="section-title-bar">
              <span className="text-secondary-600 font-semibold text-sm uppercase tracking-[0.15em]">Nuestro catálogo</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-1 mb-2">Todos los productos</h2>
            </div>
            <p className="text-gray-500 max-w-xl mt-3">Filtre por categoría o busque por nombre. Solicite fichas técnicas desde cada producto.</p>
          </AnimateOnScroll>

          {/* Search bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar producto..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm shadow-sm"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-medium">
                  Limpiar
                </button>
              )}
            </div>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20 scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {categoryIcons[cat.id]}
                {cat.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${filter === cat.id ? 'bg-white/20' : 'bg-gray-100'}`}>
                  {categoryCount[cat.id] || 0}
                </span>
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-sm text-gray-400 mb-6 text-center">
            Mostrando <span className="font-bold text-gray-700">{filtered.length}</span> de {products.length} productos
          </p>

          {/* Product grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <AnimateOnScroll key={product.id} delay={Math.min(i * 40, 400)}>
                  <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover-scale h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      {product.eco && (
                        <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                          <Leaf size={12} /> Eco
                        </span>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {/* Quick action */}
                      <Link
                        to={`/contacto?producto=${encodeURIComponent(product.name)}`}
                        className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-primary-600 rounded-lg px-3 py-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-md flex items-center gap-1"
                      >
                        <ShoppingCart size={12} /> Consultar
                      </Link>
                    </div>

                    {/* Body */}
                    <div className="p-5 flex-1 flex flex-col">
                      <span className="text-xs font-bold text-secondary-500 uppercase tracking-wider">
                        {categories.find(c => c.id === product.category)?.label}
                      </span>
                      <h3 className="font-bold text-gray-900 mt-1 mb-2 text-sm">{product.name}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-1">{product.description}</p>
                    </div>

                    {/* Footer */}
                    <div className="px-5 pb-5 flex items-center justify-between">
                      <span className="text-xs text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md font-medium">{product.sizes}</span>
                      <Link
                        to={`/contacto?producto=${encodeURIComponent(product.name)}`}
                        className="text-xs font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1 group-hover:gap-2 transition-all"
                      >
                        Pedir <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Search className="mx-auto text-gray-300 mb-4" size={48} />
              <h3 className="text-lg font-bold text-gray-600 mb-2">Sin resultados</h3>
              <p className="text-gray-400 text-sm">Intente con otro término de búsqueda o cambie la categoría.</p>
              <button
                onClick={() => { setSearch(''); setFilter('all') }}
                className="mt-4 text-primary-500 font-semibold text-sm hover:underline"
              >
                Ver todos los productos
              </button>
            </div>
          )}

          <AnimateOnScroll className="text-center mt-14">
            <p className="text-gray-500 mb-4">¿No encuentra lo que busca? Tenemos más de 500 productos disponibles.</p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-primary-500/20 transition-all hover:scale-105"
            >
              Solicitar catálogo completo <ArrowRight size={18} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ BAZAR HIGHLIGHT ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <AnimateOnScroll className="lg:w-1/2" animation="animate-[slide-in-left_0.7s_ease-out_forwards]">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-secondary-200 to-accent-200 rounded-2xl opacity-20 blur-xl" />
                <img
                  src={IMAGES.cleaning3}
                  alt="Artículos de bazar y utensilios de limpieza"
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <p className="text-2xl font-extrabold text-primary-600"><CountUp end={19} />+</p>
                  <p className="text-xs text-gray-500 font-medium">Artículos de bazar</p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="lg:w-1/2">
              <div className="section-title-bar">
                <span className="text-secondary-600 font-semibold text-sm uppercase tracking-[0.15em]">Sección destacada</span>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-1 mb-4">Bazar y utensilios de limpieza</h2>
              </div>
              <p className="text-gray-500 leading-relaxed mb-6">
                Todo lo que necesita para equipar su equipo de limpieza: escobas, escobillones, secadores, mopas, baldes, carros institucionales, trapos, esponjas, cepillos y más. Productos de calidad profesional a precios mayoristas.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Escobas y escobillones', 'Mopas profesionales', 'Baldes y secadores', 'Carros de limpieza', 'Trapos y rejillas', 'Esponjas y fibras', 'Cestos de residuos', 'Pulverizadores'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
              <button
                onClick={() => { setFilter('bazar'); document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-secondary-500/20 transition-all hover:scale-105"
              >
                Ver artículos de bazar <ArrowRight size={18} />
              </button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ INFO CARDS ═══ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FileText size={28} />, title: 'Fichas técnicas', desc: 'Fichas de seguridad y hojas técnicas para todos los productos químicos. Solicítelas por email.', color: 'bg-primary-100 text-primary-600' },
              { icon: <Package size={28} />, title: 'Envases a medida', desc: 'Presentaciones desde 1 litro hasta bidones de 200 litros para clientes industriales.', color: 'bg-secondary-100 text-secondary-600' },
              { icon: <Truck size={28} />, title: 'Entregas programadas', desc: 'Entregas periódicas según su consumo. Sin costo de envío en pedidos mayoristas en CABA.', color: 'bg-accent-100 text-accent-600' },
            ].map((card, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-white rounded-r-2xl border-l-4 border-secondary-400 p-8 shadow-sm text-center hover-scale">
                  <div className={`w-14 h-14 ${card.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm">{card.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Necesita un presupuesto por volumen?"
        subtitle="Envíenos su lista de productos y le respondemos en 24 horas hábiles."
        image={IMAGES.warehouse}
      />
    </>
  )
}
