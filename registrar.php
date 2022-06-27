<?php
include 'conexion.php';

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$numero = $_POST['numero'];

$insertar = "INSERT INTO usuarios (Nombres, Apellidos, Email, Telefono) VALUES ('$nombre', '$apellido', '$email', '$numero')";

$resultado = mysqli_query($conexion, $insertar);

if ($resultado){
    //echo "Conectado";
    header("Location: confirmacion.html");
}
else{
    echo "no funciona";
}
mysqli_close($conexion);
?>