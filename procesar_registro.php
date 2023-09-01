<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $contrasena = $_POST["contrasena"];
    
    // Validar y procesar los datos (simulación en este caso)
    if (!empty($nombre) && !empty($email) && !empty($contrasena)) {
        // Simulación: aquí deberías hacer un registro en una base de datos
        // y aplicar hashing a la contraseña antes de almacenarla
        
        // Mensaje de éxito
        echo "Registro exitoso. ¡Bienvenido, $nombre!";
    } else {
        // Mensaje de error si falta algún dato
        echo "Por favor, complete todos los campos.";
    }
} else {
    // Redirigir si se accede directamente al archivo
    header("Location: registro.html");
    exit();
}
?>

