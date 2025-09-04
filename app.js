//   ===== HELPERS =====  
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

// ===== PRELOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    $('#preloader').classList.add('hidden');
  }, 1000);
});

// ===== AÑO FOOTER =====
$('#year').textContent = new Date().getFullYear();

// ===== MENÚ RESPONSIVE =====
const menuBtn = $('#menu-toggle');
const mainMenu = $('#main-menu');
menuBtn.addEventListener('click', () => mainMenu.classList.toggle('open'));

// Cerrar menú al hacer clic en un enlace
$$('.menu a').forEach(link => {
  link.addEventListener('click', () => mainMenu.classList.remove('open'));
});

// ===== TEMA (CLARO/OSCURO) =====
const root = document.documentElement;
const themeBtn = $('#theme-toggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  root.classList.add('dark'); 
  themeBtn.textContent = '☀️';
} else {
  root.classList.remove('dark'); 
  themeBtn.textContent = '🌙';
}

themeBtn.addEventListener('click', () => {
  root.classList.toggle('dark');
  const isDark = root.classList.contains('dark');
  themeBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ===== EFECTO DE ESCRITURA TRANSPORTES JASS =====
function initBrandTypingEffect() {
  const brandText = document.querySelector('.brand__text');
  if (!brandText) return;

  const text = 'Transportes JASS';
  const typingSpeed = 150;
  
  brandText.innerHTML = '';
  
  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  cursor.innerHTML = '&nbsp;';
  brandText.appendChild(cursor);
  
  let charIndex = 0;
  
  function typeNextChar() {
    if (charIndex < text.length) {
      const char = text[charIndex];
      const span = document.createElement('span');
      span.className = 'char-animate';
      
      if (charIndex >= text.indexOf('JASS') && charIndex < text.indexOf('JASS') + 4) {
        const boldSpan = document.createElement('b');
        boldSpan.textContent = char;
        span.appendChild(boldSpan);
      } else {
        span.textContent = char;
      }
      
      brandText.insertBefore(span, cursor);
      charIndex++;
      setTimeout(typeNextChar, typingSpeed);
    } else {
      setTimeout(() => {
        cursor.style.display = 'none';
      }, 1500);
    }
  }
  
  setTimeout(typeNextChar, 800);
}

// ===== HERO DINÁMICO CON CONTROLES =====
const hero = $('.hero');
const heroTitle = $('.hero__content h1');
const slides = [
  { img: 'img/img1.jpeg', text: 'Transportes JASS' },
  { img: 'img/img2.jpg',  text: 'Viaja cómodo y seguro' },
  { img: 'img/img3.jpg',  text: 'Traslados 24/7 al aeropuerto' },
];
let idx = 0;
let autoSlideInterval;

// Elementos de control
const prevBtn = $('#hero-prev');
const nextBtn = $('#hero-next');
const dots = $$('.hero__dot');

function applySlide(i) {
  hero.classList.add('fade-out');
  setTimeout(() => {
    hero.style.backgroundImage = `url('${slides[i].img}')`;
    heroTitle.textContent = slides[i].text;
    hero.classList.remove('fade-out');
    
    // Actualizar indicadores
    dots.forEach(dot => dot.classList.remove('active'));
    dots[i].classList.add('active');
  }, 350);
}

function nextSlide() {
  idx = (idx + 1) % slides.length;
  applySlide(idx);
}

function prevSlide() {
  idx = (idx - 1 + slides.length) % slides.length;
  applySlide(idx);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Event listeners
prevBtn.addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

nextBtn.addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

// Navegación por dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    stopAutoSlide();
    idx = index;
    applySlide(idx);
    startAutoSlide();
  });
});

// Inicializar
applySlide(idx);
startAutoSlide();

// Pausar auto-slide al hacer hover
hero.addEventListener('mouseenter', stopAutoSlide);
hero.addEventListener('mouseleave', startAutoSlide);


// ===== ARREGLO CALCULADORA DE PRECIOS ===== 
const priceMatrix = {
  'aeropuerto': {
    'miraflores': { lite: 60, comfort: 70, xl: 70, van: 120 },
    'san-isidro': { lite: 60, comfort: 70, xl: 70, van: 100 },
    'surco': { lite: 80, comfort: 90, xl: 90, van: 140 },
    'la-molina': { lite: 90, comfort: 100, xl: 110, van: 130 },
    'barranco': { lite: 70, comfort: 80, xl: 80, van: 130 },
    'callao': { lite: 50, comfort: 50, xl: 50, van: 80 },
    'san-borja': { lite: 70, comfort: 80, xl: 80, van: 120 },
    'surco-viejo': { lite: 70, comfort: 80, xl: 80, van: 140 },
    'magdalena': { lite: 60, comfort: 70, xl: 70, van: 100 },
    'san-miguel': { lite: 60, comfort: 70, xl: 70, van: 100 },
    'pueblo-libre': { lite: 60, comfort: 70, xl: 70, van: 100 },
    'jesus-maria': { lite: 50, comfort: 60, xl: 60, van: 90 },
    'lince': { lite: 50, comfort: 60, xl: 60, van: 80 },
    'lima-centro': { lite: 60, comfort: 70, xl: 70, van: 100 },
    'breña': { lite: 70, comfort: 80, xl: 80, van: 120 },
    'la-victoria': { lite: 60, comfort: 70, xl: 70, van: 100 },
    'rimac': { lite: 60, comfort: 70, xl: 70, van: 100 },
    'ate': { lite: 80, comfort: 90, xl: 90, van: 120 },
    'santa-anita': { lite: 100, comfort: 120, xl: 120, van: 150 },
    'el-agustino': { lite: 120, comfort: 140, xl: 140, van: 150 },
    'sjl': { lite: 60, comfort: 70, xl: 70, van: 100 },
    'comas': { lite: 60, comfort: 70, xl: 70, van: 100 },
    'independencia': { lite: 60, comfort: 70, xl: 70, van: 100 },
    'los-olivos': { lite: 70, comfort: 80, xl: 80, van: 100 },
    'san-martin-porres': { lite: 80, comfort: 90, xl: 90, van: 120 },
    'carabayllo': { lite: 80, comfort: 90, xl: 90, van: 120 }
  },
  'miraflores': {
    'aeropuerto': { lite: 60, comfort: 70, xl: 70, van: 120 },
    'san-isidro': { lite: 50, comfort: 60, xl: 60, van: 120 },
    'surco': { lite: 70, comfort: 70, xl: 80, van: 140 },
    'la-molina': { lite: 80, comfort: 80, xl: 90, van: 130 },
    'barranco': { lite: 60, comfort: 60, xl: 60, van: 120 },
    'callao': { lite: 50, comfort: 50, xl: 50, van: 80 }
  },
  'san-isidro': {
    'aeropuerto': { lite: 60, comfort: 70, xl: 70, van: 100 },
    'miraflores': { lite: 50, comfort: 60, xl: 60, van: 120 },
    'surco': { lite: 70, comfort: 70, xl: 80, van: 140 },
    'la-molina': { lite: 80, comfort: 80, xl: 90, van: 130 },
    'barranco': { lite: 60, comfort: 60, xl: 60, van: 120 },
    'callao': { lite: 50, comfort: 50, xl: 50, van: 80 }
  },
  'surco': {
    'aeropuerto': { lite: 80, comfort: 90, xl: 90, van: 140 },
    'miraflores': { lite: 70, comfort: 70, xl: 80, van: 140 },
    'san-isidro': { lite: 70, comfort: 70, xl: 80, van: 140 },
    'la-molina': { lite: 80, comfort: 80, xl: 90, van: 130 },
    'barranco': { lite: 70, comfort: 70, xl: 80, van: 140 }
  },
  'la-molina': {
    'aeropuerto': { lite: 90, comfort: 100, xl: 110, van: 130 },
    'miraflores': { lite: 80, comfort: 80, xl: 90, van: 130 },
    'san-isidro': { lite: 80, comfort: 80, xl: 90, van: 130 },
    'surco': { lite: 80, comfort: 80, xl: 90, van: 130 }
  },
  'barranco': {
    'aeropuerto': { lite: 70, comfort: 80, xl: 80, van: 130 },
    'miraflores': { lite: 60, comfort: 60, xl: 60, van: 120 },
    'san-isidro': { lite: 60, comfort: 60, xl: 60, van: 120 },
    'surco': { lite: 70, comfort: 70, xl: 80, van: 140 }
  },
  'callao': {
    'aeropuerto': { lite: 50, comfort: 50, xl: 50, van: 80 },
    'miraflores': { lite: 50, comfort: 50, xl: 50, van: 80 },
    'san-isidro': { lite: 50, comfort: 50, xl: 50, van: 80 }
  }
};

$('#calc-btn').addEventListener('click', () => {
  const origen = $('#calc-origen').value;
  const destino = $('#calc-destino').value;
  const vehiculo = $('#calc-vehiculo').value;
  const resultDiv = $('#calc-result');

  if (!origen || !destino || !vehiculo) {
    showToast('Por favor completa todos los campos', 'warning');
    return;
  }

  if (origen === destino) {
    showToast('El origen y destino no pueden ser iguales', 'error');
    return;
  }

  let price = null;
  
  // PRECIO EN MATRIZ
  if (priceMatrix[origen] && priceMatrix[origen][destino]) {
    price = priceMatrix[origen][destino][vehiculo];
  } else if (priceMatrix[destino] && priceMatrix[destino][origen]) {
    price = priceMatrix[destino][origen][vehiculo];
  }

  if (price) {
    resultDiv.innerHTML = `
      <div>💰 <strong>Precio estimado: S/ ${price}</strong></div>
      <div style="font-size: 0.9rem; margin-top: 8px; opacity: 0.8;">
        *Precio referencial. Peajes no incluidos.
      </div>
    `;
    resultDiv.classList.add('show');
  } else {
    resultDiv.innerHTML = `
      <div>📞 <strong>Consulta disponibilidad</strong></div>
      <div style="font-size: 0.9rem; margin-top: 8px;">
        Contáctanos para cotizar esta ruta
      </div>
    `;
    resultDiv.classList.add('show');
  }
});

// ===== TESTIMONIOS CARRUSEL =====
let currentTestimonial = 0;
const testimonials = $$('.testimonial');
const testimonialBtns = $$('.testimonial-btn');

function showTestimonial(index) {
  // Ocultar todos
  testimonials.forEach(t => t.classList.remove('active'));
  testimonialBtns.forEach(btn => btn.classList.remove('active'));
  
  // Mostrar el seleccionado
  testimonials[index].classList.add('active');
  testimonialBtns[index].classList.add('active');
  
  currentTestimonial = index;
}

// Navegación manual
testimonialBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => showTestimonial(index));
});

// Auto-rotación
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 4000);

// ===== FAQ ACORDEÓN =====
$$('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Cerrar todos los FAQs
    $$('.faq-item').forEach(item => item.classList.remove('active'));
    
    // Abrir el clickeado si no estaba activo
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});

// ===== BOTONES "RESERVAR POR WHATSAPP" EN TARJETAS =====
$$('.reservar-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const vehiculo = btn.getAttribute('data-vehiculo');
    const mensaje = `Hola, quiero reservar un vehículo tipo ${vehiculo}.`;
    const numero = '51910410148';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    
    showToast(`Redirigiendo a WhatsApp para reservar ${vehiculo}...`, 'success');
  });
});

// ===== CONTADORES (ESTADÍSTICAS) =====
const counters = $$('#estadisticas .stat h3');
let counted = false;

function animateCounters(){
  if (counted) return;
  const rect = $('#estadisticas').getBoundingClientRect();
  if (rect.top < window.innerHeight - 80){
    counters.forEach(el => {
      const target = +el.getAttribute('est-dinamico');
      let n = 0;
      const step = Math.max(1, Math.floor(target / 60));
      const t = setInterval(() => {
        n += step;
        if (n >= target){ n = target; clearInterval(t); }
        el.textContent = n.toLocaleString('es-PE');
      }, 18);
    });
    counted = true;
  }
}

window.addEventListener('scroll', animateCounters);
window.addEventListener('load', animateCounters);

// ===== FORMULARIO → WHATSAPP MEJORADO =====
$('#form-reserva').addEventListener('submit', e => {
  e.preventDefault();

  const nombre    = $('#nombre').value.trim();
  const fecha     = $('#fecha').value;
  const hora      = $('#hora').value;
  const origen    = $('#origen').value.trim();
  const destino   = $('#destino').value.trim();
  const telefono  = $('#telefono').value.trim();
  const vehSel    = document.querySelector('input[name="vehiculo"]:checked');
  const comentarios = $('#comentarios').value.trim();

  // Validación visual
  const inputs = [
    { el: $('#nombre'), val: nombre },
    { el: $('#fecha'), val: fecha },
    { el: $('#hora'), val: hora },
    { el: $('#origen'), val: origen },
    { el: $('#destino'), val: destino },
    { el: $('#telefono'), val: telefono }
  ];

  let isValid = true;

  inputs.forEach(input => {
    if (!input.val) {
      input.el.classList.add('error');
      input.el.classList.remove('success');
      isValid = false;
    } else {
      input.el.classList.add('success');
      input.el.classList.remove('error');
    }
  });

  if (!vehSel) {
    showToast('⚠️ Por favor selecciona un tipo de vehículo', 'warning');
    isValid = false;
  }

  if (!isValid) {
    showToast('⚠️ Por favor completa todos los campos obligatorios', 'error');
    return;
  }

  // Validar fecha (no puede ser en el pasado)
  const selectedDate = new Date(fecha + 'T' + hora);
  const now = new Date();
  
  if (selectedDate < now) {
    showToast('⚠️ La fecha y hora no pueden ser en el pasado', 'error');
    $('#fecha').classList.add('error');
    $('#hora').classList.add('error');
    return;
  }

  // Crear mensaje para WhatsApp
  let mensaje = 
    `🚖 *RESERVA TRANSPORTES JASS*%0A%0A` +
    `👤 *Cliente:* ${nombre}%0A` +
    `📞 *Teléfono:* ${telefono}%0A%0A` +
    `📅 *Fecha:* ${fecha}%0A` +
    `🕐 *Hora:* ${hora}%0A%0A` +
    `📍 *Origen:* ${origen}%0A` +
    `🎯 *Destino:* ${destino}%0A%0A` +
    `🚗 *Vehículo:* ${vehSel.value}`;

  if (comentarios) {
    mensaje += `%0A%0A💬 *Comentarios:* ${comentarios}`;
  }

  mensaje += `%0A%0A✨ _Reserva realizada desde la web_`;

  const numero = '51910410148';
  const url = `https://wa.me/${numero}?text=${mensaje}`;
  
  window.open(url, '_blank');
  showToast('✅ Reserva enviada por WhatsApp correctamente', 'success');
  
  // Limpiar formulario
  $('#form-reserva').reset();
  inputs.forEach(input => {
    input.el.classList.remove('success', 'error');
  });
});

// ===== BOTÓN VOLVER ARRIBA =====
const backToTopBtn = $('#back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'success', duration = 4000) {
  const toastContainer = $('#toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  
  toastContainer.appendChild(toast);
  
  // Auto-remove
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => {
      if (toastContainer.contains(toast)) {
        toastContainer.removeChild(toast);
      }
    }, 300);
  }, duration);
}

// ===== NAVEGACIÓN ACTIVA =====
const sections = $$('section[id]');
const navLinks = $$('.menu a');

function updateActiveNav() {
  const scrollPos = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Actualizar navegación en scroll
window.addEventListener('scroll', updateActiveNav);

// ===== ANIMACIONES DE ENTRADA =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observar elementos con animación
$$('.card, .service-card, .stat, .testimonial, .faq-item').forEach(el => {
  observer.observe(el);
});

// ===== SMOOTH SCROLL PARA ENLACES INTERNOS =====
$$('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar efecto de escritura si existe el elemento
  initBrandTypingEffect();
  
  // Actualizar navegación activa al cargar
  updateActiveNav();
  
  // Mostrar primer testimonial
  if (testimonials.length > 0) {
    showTestimonial(0);
  }
});

// ===== LAZY LOADING DE IMÁGENES =====
const lazyImages = $$('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      imageObserver.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ===== MANEJO DE ERRORES =====
window.addEventListener('error', (e) => {
  console.warn('Error capturado:', e.error);
  // Evitar que errores menores rompan la funcionalidad
});

// ===== UTILIDADES ADICIONALES =====
// Validador de teléfono peruano
function validatePeruvianPhone(phone) {
  const peruPhoneRegex = /^(\+51|51)?9\d{8}$/;
  return peruPhoneRegex.test(phone.replace(/\s/g, ''));
}

// Formatear fecha para mostrar
function formatDate(dateString) {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    weekday: 'long'
  };
  return new Date(dateString).toLocaleDateString('es-PE', options);
}

// Detectar si es dispositivo móvil
function isMobile() {
  return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Ajustar comportamiento según dispositivo
if (isMobile()) {
  document.body.classList.add('mobile-device');
}

