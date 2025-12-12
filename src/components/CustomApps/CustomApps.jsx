import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMobileAlt, FaLaptop, FaUserCheck, FaCogs, FaRocket, FaShieldAlt } from 'react-icons/fa'
import './CustomApps.css'

const CustomApps = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: <FaUserCheck />,
      title: 'Análisis de Necesidades',
      description: 'Estudiamos a fondo tu empresa o negocio para entender exactamente qué funcionalidades necesitas. Cada detalle cuenta para crear la solución perfecta.'
    },
    {
      icon: <FaLaptop />,
      title: 'Aplicaciones Web Personalizadas',
      description: 'Desarrollamos aplicaciones web completamente adaptadas a tus procesos, con diseño moderno, responsive y optimizadas para tu flujo de trabajo específico.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Apps Android a Medida',
      description: 'Creamos aplicaciones móviles nativas para Android diseñadas específicamente para tus necesidades, con interfaz intuitiva y funcionalidades únicas.'
    },
    {
      icon: <FaCogs />,
      title: 'Integración Completa',
      description: 'Tus aplicaciones se integran perfectamente con tus sistemas existentes y procesos empresariales, sin fricciones ni complicaciones.'
    },
    {
      icon: <FaRocket />,
      title: 'Escalabilidad Garantizada',
      description: 'Diseñamos pensando en el futuro. Tus aplicaciones crecerán contigo, adaptándose a nuevas necesidades sin necesidad de reconstruirlas desde cero.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Seguridad y Confiabilidad',
      description: 'Implementamos las mejores prácticas de seguridad y realizamos pruebas exhaustivas para garantizar que tus aplicaciones sean robustas y confiables.'
    }
  ]

  return (
    <section id="apps-medida" className="custom-apps">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="section-title">Diseño de Apps a Medida</h2>
          <p className="section-subtitle">
            Cada usuario y empresa tiene necesidades únicas. Por eso diseñamos aplicaciones web y apps Android completamente personalizadas, 
            teniendo en cuenta cada detalle específico de tu negocio para crear la solución perfecta que se adapte exactamente a lo que necesitas.
          </p>
        </motion.div>

        <div className="custom-apps-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="custom-apps-item"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="custom-apps-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomApps

