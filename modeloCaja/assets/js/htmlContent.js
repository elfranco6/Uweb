$(document).ready(function () {
        $('#etiquetas').click(function () { // cuando se hace clic en #etiquetas
            $(".content").load('etiquetas.html');// el elemeto .content carga lo que esté en etiquetas.html
        });

        texto = $("#title").text();
        $("#etiquetas").click(function () {
            texto = texto.replace("Inicio", "Etiquetas html");
            $("#title").text(texto);
        });

        $('#loBasico').click(function () {
            $(".content").load('loBasico.html');
        });
        texto = $("#title").text();
        $("#loBasico").click(function () {
            texto = texto.replace("Etiquetas html", "Lo basico");
            $("#title").text(texto);
        });
        
        $('#etiquetasNav').click(function () {
            $(".content").load('etiquetasNav.html');
        });

        texto = $("#title").text();
        $("#etiquetasNav").click(function () {
            texto = texto.replace("Lo basico", "Etiquetas navegación");
            $("#title").text(texto);
        });

        $('#etiquetasContenido').click(function () {
            $(".content").load('etiquetasContenido.html');
        });

        texto = $("#title").text();
        $("#etiquetasContenido").click(function () {
            texto = texto.replace("Etiquetas navegación","Etiquetas Contenido");
            $("#title").text(texto);
        });

        
        $('#buenasPracticas').click(function () {
            $(".content").load('buenasPracticas.html');
        });

        texto = $("#title").text();
        $("#buenasPracticas").click(function () {
            texto = texto.replace("Etiquetas Contenido","Buenas Practicas");
            $("#title").text(texto);
        });
        
    });