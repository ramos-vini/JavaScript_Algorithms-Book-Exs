var inClube = document.getElementById("inClube");

var clubes = [];

function adicionarClube() {

    var clube = inClube.value;

    if (clube == "") {
        alert("Digite o nome de um clube.");
        inClube.focus();
        return;
    }

    clubes.push(clube);

    listarClubes();

}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarClube);

function listarClubes() {

    var lista = "";

    if (clubes.length == 0) {
        alert("Não há clubes a serem listados.");
        inClube.focus();
        return;
    }

    for (var i = 0; i < clubes.length; i++) {
        lista += (i + 1) + ". " + (clubes[i]) + "\n";
    }

    document.getElementById("outResposta").textContent = lista;

}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarClubes);

function montarTabela() {

    var lista = "";

    if (clubes.length % 2 == 1) {
        alert("Adicione mais um clube para montar a tabela");
        inClube.focus();
        return;
    }

    var clubesInverso = clubes.slice();

    clubesInverso.reverse();

    for (var i = 0; i < (clubes.length / 2); i++) {
        lista += clubes[i] + " x " + clubesInverso[i] + "\n";
    }

    document.getElementById("outResposta").textContent = lista;
}
var btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarTabela);

