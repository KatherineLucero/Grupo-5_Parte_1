document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    //- Capturar los campos de usuario y contraseña
    const usuario = document.getElementById('usuario');
    const password = document.getElementById('password');
    const errorUsuario = document.getElementById('errorUsuario');
    const errorPassword = document.getElementById('errorPassword');

    let valid = true;

    //- Verificar si el campo de usuario está vacío
    if (usuario.value.trim() === '') {
        errorUsuario.style.display = 'block';
        valid = false;
    } else {
        errorUsuario.style.display = 'none';
    }

    //- Verificar si el campo de contraseña está vacío
    if (password.value.trim() === '') {
        errorPassword.style.display = 'block';
        valid = false;
    } else {
        errorPassword.style.display = 'none';
    }

    // Si hay errores, ocultarlos después de 2 segundos
    if (!valid) {
        setTimeout(() => {
            errorPassword.style.display = 'none';
        }, 2000);
    }

    // Si el formulario es válido, enviar el formulario o realizar otra acción
    if (valid) {
        // Aquí podrías enviar el formulario o realizar la acción deseada
        console.log("Formulario enviado con éxito");
    }
});
