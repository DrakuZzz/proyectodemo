document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const Email = document.getElementById('Email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;

    if (password === password2) {
    try {
        const response = await fetch('../registro/insercion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Email, password })
        });

        const data = await response.json();
        if (data.success) {
            alert(data.message); // Muestra el mensaje de "Bienvenido"
        } else {
            alert(data.message); // Muestra el mensaje de "Credenciales incorrectas"
            if (data.redirect) {
                window.location.href = data.redirect; // Recrga la pagina
            }
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al procesar la solicitud');
    }
    }
    else {
        alert('Las contraseñas no coinciden');
    }
});