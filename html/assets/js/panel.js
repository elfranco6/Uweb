$(document).ready(function() {
  console.log("Panel");
  $("#etiquetas").click(function(){
    var json="",urls="";
    if ($(this).val()==2) {
      json ={
        cs:'1',
        tp:'0'
      }
      urls="../assets/linkController.php";
    }
    $.ajax({
      url:urls,
      type:"POST",
      datatype:"json",
      data:json,
      success:function(resultSet) {
        switch (json.tp) {
          case '0':
              if (resultSet=="true") {
                window.location.href="../subPaginas/etiquetas.html";
              }
            break;
          case '1':
              $("#content").html(resultSet);
            break;
        }
      },
      error:function(resultSet) {
        alert("Error en el servidor"+resultSet);
      }
    });
  });
});
