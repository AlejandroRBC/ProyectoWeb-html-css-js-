function enviar() {
    var nombre = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var pregunta = document.getElementById("pregunta").value.trim();
    var mensaje = "";

    if (nombre === "") {
        mensaje += "Por favor, introduce tu nombre.\n";
    }

    if (correo === "") {
        mensaje += "Por favor, introduce tu correo.\n";
    } else {
       
        var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoRegex.test(correo)) {
            mensaje += "Por favor, introduce un correo electrónico válido.\n";
        }
    }

    if (pregunta === "") {
        mensaje += "Por favor, introduce tu pregunta.\n";
    }

    if (mensaje === "") {
        alert("Formulario enviado con éxito.");
        
    } else {
        alert("Por favor, corrige los siguientes errores:\n" + mensaje);
    }
}

    