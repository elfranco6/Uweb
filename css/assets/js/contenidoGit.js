$(document).ready(function () {
    $('#instalarGit').click(function () {
        $(".content").load('gitInstalar.html');
    });

    texto = $("#title").text();
    $("#instalarGit").click(function(){
    texto = texto.replace("Inicio", "Instalar Git");
    $("#title").text(texto);
    });

    $('#crearGit').click(function () {
        $(".content").load('gitCrear.html');
    });
    texto = $("#title").text();
    $("#crearGit").click(function(){
    texto = texto.replace("Instalar Git", "Crear Git");
    $("#title").text(texto);
    });
    $('#clonarGit').click(function () {
        $(".content").load('clonarGit.html');
    });
    texto = $("#title").text();
    $("#clonarGit").click(function(){
    texto = texto.replace("Crear Git", "Clonar Git");
    $("#title").text(texto);
    });
});