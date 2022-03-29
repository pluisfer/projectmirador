

<?php
error_reporting(E_ALL);
ini_set('display_errors','On');

// header("Access-Control-Allow-Origin: http://miradordelmar1.com/");

header('Content-Type: application/json');

$host = "localhost";
$user = "admon";
$clave = "admin_23@";
$db = "DB_MIRADOR";
$conexion = mysqli_connect($host, $user, $clave, $db);
if (mysqli_connect_error()) {
    echo "conexion fallida con la base de datos";
    exit();
} //else{
//     echo "base de datos conectada";
// }
    
mysqli_select_db($conexion, $db) or die("base de datos no encontrada");
mysqli_set_charset($conexion, "uft8");





?>