// script.js
document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var email = document.getElementById('email').value;

    fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => {
        document.getElementById('response').innerText = '¡Gracias por suscribirte!';
    })
    .catch(error => {
        document.getElementById('response').innerText = 'Hubo un error. Inténtalo de nuevo.';
    });
});
