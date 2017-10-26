<?php
  try {
    $cs=$_POST['cs'];
    $respuesta="false";
    $base="../../view/admi/";
    switch ($cs) {
  
      case '1':
        $respuesta = file_get_contents($base.'etiquetas.html' ,FILE_USE_INCLUDE_PATH);
        break;
    }
    echo $respuesta;
  } catch (Exception $e) {
      echo "Error en el servidor".$e->getMessage();
  }
 ?>
