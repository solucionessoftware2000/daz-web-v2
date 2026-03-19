# DAZ Web v2

Web corporativa de la empresa **DAZ** (daz-web-v2), desarrollada con tecnologías modernas de frontend.

## 📌 Propósito

- Portafolio / landing page institucional.
- Presenta servicios, certificaciones, clientes, contacto y estadísticas.
- UX + diseño responsive (móvil/tablet/Desktop).
- Animaciones con partículas e incremento dinámico de números.

## 🧱 Stack tecnológico

- `Vite` (build tool)
- `React` + `TypeScript`
- `Tailwind CSS` (estilos utilitarios)
- `postcss`
- `ESLint` + configuración (`eslint.config.js`)
- `tsconfig` manager (`tsconfig.app.json`, `tsconfig.node.json`)

## 📁 Estructura del proyecto

Raíz:
- `index.html`
- `package.json`
- `vite.config.ts`
- `README.md` (este)
- `postcss.config.js`
- `tailwind.config.js`

`src/`:
- `main.tsx`, `App.tsx`
- `index.css`

Componentes:
- `Header.tsx`
- `HeroSection.tsx`
- `ServicesSection.tsx`
- `WhyChooseUsSection.tsx`
- `StatsSection.tsx`
- `TestimonialsSection.tsx`
- `ClientSection.tsx`
- `LocationSection.tsx`
- `ContactSection.tsx`
- `FeaturedServicesModal.tsx`
- `Footer.tsx`
- `WhatsappButton.tsx`
- `ParticleBackground.tsx`

Hooks:
- `useCountUp.ts`

## 🚀 Instalación local

1. Clonar repo
   - `git clone <repo-url>`
2. Entrar carpeta
   - `cd daz-web-v2`
3. Instalar dependencias
   - `npm install` (o `pnpm i`, `yarn`)
4. Arrancar desarrollo
   - `npm run dev`

## 🧪 Scripts disponibles

- `npm run dev` → servidor local con HMR
- `npm run build` → build de producción (`dist/`)
- `npm run preview` → prueba build local
- `npm run lint` → análisis estático / ESLint

> Ajusta el `package.json` si no hay script de lint o preview.

## 📐 Principales características y flujo

- Diseño 100% responsive con Tailwind.
- Menú de navegación con anclas scroll smooth.
- Modal de servicios destacados.
- Sección de “Por qué elegirnos” con cards.
- Gráficas de conteo animado (`useCountUp`).
- Testimonios estilo carrusel / grid.
- Botón flotante WhatsApp.
- Perfil geolocalización + dirección y formulario de contacto.
- Fondo de partículas con `ParticleBackground.tsx`.

## 🛠️ Buenas prácticas incluidas

- Uso de componentes desacoplados.
- Props tipadas en TypeScript.
- Separación de lógica en hook (`useCountUp`).
- CSS con Tailwind + clases utilitarias.
- Estructura limpia para ampliaciones.

## 🌐 Deploy

- Build para producción:
  - `npm run build`
- Subir `/dist` a tu hosting preferido
  - Netlify / Vercel / Firebase Hosting / AWS S3 etc.


