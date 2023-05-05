<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $numero = $_POST["numero"];
    $mensaje = $_POST["mensaje"];

}

$destinatario = "contacto.tobiasbenitez@gmail.com";
$asunto = "Nuevo mensaje de mi pagina web";
$cuerpo = "Nombre: $nombre\nEmail: $email\nNumero: $numero\nMensaje:\n$mensaje";


if (@mail($destinatario, $asunto, $cuerpo)) {
    echo "gracias por contactarnos, $nombre. Tu mensaje ha sido enviado.";
}

else {
    echo "Lo siento, hubo un problema al enviar tu mensaje";
}

?>