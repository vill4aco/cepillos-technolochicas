import { useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Brush,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Factory,
  FileText,
  Gauge,
  Grid3X3,
  Hammer,
  Instagram,
  Linkedin,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  MoveUpRight,
  Package,
  Phone,
  Quote,
  Ruler,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from 'lucide-react';
import './index.css';

type GalleryItem = { title: string; category: string; image: string; tag: string };

const industrialImage = 'https://images.pexels.com/photos/633850/machine-mill-industry-steam-633850.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const conveyorImage = 'https://images.pexels.com/photos/11679684/pexels-photo-11679684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const workshopImage = 'https://images.pexels.com/photos/5846270/pexels-photo-5846270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const detailImage = 'https://images.pexels.com/photos/8327965/pexels-photo-8327965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const plantImage = 'https://images.pexels.com/photos/18631424/pexels-photo-18631424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const solutions = [
  { title: 'Cepillado interior', label: 'ORIFICIOS E INTERIORES', icon: CircleDot, description: 'Geometrías precisas para limpiar, pulir y preparar cavidades de cualquier diámetro.', image: detailImage },
  { title: 'Desbarbado', label: 'ACABADO CONTROLADO', icon: Sparkles, description: 'Elimina rebabas sin dañar la pieza y mejora la calidad de tus acabados.', image: industrialImage },
  { title: 'Limpieza continua', label: 'BANDAS TRANSPORTADORAS', icon: Layers3, description: 'Operación constante y segura para mantener tus líneas libres de residuos.', image: conveyorImage },
  { title: 'Cepillos como soporte', label: 'PROTECCIÓN Y GUÍA', icon: ShieldCheck, description: 'Soporte, transporte y contención sin marcas para piezas delicadas.', image: plantImage },
];

const products = [
  { name: 'Escobillones', detail: 'Para limpieza manual y espacios reducidos', icon: Brush },
  { name: 'Cilíndricos', detail: 'Limpieza y acabado en movimiento continuo', icon: CircleDot },
  { name: 'Planos', detail: 'Sellado, guía y soporte de superficies', icon: Ruler },
  { name: 'Radiales', detail: 'Desbarbado y pulido de precisión', icon: Settings2 },
  { name: 'Circulares', detail: 'Alto rendimiento para grandes volúmenes', icon: Grid3X3 },
];

