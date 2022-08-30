function verificarPerfeito() {
    var inNumero = document.getElementById("inNumero");
    var outResposta1 = document.getElementById("outResposta1");
    var outResposta2 = document.getElementById("outResposta2");

    var numero = parseInt(inNumero.value);

    if (numero < 0) {
        alert("Digite um número inteiro positivo.");
        inNumero.focus();
        return;
    }

    var i = 2;
    var soma = 1;
    var divisores = "1";

    while (i <= (numero / 2)) {
        if (numero % i == 0) {
            divisores = divisores + ", " + i;
            soma = soma + i;
        }
        i++;
    }

    if (numero == 0) {
        outResposta1.textContent = "Não há divisores.";
    }
    else {
        if (numero == 1) {
            outResposta1.textContent = "Não há divisores (exceto o próprio número)."
        }
        else {
            outResposta1.textContent = "Divisores do " + numero + " (exceto o próprio número): " + divisores + " (Soma = " + soma + ").";
        }
    }

    if (soma == numero && numero != 1) {
        outResposta2.textContent = numero + " é um número perfeito.";
    }
    else {
        outResposta2.textContent = numero + " não é um número perfeito.";
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarPerfeito);