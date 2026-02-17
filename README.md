# 🚀 CarliniTools - Website Profesional

Aplicación web moderna desarrollada con React, Vite y Cloudflare Functions para empresa de soluciones informáticas enfocada en PyMEs.

**✅ Optimizado para Cloudflare Pages**

## ✨ Características

- **React + Vite**: Framework moderno y ultra rápido
- **Framer Motion**: Animaciones fluidas y profesionales
- **Diseño Responsivo**: Adaptado a todos los dispositivos
- **Paleta de Colores Vibrante**: Cyan (#00D9FF), Púrpura (#8338EC), Rosa (#FF006E)
- **Formulario Funcional**: Envío de emails con MailChannels
- **Optimizado para Cloudflare Pages**: Configuración lista para deploy
- **Partículas Animadas**: Fondo interactivo con canvas
- **Cloudflare Functions**: Serverless functions para envío de emails

## 🎨 Paleta de Colores

- **Primary (Cyan)**: #00D9FF
- **Secondary (Rosa)**: #FF006E
- **Accent (Púrpura)**: #8338EC
- **Success (Verde)**: #06FFA5
- **Warning (Amarillo)**: #FFB800

## 📋 Secciones

1. **Hero**: Presentación con animaciones y estadísticas
2. **Servicios**: Desarrollo web, IA, CRM personalizado
3. **Ventajas**: 6 puntos diferenciadores
4. **Proceso**: Timeline de 6 pasos
5. **Tecnologías**: Stack tecnológico
6. **Contacto**: Formulario funcional con envío de emails
7. **Footer**: Navegación y enlaces

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview de producción
npm run preview
```

## 📧 Configuración de Email

### Cloudflare Pages con MailChannels

Tu proyecto usa **MailChannels** (API gratuita de Cloudflare Workers):

✅ **Ventajas:**
- No requiere contraseña de Gmail
- Gratis para Cloudflare Pages
- Confiable y rápido
- Sin límites

### Variables de Entorno en Cloudflare

En el Dashboard de Cloudflare Pages:

1. Tu proyecto → **Settings** → **Environment variables**
2. Agregar:
   - `GMAIL_USER`: pepocero@gmail.com
   - `RECIPIENT_EMAIL`: pepocero@gmail.com

**Nota:** Con MailChannels NO necesitas `GMAIL_APP_PASSWORD` ✅

## 🚀 Deploy en Cloudflare Pages

### Quick Start (5 minutos)

Ver: **`CLOUDFLARE-QUICKSTART.md`** para guía rápida

### Guía Completa

Ver: **`CLOUDFLARE-DEPLOY.md`** para documentación detallada

### Pasos Básicos:

1. **Push a GitHub** (ya hecho)
2. **Cloudflare Dashboard** → Workers & Pages → Create
3. **Conectar repositorio** `pepocero/solucionesit`
4. **Configurar:**
   - Framework: Vite
   - Build: `npm run build`
   - Output: `dist`
5. **Variables:**
   - `GMAIL_USER=pepocero@gmail.com`
   - `RECIPIENT_EMAIL=pepocero@gmail.com`
6. **Deploy** → ¡Listo!

Tu sitio: `https://carlinidevs.pages.dev`

## 📁 Estructura del Proyecto

```
soluciones-it/
├── functions/
│   └── contact.js          # Cloudflare Function para emails
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── Services/
│   │   ├── Advantages/
│   │   ├── Process/
│   │   ├── Technologies/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   └── ParticlesBackground/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

## 🔧 Tecnologías Utilizadas

### Frontend
- React 18
- Vite 5
- Framer Motion
- React Icons
- React Intersection Observer

### Backend
- Cloudflare Functions
- MailChannels API
- Cloudflare Workers

### Deployment
- Cloudflare Pages
- GitHub

## 📱 Características Responsivas

- **Desktop**: Grid completo con todas las funcionalidades
- **Tablet**: Adaptación a 2 columnas
- **Mobile**: 
  - Menú hamburguesa animado
  - Diseño de columna única
  - Botones táctiles optimizados

## 🎯 Funcionalidades Destacadas

### Formulario de Contacto
- Validación en tiempo real
- Envío automático de emails
- Diseño HTML profesional para emails
- Respuesta automática al cliente
- Notificaciones de éxito/error

### Animaciones
- Scroll reveal con Intersection Observer
- Framer Motion para animaciones complejas
- Partículas interactivas con Canvas
- Efectos de hover y transiciones suaves

### Performance
- Code splitting automático
- Lazy loading de componentes
- Optimización de imágenes
- Minificación y compresión

## 🔐 Seguridad

- Variables de entorno para credenciales
- Validación de inputs del lado del servidor
- Sanitización de datos
- CORS configurado correctamente
- Rate limiting en API endpoints

## 📊 SEO Optimizado

- Meta tags configurados
- Estructura semántica HTML5
- Schema markup
- Sitemap incluido
- Robots.txt configurado

## 🐛 Troubleshooting

### Error al enviar email

1. Verificar que la contraseña de aplicación es correcta
2. Revisar que las variables de entorno están configuradas
3. Comprobar logs en Vercel Functions

### Build error en Vercel

1. Verificar que todas las dependencias están en `package.json`
2. Revisar que no hay imports relativos incorrectos
3. Comprobar compatibilidad de Node.js (v18+)

### Estilos no aplicados

1. Limpiar cache: `npm run build`
2. Verificar imports de CSS en componentes
3. Revisar orden de carga de estilos

## 📝 Personalización

### Cambiar colores

Editar variables en `src/index.css`:

```css
:root {
  --primary-color: #TU_COLOR;
  --secondary-color: #TU_COLOR;
  --accent-color: #TU_COLOR;
}
```

### Modificar contenido

1. **Textos**: Editar directamente en los componentes `.jsx`
2. **Imágenes**: Agregar a `/public` y referenciar
3. **Servicios**: Modificar array en `Services.jsx`

## 🤝 Contribuir

1. Fork el proyecto
2. Crear rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo licencia MIT.

## 👨‍💻 Autor

**CarliniTools**
- Email: pepocero@gmail.com
- Website: [Tu dominio en Cloudflare Pages]

---

**Desarrollado con ❤️ usando React + Vite + Node.js**