const gallery: GalleryItem[] = [
  { title: 'Cepillo cilíndrico de alto desempeño', category: 'Productos', image: conveyorImage, tag: 'Línea continua' },
  { title: 'Reparación y re-encerdado', category: 'Servicios', image: workshopImage, tag: 'Mantenimiento' },
  { title: 'Acabado superficial de precisión', category: 'Soluciones en planta', image: industrialImage, tag: 'Desbarbado' },
  { title: 'Cepillado en banda transportadora', category: 'Soluciones en planta', image: plantImage, tag: 'Limpieza' },
  { title: 'Fabricación sobre plano', category: 'Productos', image: detailImage, tag: 'Diseño especial' },
  { title: 'Evaluación de pieza desgastada', category: 'Servicios', image: 'https://images.pexels.com/photos/7564865/pexels-photo-7564865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', tag: 'Replicado' },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [galleryFilter, setGalleryFilter] = useState('Todos');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [activeApplication, setActiveApplication] = useState(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('submitting');
    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch('https://formspree.io/f/mdeedrkk', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
    setOpenMenu(null);
  };

  const filteredGallery = galleryFilter === 'Todos' ? gallery : gallery.filter((item) => item.category === galleryFilter);

  return (
    <div className="site-shell">
      <div className="topbar"><div className="container topbar-inner"><span><span className="status-dot" /> Fabricación nacional · Respuesta en menos de 24 h</span><span className="topbar-contact">Atención industrial <strong>+52 55 8432 1800</strong></span></div></div>
      <header className="site-header">
        <div className="container nav-inner">
          <button className="brand" onClick={() => goTo('inicio')} aria-label="Volver al inicio"><span className="brand-mark"><Brush size={22} strokeWidth={2.5} /></span><span><b>CEPILLOS</b><em>INDUSTRIALES</em></span></button>
          <nav className={`main-nav ${mobileOpen ? 'is-open' : ''}`}>
            <button onClick={() => goTo('inicio')}>Inicio</button>
            <button onClick={() => goTo('productos')}>Productos</button>
            <button onClick={() => goTo('aplicaciones')}>Aplicaciones</button>
            <button onClick={() => goTo('nosotros')}>Quiénes somos</button>
            <div className="nav-dropdown"><button aria-expanded={openMenu === 'soluciones'} onClick={() => setOpenMenu(openMenu === 'soluciones' ? null : 'soluciones')}>Soluciones <ChevronDown className={openMenu === 'soluciones' ? 'chevron-open' : ''} size={14} /></button>{openMenu === 'soluciones' && <div className="dropdown-panel">{solutions.map((item) => <button key={item.title} onClick={() => goTo('soluciones')}><item.icon size={16} />{item.title}</button>)}</div>}</div>
            <div className="nav-dropdown"><button aria-expanded={openMenu === 'productos'} onClick={() => setOpenMenu(openMenu === 'productos' ? null : 'productos')}>Productos <ChevronDown className={openMenu === 'productos' ? 'chevron-open' : ''} size={14} /></button>{openMenu === 'productos' && <div className="dropdown-panel">{products.map((item) => <button key={item.name} onClick={() => goTo('productos')}><item.icon size={16} />{item.name}</button>)}</div>}</div>
            <div className="nav-dropdown"><button aria-expanded={openMenu === 'servicios'} onClick={() => setOpenMenu(openMenu === 'servicios' ? null : 'servicios')}>Servicios <ChevronDown className={openMenu === 'servicios' ? 'chevron-open' : ''} size={14} /></button>{openMenu === 'servicios' && <div className="dropdown-panel"><button onClick={() => goTo('servicios')}><Ruler size={16} />Diseño industrial</button><button onClick={() => goTo('servicios')}><Hammer size={16} />Reparación</button><button onClick={() => goTo('servicios')}><Package size={16} />Replicado</button></div>}</div>
            <button onClick={() => goTo('galeria')}>Galería</button><button onClick={() => goTo('contacto')}>Contacto</button>
          </nav>
          <button className="header-cta" onClick={() => goTo('contacto')}>Solicitar cotización <ArrowRight size={16} /></button>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Abrir menú">{mobileOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-grid-lines" />
          <div className="container hero-content"><div className="eyebrow"><span /> INGENIERÍA EN MOVIMIENTO</div><h1>El cepillo correcto.<br /><span>El rendimiento que necesitas.</span></h1><p className="hero-copy">Diseñamos y fabricamos cepillos industriales que trabajan a la altura de tus procesos más exigentes.</p><div className="hero-actions"><button className="button button-yellow" onClick={() => goTo('productos')}>Explorar productos <ArrowRight size={18} /></button><button className="button button-ghost" onClick={() => goTo('contacto')}>Hablar con un asesor <MessageCircle size={17} /></button></div><div className="hero-proof"><div className="proof-item"><strong>+25</strong><span>años de experiencia</span></div><div className="proof-item"><strong>1,200<span>+</span></strong><span>soluciones fabricadas</span></div><div className="proof-item"><strong>48 h</strong><span>respuesta técnica</span></div></div></div>
          <div className="hero-visual"><div className="hero-image-wrap"><img src={detailImage} alt="Detalle de fabricación industrial" /><div className="image-overlay" /></div><div className="hero-card"><span className="card-kicker">CAPACIDAD TÉCNICA</span><strong>Hechos para<br />no detenerse.</strong><span className="card-line" /><span className="card-caption">Desde el diseño hasta la entrega.</span></div><div className="vertical-label">PRECISIÓN · RESISTENCIA · RESPALDO</div></div>
        </section>

        <section className="metrics-strip"><div className="container metrics-inner"><div><Gauge size={20} /><span>+80 combinaciones de filamento</span></div><div><Factory size={20} /><span>Fabricación sobre diseño</span></div><div><Zap size={20} /><span>Respuesta para tu línea</span></div><div><ShieldCheck size={20} /><span>Calidad que se comprueba</span></div></div></section>

        <section id="productos" className="section products-section"><div className="container"><div className="section-heading"><div><span className="section-number">01 / PRODUCTOS</span><h2>La forma de avanzar<br /><em>está aquí.</em></h2></div><button className="round-arrow" onClick={() => goTo('contacto')} aria-label="Solicitar catálogo"><ArrowRight /></button></div><div className="products-list">{products.map((product, index) => <button key={product.name} className="product-row" onClick={() => goTo('contacto')}><span className="product-number">0{index + 1}</span><span className="product-icon"><product.icon size={25} /></span><span className="product-name"><strong>{product.name}</strong><small>{product.detail}</small></span><span className="product-action">Ver categoría <ArrowRight size={16} /></span></button>)}</div><div className="product-note"><FileText size={18} /><span>¿No encuentras lo que buscas?</span><button onClick={() => goTo('contacto')}>Solicita una recomendación técnica <ArrowRight size={15} /></button></div></div></section>

        <section id="soluciones" className="section solutions-section"><div className="container"><div className="section-heading"><div><span className="section-number">02 / SOLUCIONES</span><h2>Una solución para<br /><em>cada desafío.</em></h2></div><p>Cuando el proceso exige más, un cepillo estándar no es suficiente. Entendemos tu operación y diseñamos para ella.</p></div><div className="solutions-grid">{solutions.map((item, index) => <button className="solution-card" key={item.title} onClick={() => goTo('contacto')}><div className="solution-image"><img src={item.image} alt={item.title} /><span className="card-index">0{index + 1}</span></div><div className="solution-body"><item.icon size={22} /><span className="mini-label">{item.label}</span><h3>{item.title}</h3><p>{item.description}</p><span className="text-link">Saber más <ArrowRight size={15} /></span></div></button>)}</div></div></section>

        <section id="aplicaciones" className="applications-section"><div className="container applications-layout"><div className="applications-copy"><span className="section-number">03 / APLICACIONES</span><h2>Más que cerdas.<br /><em>Resultados.</em></h2><p>Los detalles de tu proceso importan. Nuestro equipo combina materiales, densidades y geometrías para resolver lo que otros no pueden.</p><button className="button button-dark" onClick={() => goTo('contacto')}>Cuéntanos tu reto <MoveUpRight size={17} /></button><div className="application-list">{['Acabado superficial', 'Desbarbado de precisión', 'Limpieza continua', 'Contención y soporte'].map((application, index) => <button className={activeApplication === index ? 'active' : ''} key={application} onClick={() => setActiveApplication(index)}><span>0{index + 1}</span><strong>{application}</strong><ArrowRight size={16} /></button>)}</div></div><div className="applications-image"><img src={industrialImage} alt="Maquinaria industrial" /><div className="spec-note"><span>01 — APLICACIÓN</span><strong>Diseñado para<br />trabajar contigo</strong></div></div></div></section>

        <section id="nosotros" className="section about-section"><div className="container about-grid"><div className="about-image"><img src={workshopImage} alt="Especialista trabajando en taller" /><div className="experience-badge"><strong>25</strong><span>AÑOS<br />DE OFICIO</span></div></div><div className="about-copy"><span className="section-number">04 / QUIÉNES SOMOS</span><h2>La experiencia<br /><em>se nota.</em></h2><p className="lead">Somos una empresa mexicana especializada en cepillos industriales de alto desempeño.</p><p>Desde 1999 acompañamos a equipos de producción, mantenimiento e ingeniería con soluciones que mejoran sus procesos y protegen su inversión.</p><div className="about-values"><div><Check size={17} /><span><strong>Conocimiento técnico</strong> Decisiones respaldadas por experiencia real.</span></div><div><Check size={17} /><span><strong>Fabricación a medida</strong> Cada pieza responde a una necesidad concreta.</span></div><div><Check size={17} /><span><strong>Respuesta cercana</strong> Hablamos el idioma de tu operación.</span></div></div><button className="text-link dark-link" onClick={() => goTo('contacto')}>Conoce nuestra historia <ArrowRight size={16} /></button></div></div></section>

        <section id="servicios" className="services-section"><div className="container"><div className="services-heading"><div><span className="section-number">05 / SERVICIOS</span><h2>Cuando necesitas<br /><em>más que un producto.</em></h2></div><p>Extendemos la vida útil de tus equipos y resolvemos lo que parece imposible.</p></div><div className="services-grid"><div className="service-feature"><div><span className="service-icon"><Ruler /></span><span className="mini-label">01 / DESARROLLO</span><h3>Diseño industrial</h3><p>Del plano a la pieza terminada. Traducimos tu necesidad en una solución funcional.</p></div><span className="service-arrow"><ArrowRight /></span></div><div className="service-card"><Hammer size={22} /><span className="mini-label">02 / MANTENIMIENTO</span><h3>Reparación</h3><p>Re-encerdado y re-mecanizado para recuperar el desempeño de tus cepillos.</p><ArrowRight className="service-card-arrow" size={18} /></div><div className="service-card dark-service"><Package size={22} /><span className="mini-label">03 / CONTINUIDAD</span><h3>Replicado</h3><p>Duplicamos piezas desgastadas o descontinuadas con precisión.</p><ArrowRight className="service-card-arrow" size={18} /></div></div><div className="process-line"><span><b>01</b> Solicitud</span><i /><span><b>02</b> Evaluación</span><i /><span><b>03</b> Cotización</span><i /><span><b>04</b> Fabricación y entrega</span></div></div></section>

        <section id="galeria" className="section gallery-section"><div className="container"><div className="section-heading gallery-heading"><div><span className="section-number">06 / GALERÍA</span><h2>Hecho para verse<br /><em>en acción.</em></h2></div><p>Una mirada a los proyectos, procesos y soluciones que construimos junto a nuestros clientes.</p></div><div className="filters">{['Todos', 'Productos', 'Soluciones en planta', 'Servicios'].map((filter) => <button key={filter} className={galleryFilter === filter ? 'active' : ''} onClick={() => setGalleryFilter(filter)}>{filter}</button>)}</div><div className="gallery-grid">{filteredGallery.map((item) => <button className="gallery-item" key={item.title} onClick={() => setLightbox(item)}><img src={item.image} alt={item.title} /><div className="gallery-overlay"><span>{item.tag}</span><strong>{item.title}</strong><span className="zoom-icon">+</span></div></button>)}</div></div></section>

        <section id="contacto" className="contact-section"><div className="container contact-grid"><div className="contact-copy"><span className="section-number">07 / CONTACTO</span><h2>Hablemos de<br /><em>tu siguiente proyecto.</em></h2><p>Cuéntanos qué necesitas. Un especialista te responderá con una recomendación clara y puntual.</p><div className="contact-details"><a href="tel:+525584321800"><Phone size={18} /><span><small>ATENCIÓN INDUSTRIAL</small>+52 55 8432 1800</span></a><a href="mailto:ventas@cepillosindustriales.mx"><Mail size={18} /><span><small>COTIZACIONES</small>ventas@cepillosindustriales.mx</span></a><div><Factory size={18} /><span><small>PLANTA Y OFICINAS</small>Av. Industria 180, Naucalpan, Estado de México</span></div></div></div><div className="contact-form-wrap">{formStatus === 'success' ? <div className="success-message"><span className="success-icon"><Check /></span><h3>Recibimos tu mensaje.</h3><p>Un especialista se pondrá en contacto contigo muy pronto.</p><button className="button button-yellow" onClick={() => setFormStatus('idle')}>Enviar otra consulta</button></div> : <form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><span>CUÉNTANOS SOBRE TU PROYECTO</span><strong>Respuesta en menos de 24 h</strong></div>{formStatus === 'error' && <div className="form-error">No se pudo enviar el mensaje. Inténtalo de nuevo.</div>}<div className="form-row"><label>Nombre completo<input required name="nombre" placeholder="Tu nombre" /></label><label>Empresa<input required name="empresa" placeholder="Nombre de tu empresa" /></label></div><div className="form-row"><label>Correo electrónico<input required type="email" name="email" placeholder="nombre@empresa.com" /></label><label>Teléfono<input name="telefono" placeholder="+52 55 ..." /></label></div><label>¿Qué necesitas?<select name="necesidad" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Producto estándar</option><option>Solución para mi proceso</option><option>Reparación o replicado</option><option>Otro requerimiento</option></select></label><label>Cuéntanos más<textarea required name="mensaje" placeholder="Describe brevemente tu necesidad, medidas o aplicación..." rows={4} /></label><button className="button button-yellow form-submit" type="submit" disabled={formStatus === 'submitting'}>{formStatus === 'submitting' ? 'Enviando...' : 'Enviar solicitud'} <Send size={16} /></button><small className="privacy-note">Tus datos se utilizan únicamente para dar seguimiento a tu solicitud.</small></form>}</div></div></section>
      </main>

      <footer className="footer"><div className="container footer-grid"><div className="footer-column footer-company"><button className="brand footer-brand" onClick={() => goTo('inicio')}><span className="brand-mark"><Brush size={22} /></span><span><b>CEPILLOS</b><em>INDUSTRIALES</em></span></button><p>Soluciones que mantienen<br />tu operación en movimiento.</p><div className="social-links"><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a><a href="https://wa.me/525584321800" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={16} /></a></div></div><div className="footer-column"><h3>Enlaces rápidos</h3><div className="footer-links"><button onClick={() => goTo('inicio')}>Inicio</button><button onClick={() => goTo('nosotros')}>Quiénes somos</button><button onClick={() => goTo('galeria')}>Galería</button><button onClick={() => goTo('contacto')}>Contacto</button></div></div><div className="footer-column"><h3>Productos & soluciones</h3><div className="footer-links"><button onClick={() => goTo('productos')}>Escobillones</button><button onClick={() => goTo('productos')}>Cepillos cilíndricos</button><button onClick={() => goTo('productos')}>Cepillos planos</button><button onClick={() => goTo('soluciones')}>Limpieza en bandas</button><button onClick={() => goTo('soluciones')}>Cepillado interior</button></div></div><div className="footer-column footer-direct"><h3>Atención directa</h3><a href="tel:+525584321800"><Phone size={15} />+52 55 8432 1800</a><a href="mailto:ventas@cepillosindustriales.mx"><Mail size={15} />ventas@cepillosindustriales.mx</a><span><Factory size={15} />Naucalpan, Estado de México</span><button className="privacy-link" onClick={() => goTo('contacto')}>Políticas de privacidad <ArrowRight size={14} /></button></div></div><div className="container footer-bottom"><span>© 2024 Cepillos Industriales. Todos los derechos reservados.</span><span>Ingeniería que sí responde.</span></div></footer>

      {lightbox && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Cerrar"><X /></button><div className="lightbox-content" onClick={(event) => event.stopPropagation()}><img src={lightbox.image} alt={lightbox.title} /><div><span>{lightbox.tag}</span><h3>{lightbox.title}</h3></div></div></div>}
    </div>
  );
}

export default App;
