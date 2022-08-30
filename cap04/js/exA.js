function repetirFruta(params) {
    var inFruta = document.getElementById("inFruta");
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var fruta = inFruta.value;
    var numero = parseInt(inNumero.value);

    if (numero <= 0) {
        alert("Digite um número válido.");
        inNumero.focus();
        return;
    }

    var i = 1;
    var resposta = ""

    while (i < numero) {
        resposta = resposta + fruta + "*";
        i++; 
    }

    outResposta.textContent = resposta + fruta;
}

var btRepetirFruta = document.getElementById("btRepetirFruta");
btRepetirFruta.addEventListener("click", repetirFruta);