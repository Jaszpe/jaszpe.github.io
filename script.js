// Configuración
const WINNING_NUMBER = 250;
const ADMIN_CODE = "ADMINYORCH";

// Elementos del DOM
const counterElement = document.getElementById('counter');
const messageElement = document.getElementById('message');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const winnerSection = document.getElementById('winnerSection');
const counterSection = document.querySelector('.counter-section');
const adminControls = document.getElementById('adminControls');

// Crear copos de nieve
function createSnowflakes() {
    const container = document.querySelector('.snowflakes');
    
    for (let i = 0; i < 30; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        // Tamaño aleatorio
        const size = Math.random() * 5 + 3;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        
        // Posición aleatoria
        snowflake.style.left = `${Math.random() * 100}vw`;
        
        // Animación aleatoria
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * 5;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${delay}s`;
        
        container.appendChild(snowflake);
    }
}

// Generar ID único para el visitante
function generateVisitorId() {
    // Intentar obtener ID existente
    let visitorId = localStorage.getItem('visitorId');
    
    if (!visitorId) {
        // Crear nuevo ID único
        visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('visitorId', visitorId);
    }
    
    return visitorId;
}

// Obtener o asignar número al visitante
function getOrCreateVisitorNumber() {
    const visitorId = generateVisitorId();
    const storageKey = 'navidadTransporteData';
    
    // Cargar datos existentes
    let data = JSON.parse(localStorage.getItem(storageKey)) || {
        nextNumber: 1,
        visitors: {}
    };
    
    // Verificar si este visitante ya tiene número
    if (!data.visitors[visitorId]) {
        // Asignar nuevo número
        data.visitors[visitorId] = {
            number: data.nextNumber,
            date: new Date().toISOString()
        };
        
        // Incrementar siguiente número
        data.nextNumber++;
        
        // Guardar datos
        localStorage.setItem(storageKey, JSON.stringify(data));
        
        // Mostrar notificación de nuevo número
        showMessage(`¡Nuevo pasajero número ${data.visitors[visitorId].number}!`);
    }
    
    return data.visitors[visitorId].number;
}

// Actualizar la visualización
function updateDisplay() {
    const visitorNumber = getOrCreateVisitorNumber();
    
    // Actualizar número
    counterElement.textContent = visitorNumber;
    
    // Actualizar mensaje
    if (visitorNumber === 1) {
        messageElement.textContent = '¡Eres el primer pasajero!';
    } else if (visitorNumber === WINNING_NUMBER) {
        showWinner();
    } else if (visitorNumber === 100) {
        messageElement.textContent = '¡Mitad del camino!';
    } else if (visitorNumber % 10 === 0) {
        messageElement.textContent = '¡Múltiplo de 10!';
    } else {
        messageElement.textContent = '¡Bienvenido a bordo!';
    }
    
    // Actualizar barra de progreso
    updateProgressBar(visitorNumber);
}

// Actualizar barra de progreso
function updateProgressBar(number) {
    const percentage = Math.min((number / WINNING_NUMBER) * 100, 100);
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${number}/${WINNING_NUMBER} (${percentage.toFixed(1)}%)`;
}

// Mostrar mensaje
function showMessage(text) {
    messageElement.textContent = text;
    messageElement.style.color = '#ffd166';
    
    // Efecto de animación
    messageElement.style.animation = 'none';
    setTimeout(() => {
        messageElement.style.animation = 'pulse 0.5s ease 2';
    }, 10);
}

// Mostrar ganador
function showWinner() {
    counterSection.style.display = 'none';
    winnerSection.style.display = 'block';
    
    // Efectos especiales
    createConfetti();
    playWinSound();
}

// Crear confeti
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffd166', '#ff9a00'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
            top: -20px;
            left: ${Math.random() * 100}vw;
            z-index: 9999;
            animation: confettiFall ${Math.random() * 3 + 2}s linear forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
    
    // Agregar estilos de animación
    if (!document.getElementById('confettiStyles')) {
        const style = document.createElement('style');
        style.id = 'confettiStyles';
        style.textContent = `
            @keyframes confettiFall {
                to {
                    transform: translateY(100vh) rotate(${Math.random() * 360}deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Sonido de victoria
function playWinSound() {
    try {
        // Usar el API de Audio del navegador
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1);
    } catch (e) {
        console.log('Audio no disponible');
    }
}

// Reiniciar contador (para el botón)
function resetCounter() {
    const visitorNumber = getOrCreateVisitorNumber();
    
    if (visitorNumber === WINNING_NUMBER) {
        // Solo ocultar la sección de ganador
        winnerSection.style.display = 'none';
        counterSection.style.display = 'block';
        showMessage('¡Continúa viajando con nosotros!');
    }
}

// Funciones de administrador
function showAdmin() {
    const adminPanel = document.getElementById('adminPanel');
    adminPanel.style.display = adminPanel.style.display === 'none' ? 'block' : 'none';
}

function checkAdmin() {
    const inputCode = document.getElementById('adminCode').value;
    
    if (inputCode === ADMIN_CODE) {
        adminControls.style.display = 'block';
        showMessage('✅ Acceso administrativo concedido');
    } else {
        showMessage('❌ Código incorrecto');
    }
}

function resetAll() {
    if (confirm('¿Reiniciar TODOS los datos del contador?\n\nEsto eliminará todos los números de visitantes.')) {
        localStorage.removeItem('navidadTransporteData');
        localStorage.removeItem('visitorId');
        
        // Recargar página
        location.reload();
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    // Crear efectos visuales
    createSnowflakes();
    
    // Inicializar contador
    updateDisplay();
    
    // Mostrar mensaje de bienvenida
    const visitorNumber = getOrCreateVisitorNumber();
    if (visitorNumber === 1) {
        showMessage('¡Eres el primer pasajero de la temporada!');
    }
    
    console.log('🎄 Contador navideño iniciado');
    console.log('🔑 Código admin:', ADMIN_CODE);
});

// Hacer funciones globales
window.resetCounter = resetCounter;
window.showAdmin = showAdmin;
window.checkAdmin = checkAdmin;
window.resetAll = resetAll;

// Atajo de teclado para pruebas
document.addEventListener('keypress', function(e) {
    // Presiona 't' para simular nuevo visitante
    if (e.key === 't' || e.key === 'T') {
        // Forzar nuevo visitante
        localStorage.removeItem('visitorId');
        const storageKey = 'navidadTransporteData';
        let data = JSON.parse(localStorage.getItem(storageKey)) || {
            nextNumber: 1,
            visitors: {}
        };
        
        // Incrementar manualmente
        const newVisitorId = 'test_' + Date.now();
        data.visitors[newVisitorId] = {
            number: data.nextNumber,
            date: new Date().toISOString()
        };
        data.nextNumber++;
        
        localStorage.setItem(storageKey, JSON.stringify(data));
        updateDisplay();
        showMessage('Visitante de prueba agregado!');
    }
});