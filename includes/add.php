<?php



//require the conexion
require_once "connect.php";
if (isset($_POST)) {
     if (!empty($_POST)) {
         error_reporting(0);
    //obtener los datos por POST
    $nombre = $_POST['name_usu'];
    $telefono =$_POST['phone_usu'];
    $email = $_POST['email'];
    $torreApto = $_POST['torreApto'];
    $arrendado = $_POST['sel_apto'];
    $mensaje = $_POST['mensaje'];
 
    // script guadando en la base de datos 
    $query = "INSERT INTO informacion(nombre,telefono,email,torreApto,arrendado,mensaje) VALUES ('$nombre', '$telefono', '$email', '$torreApto', '$arrendado', '$mensaje')";

    //ejecucion de script
    $run_sql = mysqli_query($conexion, $query);
    
       header('Content-Type: application/json');
    //validacion
    if ($run_sql) {
        
        echo json_encode("respuesta");
    }else{
        
        echo json_encode("error");
       
    }

}
}



?>