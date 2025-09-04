# 🚖 Transportes JASS - Sitio Web Oficial

> **Plataforma web moderna para servicios de transporte y traslados en Lima, Perú**

![Transportes JASS](https://img.shields.io/badge/Transportes-JASS-blue?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#️-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Funcionalidades](#-funcionalidades-principales)
- [Configuración](#️-configuración)
- [Personalización](#-personalización)
- [Contribución](#-contribución)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

## 🎯 Descripción

**Transportes JASS** es una plataforma web completa diseñada para una empresa de transporte privado en Lima, Perú. Ofrece servicios de traslados al aeropuerto, transporte ejecutivo y movilidad urbana con una interfaz moderna, responsiva y totalmente funcional.

### ✨ Destacados
- 🎨 **Diseño moderno** con modo oscuro/claro
- 📱 **100% Responsivo** - Se adapta a todos los dispositivos
- ⚡ **Optimizado** para velocidad y SEO
- 🚀 **Interactivo** con animaciones suaves
- 💬 **Integración WhatsApp** para reservas instantáneas

## 🌟 Características

### 🖥️ Interfaz de Usuario
- **Diseño Responsivo**: Compatible con móviles, tablets y desktop
- **Tema Dinámico**: Modo claro/oscuro con persistencia
- **Navegación Suave**: Scroll animado entre secciones
- **Animaciones**: Efectos de entrada y transiciones fluidas

### 📊 Funcionalidades de Negocio
- **Calculadora de Precios**: Cotización automática entre destinos
- **Sistema de Reservas**: Formulario integrado con WhatsApp
- **Galería de Vehículos**: Showcase de la flota disponible
- **Testimonios**: Carrusel de reseñas de clientes
- **FAQ Interactivo**: Preguntas frecuentes con acordeón

### 🔧 Características Técnicas
- **Lazy Loading**: Carga optimizada de imágenes
- **PWA Ready**: Preparado para aplicación web progresiva
- **SEO Optimizado**: Meta tags y estructura semántica
- **Accesibilidad**: Cumple estándares WCAG

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **HTML5** | Latest | Estructura y semántica |
| **CSS3** | Latest | Estilos y animaciones |
| **JavaScript** | ES6+ | Interactividad y funcionalidad |
| **Font Awesome** | 6.0+ | Iconografía |
| **Google Fonts** | Latest | Tipografía (Poppins) |

## 📁 Estructura del Proyecto

```
transportes-jass/
│
├── 📁 css/
│   └── styles.css          # Estilos principales
│
├── 📁 js/
│   └── script.js           # Funcionalidad JavaScript
│
├── 📁 img/
│   ├── logo.png            # Logo de la empresa
│   ├── img1.jpeg           # Imagen hero 1
│   ├── img2.jpg            # Imagen hero 2
│   ├── img3.jpg            # Imagen hero 3
│   ├── sedan.jpg           # Vehículo sedan
│   ├── suv.jpg             # Vehículo SUV
│   ├── van.jpg             # Vehículo van
│   └── minivan.jpg         # Vehículo minivan
│
├── 📁 icons/
│   ├── icon-192x192.png    # PWA icon 192px
│   └── icon-512x512.png    # PWA icon 512px
│
├── index.html              # Página principal
├── manifest.json           # Manifiesto PWA
├── service-worker.js       # Service Worker
└── README.md              # Este archivo
```

## 🚀 Instalación

### Método 1: Descarga Directa
```bash
# Clonar o descargar el repositorio
git clone https://github.com/tu-usuario/transportes-jass.git
cd transportes-jass
```

### Método 2: Servidor Local
```bash
# Con Python (recomendado)
python -m http.server 8000

# Con Node.js (si tienes http-server)
npx http-server

# Con PHP
php -S localhost:8000
```

### Método 3: Live Server (VSCode)
1. Instalar extensión "Live Server"
2. Clic derecho en `index.html`
3. Seleccionar "Open with Live Server"

## 💻 Uso

### Configuración Inicial

1. **Personalizar información de contacto**:
```javascript
// En script.js, línea ~280 y ~380
const numero = '51910410148'; // Tu número de WhatsApp
```

2. **Actualizar matriz de precios**:
```javascript
// En script.js, línea ~100
const priceMatrix = {
  'aeropuerto': {
    'miraflores': { lite: 25, comfort: 35, xl: 45, van: 60 },
    // Agregar más rutas...
  }
};
```

3. **Cambiar imágenes**:
   - Reemplazar archivos en carpeta `img/`
   - Mantener nombres o actualizar referencias en CSS/JS

## 🎛️ Funcionalidades Principales

### 🧮 Calculadora de Precios
```javascript
// Configuración de rutas y precios
const priceMatrix = {
  origen: {
    destino: { lite: precio, comfort: precio, xl: precio, van: precio }
  }
};
```

### 📱 Integración WhatsApp
- Formulario de reservas se envía automáticamente a WhatsApp
- Mensajes formateados profesionalmente
- Botones de reserva rápida en tarjetas de vehículos

### 🎨 Sistema de Temas
```javascript
// Cambio automático de tema
const savedTheme = localStorage.getItem('theme');
// Respeta preferencia del sistema operativo
```

### 📊 Animaciones y Efectos
- **Intersection Observer**: Para animaciones en viewport
- **Smooth Scroll**: Navegación suave entre secciones
- **Lazy Loading**: Carga optimizada de imágenes
- **Efecto Typing**: Animación de escritura en hero

## ⚙️ Configuración

### 🎯 Variables Principales

```javascript
// Configuraciones en script.js

// WhatsApp
const numero = '51910410148';

// Hero Slider
const slides = [
  { img: 'img/img1.jpeg', text: 'Transportes JASS' },
  // Agregar más slides...
];

// Intervalos
const heroInterval = 5000;      // Cambio de slide hero
const testimonialInterval = 4000; // Cambio de testimonios
```

### 🎨 Personalización de Colores

```css
/* En styles.css */
:root {
  --primary-color: #2563eb;      /* Azul principal */
  --secondary-color: #1e40af;    /* Azul secundario */
  --accent-color: #fbbf24;       /* Amarillo acento */
  --success-color: #10b981;      /* Verde éxito */
  --warning-color: #f59e0b;      /* Naranja advertencia */
  --error-color: #ef4444;        /* Rojo error */
}
```

## 🛠️ Personalización

### Agregar Nuevas Rutas
```javascript
// En priceMatrix, script.js
'nuevo-origen': {
  'nuevo-destino': { lite: 30, comfort: 40, xl: 50, van: 65 }
}
```

### Modificar Vehículos
1. Agregar imagen en carpeta `img/`
2. Actualizar HTML con nueva tarjeta
3. Agregar botón de reserva con `data-vehiculo`

### Cambiar Información de Empresa
- Actualizar textos en `index.html`
- Modificar datos de contacto
- Cambiar logo en carpeta `img/`

## 📈 Optimización

### Performance
- ✅ Lazy loading implementado
- ✅ Imágenes optimizadas
- ✅ CSS y JS minificados (en producción)
- ✅ PWA con cache

### SEO
- ✅ Meta tags completos
- ✅ Estructura semántica HTML5
- ✅ Open Graph para redes sociales
- ✅ Schema.org markup

## 🐛 Solución de Problemas

### Problema: WhatsApp no abre
**Solución**: Verificar formato del número (incluir código país 51)

### Problema: Imágenes no cargan
**Solución**: Verificar rutas de archivos en `img/`

### Problema: Calculadora no funciona
**Solución**: Revisar configuración de `priceMatrix`

### Problema: Tema no persiste
**Solución**: Verificar localStorage del navegador

## 🤝 Contribución

1. Fork del proyecto
2. Crear branch para feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

### Convenciones de Código
- **Indentación**: 2 espacios
- **Nomenclatura**: camelCase para JS, kebab-case para CSS
- **Comentarios**: En español, descriptivos
- **Commits**: Mensajes claros y concisos

## 📝 Changelog

### v1.0.0 (2025)
- ✨ Lanzamiento inicial
- 🎨 Diseño responsivo completo
- 📱 Integración WhatsApp
- 🧮 Calculadora de precios
- 🌙 Modo oscuro/claro
- 📊 Sistema de animaciones

## 📞 Contacto

### Transportes JASS
- **WhatsApp**: +51 910 410 148
- **Email**: info@transportesjass.com
- **Ubicación**: Lima, Perú

### Desarrollador
- **GitHub**: [@tu-usuario](https://github.com/tu-usuario)
- **Email**: developer@email.com

---

## 🙏 Agradecimientos

- Font Awesome por los iconos
- Google Fonts por la tipografía Poppins
- Unsplash por las imágenes de referencia
- Comunidad web por inspiración y mejores prácticas

---


test
// ===== VALIDADOR DE RUTAS CON GEOLOCALIZACIÓN =====

// Coordenadas aproximadas de los distritos de Lima
const districtCoordinates = {
  'aeropuerto': { lat: -12.0219, lng: -77.1143, name: 'Aeropuerto Jorge Chávez' },
  'miraflores': { lat: -12.1203, lng: -77.0285, name: 'Miraflores' },
  'san-isidro': { lat: -12.1033, lng: -77.0378, name: 'San Isidro' },
  'surco': { lat: -12.1343, lng: -77.0122, name: 'Surco' },
  'la-molina': { lat: -12.0789, lng: -76.9431, name: 'La Molina' },
  'barranco': { lat: -12.1405, lng: -77.0220, name: 'Barranco' },
  'callao': { lat: -12.0536, lng: -77.1286, name: 'Callao' },
  'san-borja': { lat: -12.1087, lng: -77.0015, name: 'San Borja' },
  'surco-viejo': { lat: -12.1500, lng: -77.0200, name: 'Surco Viejo' },
  'magdalena': { lat: -12.0954, lng: -77.0749, name: 'Magdalena' },
  'san-miguel': { lat: -12.0776, lng: -77.0881, name: 'San Miguel' },
  'pueblo-libre': { lat: -12.0762, lng: -77.0634, name: 'Pueblo Libre' },
  'jesus-maria': { lat: -12.0742, lng: -77.0492, name: 'Jesús María' },
  'lince': { lat: -12.0838, lng: -77.0374, name: 'Lince' },
  'lima-centro': { lat: -12.0464, lng: -77.0428, name: 'Lima Centro' },
  'breña': { lat: -12.0598, lng: -77.0506, name: 'Breña' },
  'la-victoria': { lat: -12.0678, lng: -77.0317, name: 'La Victoria' },
  'rimac': { lat: -12.0242, lng: -77.0282, name: 'Rímac' },
  'ate': { lat: -12.0472, lng: -76.9178, name: 'Ate' },
  'santa-anita': { lat: -12.0467, lng: -76.9739, name: 'Santa Anita' },
  'el-agustino': { lat: -12.0381, lng: -77.0139, name: 'El Agustino' },
  'sjl': { lat: -11.9939, lng: -77.0081, name: 'San Juan de Lurigancho' },
  'comas': { lat: -11.9389, lng: -77.0586, name: 'Comas' },
  'independencia': { lat: -11.9831, lng: -77.0536, name: 'Independencia' },
  'los-olivos': { lat: -11.9756, lng: -77.0706, name: 'Los Olivos' },
  'san-martin-porres': { lat: -12.0089, lng: -77.0878, name: 'San Martín de Porres' },
  'carabayllo': { lat: -11.8656, lng: -77.0431, name: 'Carabayllo' }
};

// Función para calcular distancia entre dos puntos (fórmula de Haversine)
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Radio de la Tierra en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// Encontrar el distrito más cercano basado en coordenadas
function findNearestDistrict(userLat, userLng) {
  let nearestDistrict = null;
  let minDistance = Infinity;
  
  Object.keys(districtCoordinates).forEach(district => {
    const coords = districtCoordinates[district];
    const distance = calculateDistance(userLat, userLng, coords.lat, coords.lng);
    
    if (distance < minDistance) {
      minDistance = distance;
      nearestDistrict = {
        key: district,
        name: coords.name,
        distance: distance.toFixed(2)
      };
    }
  });
  
  return nearestDistrict;
}

// Inicializar geolocalización
function initGeolocation() {
  // Agregar botón de geolocalización
  addGeolocationButton();
  
  // Verificar si geolocalización está disponible
  if (!navigator.geolocation) {
    console.warn('Geolocalización no disponible en este navegador');
    return;
  }
}

// Agregar botón de geolocalización a la calculadora
function addGeolocationButton() {
  const calculatorDiv = document.querySelector('.calculator');
  if (!calculatorDiv) return;
  
  // Crear contenedor para geolocalización
  const geoContainer = document.createElement('div');
  geoContainer.className = 'geo-container';
  geoContainer.innerHTML = `
    <button type="button" id="geo-btn" class="btn btn-geo">
      📍 Detectar mi ubicación
    </button>
    <div id="geo-result" class="geo-result"></div>
  `;
  
  // Insertar antes del primer calc-row
  const firstRow = calculatorDiv.querySelector('.calc-row');
  calculatorDiv.insertBefore(geoContainer, firstRow);
  
  // Agregar event listener
  document.getElementById('geo-btn').addEventListener('click', getCurrentLocation);
}

// Obtener ubicación actual
function getCurrentLocation() {
  const geoBtn = document.getElementById('geo-btn');
  const geoResult = document.getElementById('geo-result');
  
  // Cambiar estado del botón
  geoBtn.innerHTML = '⏳ Detectando...';
  geoBtn.disabled = true;
  
  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 300000 // 5 minutos
  };
  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const nearest = findNearestDistrict(latitude, longitude);
      
      if (nearest) {
        // Preseleccionar en el origen
        const origenSelect = document.getElementById('calc-origen');
        origenSelect.value = nearest.key;
        
        // Mostrar resultado
        geoResult.innerHTML = `
          <div class="geo-success">
            ✅ Ubicación detectada: <strong>${nearest.name}</strong>
            <span class="geo-distance">(${nearest.distance} km de distancia)</span>
          </div>
        `;
        geoResult.classList.add('show');
        
        // Toast de éxito
        if (typeof showToast === 'function') {
          showToast(`Ubicación detectada: ${nearest.name}`, 'success');
        }
        
        // Trigger change event para actualizar calculadora si hay lógica adicional
        origenSelect.dispatchEvent(new Event('change'));
      }
      
      // Restaurar botón
      geoBtn.innerHTML = '📍 Detectar nuevamente';
      geoBtn.disabled = false;
    },
    (error) => {
      let errorMessage = '';
      
      switch(error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = 'Permiso de ubicación denegado. Por favor habilítalo en tu navegador.';
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = 'Ubicación no disponible. Intenta más tarde.';
          break;
        case error.TIMEOUT:
          errorMessage = 'Tiempo de espera agotado. Verifica tu conexión.';
          break;
        default:
          errorMessage = 'Error desconocido al obtener la ubicación.';
      }
      
      geoResult.innerHTML = `
        <div class="geo-error">
          ❌ ${errorMessage}
          <div class="geo-manual">Selecciona manualmente tu ubicación en el menú.</div>
        </div>
      `;
      geoResult.classList.add('show');
      
      if (typeof showToast === 'function') {
        showToast(errorMessage, 'error');
      }
      
      // Restaurar botón
      geoBtn.innerHTML = '📍 Intentar nuevamente';
      geoBtn.disabled = false;
    },
    options
  );
}

// Función para sugerir rutas populares basadas en la ubicación
function suggestPopularRoutes(currentDistrict) {
  const popularRoutes = {
    'aeropuerto': ['miraflores', 'san-isidro', 'surco'],
    'miraflores': ['aeropuerto', 'san-isidro', 'surco'],
    'san-isidro': ['aeropuerto', 'miraflores', 'la-molina'],
    'surco': ['aeropuerto', 'miraflores', 'la-molina'],
    'la-molina': ['aeropuerto', 'san-isidro', 'surco']
  };
  
  return popularRoutes[currentDistrict] || ['aeropuerto'];
}

// Validar que la ruta seleccionada sea viable
function validateRoute(origen, destino) {
  if (origen === destino) {
    return {
      valid: false,
      message: 'El origen y destino no pueden ser iguales'
    };
  }
  
  // Verificar si existe precio en la matriz
  const priceExists = (priceMatrix[origen] && priceMatrix[origen][destino]) ||
                     (priceMatrix[destino] && priceMatrix[destino][origen]);
  
  if (!priceExists) {
    return {
      valid: false,
      message: 'Ruta no disponible en nuestro sistema de precios regulares. Contáctanos para cotización personalizada.'
    };
  }
  
  return {
    valid: true,
    message: 'Ruta válida'
  };
}

// Función para mostrar información adicional de la ruta
function showRouteInfo(origen, destino) {
  if (!districtCoordinates[origen] || !districtCoordinates[destino]) return;
  
  const origenCoords = districtCoordinates[origen];
  const destinoCoords = districtCoordinates[destino];
  
  const distance = calculateDistance(
    origenCoords.lat, origenCoords.lng,
    destinoCoords.lat, destinoCoords.lng
  );
  
  const estimatedTime = Math.round(distance * 2.5); // Estimación: 2.5 min por km en Lima
  
  return {
    distance: distance.toFixed(1),
    estimatedTime: estimatedTime,
    route: `${origenCoords.name} → ${destinoCoords.name}`
  };
}

// CSS adicional para los elementos de geolocalización
const geoStyles = `
<style>
.geo-container {
  margin-bottom: 20px;
  text-align: center;
}

.btn-geo {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  font-size: 1rem;
}

.btn-geo:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

.btn-geo:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.geo-result {
  margin-top: 15px;
  padding: 12px;
  border-radius: 10px;
  display: none;
  animation: slideDown 0.3s ease;
}

.geo-result.show {
  display: block;
}

.geo-success {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 12px;
  border-radius: 8px;
  font-weight: 500;
}

.geo-distance {
  display: block;
  font-size: 0.9rem;
  margin-top: 4px;
  opacity: 0.9;
}

.geo-error {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  padding: 12px;
  border-radius: 8px;
}

.geo-manual {
  font-size: 0.9rem;
  margin-top: 8px;
  opacity: 0.9;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .btn-geo {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
`;

// Inyectar CSS si no existe
function injectGeoStyles() {
  if (!document.getElementById('geo-styles')) {
    const styleElement = document.createElement('style');
    styleElement.id = 'geo-styles';
    styleElement.innerHTML = geoStyles.replace('<style>', '').replace('</style>', '');
    document.head.appendChild(styleElement);
  }
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  injectGeoStyles();
  initGeolocation();
});

// También inicializar si el DOM ya está cargado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    injectGeoStyles();
    initGeolocation();
  });
} else {
  injectGeoStyles();
  initGeolocation();
}