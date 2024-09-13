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
