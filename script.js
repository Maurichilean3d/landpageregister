document.getElementById('repoForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const repoName = document.getElementById('repoName').value;

    // Almacena el correo electrónico (simulación, normalmente iría a un backend)
    console.log('Correo registrado:', email);

    // Crea un repositorio en GitHub (esto es solo una simulación)
    try {
        const response = await fetch('https://api.github.com/user/repos', {
            method: 'POST',
            headers: {
                'Authorization': 'token TU_TOKEN_GITHUB',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: repoName,
                private: false
            })
        });

        if (response.ok) {
            document.getElementById('statusMessage').textContent = '¡Repositorio creado exitosamente!';
        } else {
            document.getElementById('statusMessage').textContent = 'Error al crear el repositorio.';
        }
    } catch (error) {
        document.getElementById('statusMessage').textContent = 'Error en la solicitud.';
    }
});
