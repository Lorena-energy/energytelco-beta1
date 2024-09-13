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
