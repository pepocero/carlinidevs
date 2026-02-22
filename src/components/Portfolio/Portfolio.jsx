import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGlobe, FaCode, FaExternalLinkAlt, FaLaptopCode, FaTools, FaChalkboardTeacher, FaFileDownload, FaFilePdf, FaFileWord, FaClipboardList, FaGraduationCap, FaStopwatch, FaQrcode, FaCalculator, FaGift, FaEdit, FaMobileAlt } from 'react-icons/fa'
import './Portfolio.css'

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const websites = [
    {
      name: 'Candeivid',
      url: 'https://candeivid.com/',
      description: 'Sitio web completo con múltiples herramientas y aplicaciones integradas.',
      icon: <FaGlobe />,
      type: 'Website',
      image: '/Candeivid.PNG'
    },
    {
      name: 'Global Proyectos',
      url: 'http://globalproyectos.net/',
      description: 'Capacitación del personal, automatización de procesos y optimización de sistemas.',
      icon: <FaChalkboardTeacher />,
      type: 'Consultoría & Automatización',
      image: '/global.PNG'
    },
    {
      name: 'AMCA',
      url: 'https://amca.es',
      description: 'Desarrollo web profesional con diseño personalizado y funcionalidades específicas.',
      icon: <FaGlobe />,
      type: 'Website',
      image: '/amca.PNG'
    },
    {
      name: 'Eureko',
      url: 'https://www.eureko.es/',
      description: 'Implementación completa de tienda PrestaShop integrada en diseño personalizado.',
      icon: <FaTools />,
      type: 'E-commerce',
      image: '/eureko.PNG'
    }
  ]

  const customApps = [
    {
      name: 'Escuela de teatro - Campus virtual',
      url: 'https://gestionetbb.com/',
      description: 'Plataforma de gestión educativa para escuelas de teatro. Permite la administración de cursos, alumnos y recursos de manera eficiente.',
      icon: <FaGraduationCap />,
      tech: 'Campus Virtual Completo',
      image: '/gestioneducativa.PNG'
    },
    {
      name: 'El Pot de la Sort',
      url: 'https://elpotdelasort.carlinitools.com/',
      description: 'Aplicación para realizar sorteos aleatorios de forma justa y transparente. Perfecta para instituciones educativas, para crear grupos de trabajo o elegir aleatoriamente líderes de grupos. ',
      icon: <FaGift />,
      tech: 'Sistema de Sorteos',
      image: '/potdelasort.png'
    },
    {
      name: 'Gestión de Partes de Trabajo',
      url: 'https://gestiogar.carlinitools.com/',
      description: 'Sistema completo para empresas de reparaciones del hogar. Gestión de clientes, trabajos y presupuestos.',
      icon: <FaClipboardList />,
      tech: 'Gestiogar',
      image: '/partestrabajo.PNG'
    },
    {
      name: 'Control de Horas de Trabajo',
      url: 'https://hourly.carlinitools.com/',
      description: 'Control de horas trabajadas para freelancers, autónomos y empresas. Registro preciso y gestión de tiempos.',
      icon: <FaStopwatch />,
      tech: 'Hourly',
      image: '/hourly.PNG'
    },
    {
      name: 'Generador de Códigos QR',
      url: 'https://qr.carlinitools.com/',
      description: 'Genera códigos QR personalizados: texto, URL, email, SMS, WiFi, contacto. Personaliza colores, tamaño, logo y nivel de corrección.',
      icon: <FaQrcode />,
      tech: 'QR',
      image: '/qr.PNG'
    },
    {
      name: 'Editor PDF Profesional',
      url: 'https://candeivid.com/pdf/presentacion.html',
      description: 'Editor PDF completo: agregar imágenes, textos, resaltar, dibujar, formas y más funcionalidades. Está optimizado para dispositivos de escritorio, por lo que en moviles algunos aspectos visuales pueden verse afectados.',
      icon: <FaFilePdf />,
      tech: 'Editor PDF',
      image: '/editorpdf.PNG'
    },
    {
      name: 'Contadores sin Incidentes',
      url: 'https://contador.carlinitools.com/',
      description: 'Sistema de contadores robusto y confiable para gestionar eventos, métricas y números sin fallos ni incidentes.',
      icon: <FaCalculator />,
      tech: 'Contador',
      image: '/contadores.png'
    },
    {
      name: 'Whiteboard - Pizarra Colaborativa',
      url: 'https://whiteboard.carlinitools.com/',
      description: 'Pizarra colaborativa virtual que permite crear diagramas con estilo dibujado a mano. Agregada la funcionalidad de crear tarjetas estilo posit para organizar ideas.Herramienta intuitiva para brainstorming y trabajo en equipo.',
      icon: <FaEdit />,
      tech: 'Whiteboard',
      image: '/pizarra.PNG'
    },
    {
      name: 'Conversor de Archivos',
      url: 'https://conversor.carlinitools.com/',
      description: 'Conversor multiformato: Texto a PDF, PDF a Word, JPG a PDF y conversor de audio.',
      icon: <FaFileWord />,
      tech: 'Conversor de Archivos',
      image: '/conversor.PNG'
    }
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">Portfolio de Proyectos</h2>
          <p className="section-subtitle">
            Casos reales de éxito: sitios web profesionales y aplicaciones a medida para nuestros clientes
          </p>
        </motion.div>

        {/* Sitios Web */}
        <motion.div 
          className="portfolio-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="portfolio-category-title">
            <FaGlobe className="category-icon" />
            Algunos Sitios Web Diseñados
          </h3>
          <div className="portfolio-grid">
            {websites.map((project, index) => (
              <motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <div className="portfolio-image-container">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="portfolio-image"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="portfolio-icon" style={{ display: 'none' }}>{project.icon}</div>
                </div>
                <div className="portfolio-content">
                  <h4>{project.name}</h4>
                  <span className="portfolio-type">{project.type}</span>
                  <p>{project.description}</p>
                </div>
                <div className="portfolio-link">
                  <span>Ver proyecto</span>
                  <FaExternalLinkAlt />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Aplicaciones a Medida */}
        <motion.div 
          className="portfolio-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="portfolio-category-title">
            <FaMobileAlt className="category-icon" />
            Aplicaciones a Medida
          </h3>
          <div className="portfolio-grid apps-grid">
            {customApps.map((app, index) => (
              <motion.a
                key={index}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card app-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.08, duration: 0.5 }}
              >
                <div className="portfolio-image-container">
                  <img 
                    src={app.image} 
                    alt={app.name}
                    className="portfolio-image"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="portfolio-icon app-icon" style={{ display: 'none' }}>{app.icon}</div>
                </div>
                <div className="portfolio-content">
                  <h4>{app.name}</h4>
                  <span className="portfolio-tech">{app.tech}</span>
                  <p>{app.description}</p>
                </div>
                <div className="portfolio-link">
                  <span>Ver demo</span>
                  <FaExternalLinkAlt />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio

