function calcularChinchilas() {
    var inChinchilas = document.getElementById("inChinchilas");
    var inAnos = document.getElementById("inAnos");
    var outResposta = document.getElementById("outResposta");

    var chinchilasInicial = parseInt(inChinchilas.value);
    var anos = parseInt(inAnos.value);

    if(chinchilasInicial < 2){
        alert("O número mínimo de chinchilas é 2 (casal).");
        inChinchilas.focus();
        return;
    }

    if(anos <= 0){
        alert("Digite um número de anos válido.");
        inAnos.focus();
        return;
    }

    var resposta = "1º Ano: " + chinchilasInicial + " Chinchilas" + "\n";

    var chinchilasFinal = chinchilasInicial;

    var i = 1;

    while (i < anos) {
        chinchilasFinal = chinchilasFinal*3;
        resposta = resposta + (++i) + "º Ano: " + chinchilasFinal + " Chinchilas\n";
    }

    outResposta.textContent = resposta;
}
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", calcularChinchilas);