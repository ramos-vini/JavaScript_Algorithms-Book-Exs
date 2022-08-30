var candidatos = [];

function adicionarCandidato() {
    var inCandidato = document.getElementById("inCandidato");
    var inAcertos = document.getElementById("inAcertos");

    var candidato = inCandidato.value;
    var acertos = parseInt(inAcertos.value);

    if (candidato == "" || candidato >= 0 || candidato < 0) {
        alert("Digite o nome do candidato.");
        inCandidato.focus();
        return;
    }

    if (acertos < 0) {
        alert("Digite um número de acertos válido.");
        inAcertos.focus();
        return;
    }

    for (var i = 0; i < candidatos.length; i++) {
        if (candidato == candidatos[i].nomeCandidato) {
            alert("Esse candidato já foi adicionado.");
            inCandidato.focus();
            return;
        }
    }

    candidatos.push({ nomeCandidato: candidato, numeroAcertos: acertos });

    inCandidato.value = "";
    inAcertos.value = "";
    inCandidato.focus();

    listarTodos();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCandidato);

function listarTodos() {
    var inCandidato = document.getElementById("inCandidato");

    if (candidatos.length == 0) {
        alert("Não foram adicionados candidatos.");
        inCandidato.focus();
        return;
    }

    var lista = "";

    for (var i = 0; i < candidatos.length; i++) {
        lista += candidatos[i].nomeCandidato + " - " + candidatos[i].numeroAcertos + " acertos\n";
    }

    document.getElementById("outResposta").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarTodos);

function listarAprovados() {
    var inCandidato = document.getElementById("inCandidato");

    var notaAprovados = parseInt(prompt("Digite o número de acertos para Aprovação à 2ª Etapa."));

    while (isNaN(notaAprovados) || notaAprovados < 0) {
        alert("Digite um número válido.");
        notaAprovados = parseInt(prompt("Digite o número de acertos para Aprovação à 2ª Etapa."))
    }

    if (candidatos.length == 0) {
        alert("Não foram adicionados candidatos.");
        inCandidato.focus();
        return;
    }

    var lista = "";

    var j = 1;

    for (i = 0; i < candidatos.length; i++){
        if(candidatos[i].numeroAcertos >= notaAprovados){
            lista += candidatos[i].nomeCandidato + " - " + candidatos[i].numeroAcertos + " acertos\n";
        }
    }

    if (lista == ""){
        lista = "Nenhum candidato foi aprovado para a 2ª etapa.";
    }

    document.getElementById("outResposta").textContent = lista;

}
var btAprovados = document.getElementById("btAprovados");
btAprovados.addEventListener("click", listarAprovados);