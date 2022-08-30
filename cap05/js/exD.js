var noticias = [];

var numeroNoticias = 1;

var inNoticia = document.getElementById("inNoticia");

function adicionarNoticia() {

    var noticia = inNoticia.value;

    if (noticia == "" || noticia >= 0 || noticia < 0) {
        alert("Adicione uma notícia.");
        inNoticia.focus();
        return;
    }

    noticias.push(noticia);

    document.getElementById("outNoticiasCadastradas").textContent = "Notícias Cadastradas: " + noticias.length;

    var lista = "";

    for (var i = (noticias.length); i > (noticias.length - numeroNoticias); i--) {
        lista += i + "ª ) " + noticias[i - 1] + "\n";
    }

    document.getElementById("outUltimasNoticias").textContent = numeroNoticias + " Última(s) Notícia(s)\n--------------------------------\n" + lista;

    inNoticia.value = "";
    inNoticia.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNoticia);

function listarNoticias() {
    if(noticias.length == 0){
        alert("Adicione uma notícia.");
        inNoticia.focus();
        return;
    }

    numeroNoticias = parseInt(prompt("Quantas notícias deseja ver?"));

    while (numeroNoticias <= 0 || isNaN(numeroNoticias)) {
        alert("Digite um número válido.");
        numeroNoticias = parseInt(prompt("Quantas notícias deseja ver?"));

        while (numeroNoticias > noticias.length) {
            alert("No momento há " + noticias.length + " notícias disponíveis.");
            numeroNoticias = parseInt(prompt("Quantas notícias deseja ver?"));
        }
    }

    while (numeroNoticias > noticias.length) {
        alert("No momento há " + noticias.length + " notícias disponíveis.");
        numeroNoticias = parseInt(prompt("Quantas notícias deseja ver?"));

        while (numeroNoticias <= 0 || isNaN(numeroNoticias)) {
            alert("Digite um número válido.");
            numeroNoticias = parseInt(prompt("Quantas notícias deseja ver?"));
        }
    }

    var lista = "";

    for (var i = (noticias.length); i > (noticias.length - numeroNoticias); i--) {
        lista += i + "ª ) " + noticias[i - 1] + "\n";
    }

    document.getElementById("outUltimasNoticias").textContent = numeroNoticias + " Última(s) Notícia(s)\n--------------------------------\n" + lista;

}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarNoticias);