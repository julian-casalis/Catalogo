document.addEventListener("DOMContentLoaded", function() {
    const pass = document.getElementById("password");
    const icon = document.querySelector(".bi");
    const form = document.getElementById("loginForm");

    if (pass && icon && form) { 
    icon.addEventListener("click", e => {
        if (pass.type === "password") {
            pass.type = "text";
            icon.classList.remove('bi-eye');
            icon.classList.add('bi-eye-slash');
        } else {
            pass.type = "password";
            icon.classList.add('bi-eye');
            icon.classList.remove('bi-eye-slash');
        }
    });
    //lista de contraseñas
    const validPasswords = ["12345", "admin123", "secreto123"];

    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Evitar el envío del formulario

        const enteredPassword = pass.value;  // Obtener el valor ingresado en el campo de contraseña

        // Comprobar si la contraseña ingresada está en la lista de contraseñas válidas
        if (validPasswords.includes(enteredPassword)) {
            window.location.href = "pagina.html";  // Redirigir si es correcta
        } else {
            alert("Contraseña incorrecta. Intenta de nuevo.");
        }
    });
} else {
    console.error("No se encontraron los elementos del formulario.");
}
});