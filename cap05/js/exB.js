var numeros = [];
var inNumero = document.getElementById("inNumero");

function adicionarNumeros() {

    var numero = inNumero.value;

    var numeroRepetido = numeros.indexOf(numero);

    if(numeroRepetido > -1){
        alert("O número digitado já foi adicionado.");
        inNumero.focus();
        return;
    }
    else{
        numeros.push(numero);
    }

    document.getElementById("outNumeros").textContent = "Números: " + numeros.join(", ");

}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNumeros);

function verificarOrdem() {
    if (numeros.length == 0) {
        alert("Não há números adicionados.");
        inNumero.focus();
        return;
    }

    if (numeros.length == 1) {
        alert("Por favor, adicione mais um número.");
        inNumero.focus();
        return;
    }

    var ordemCrescente = true;

    for(var i = 0; i < numeros.length; i++){
        if(numeros[i] - numeros[i+1] > 0){
            ordemCrescente = false;
            break;
        }
    }

    if (ordemCrescente == true) {
        document.getElementById("outOrdem").textContent = "Os números listados estão em ordem crescente.";
    } else {
        document.getElementById("outOrdem").textContent = "Ops... Os números listados não estão em ordem crescente.";
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarOrdem);