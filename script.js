// Validar el formulario de contacto
document.querySelector('form').addEventListener('submit', function(event) {
    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('message').value;
    
    if (nombre === '' || email === '' || mensaje === '') {
        event.preventDefault(); // Evita que el formulario se envíe
        alert('Por favor, completa todos los campos antes de enviar el formulario.');
    } else {
        alert('Formulario enviado correctamente.');
    }
});

// Validar el formulario de energía renovable
document.getElementById('form-energia').addEventListener('submit', function(event) {
    let tipoConsumo = document.getElementById('tipo-consumo').value;
    let consumoEstimado = document.getElementById('consumo-estimado').value;

    if (tipoConsumo === '' || consumoEstimado === '') {
        event.preventDefault();  // Evita el envío del formulario si faltan datos
        alert('Por favor, completa todas las preguntas antes de enviar.');
    } else {
        alert('Gracias por tu interés en nuestras soluciones energéticas.');
    }
});
// Mostrar/Ocultar el chatbot
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('hidden');
}

// Manejar la entrada del chat
function handleChat(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();

        if (message) {
            addMessage('Usuario', message);
            input.value = '';

            // Simular respuesta del chatbot
            setTimeout(() => {
                const response = getChatbotResponse(message);
                addMessage('EnergyTelco', response);
            }, 500);
        }
    }
}

// Añadir mensaje al chat
function addMessage(sender, text) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;  // Desplazar hacia abajo
}

// Simular respuestas del chatbot
function getChatbotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('energía solar')) {
        return 'La energía solar es una excelente opción. ¿Te gustaría saber más sobre los paneles híbridos?';
    } else if (lowerCaseMessage.includes('comparador')) {
        return 'Nuestro comparador te ayudará a encontrar la mejor tarifa. ¿Te gustaría empezar?';
    } else if (lowerCaseMessage.includes('renovables')) {
        return 'Trabajamos con múltiples tecnologías renovables como solar, eólica, biomasa, y más. ¿Tienes alguna preferencia?';
    } else {
        return 'Lo siento, no entiendo tu pregunta. ¿Podrías especificar un poco más?';
    }
}
