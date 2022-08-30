function verificarPalindromo() {
    var inFrase = document.getElementById("inFrase");
    var outPalindromo = document.getElementById("outPalindromo");

    var frase = inFrase.value;

    if (frase == "") {
        alert("Insira uma frase ou palavra.");
        inFrase.focus();
        return;
    }

    var fraseTeste = frase.replace(/ /g, "").toUpperCase();

    var fraseReversa = "";

    for (var i = (fraseTeste.length - 1); i >= 0; i--) {
        fraseReversa += fraseTeste.charAt(i);
    }

    var resultado = "";

    if (fraseTeste == fraseReversa) {
        resultado = " é um Palíndromo."
    } else {
        resultado = " não é um Palíndromo."
    }

    outPalindromo.textContent = frase.toUpperCase() + resultado;
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarPalindromo);