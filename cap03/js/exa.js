function calcularParOuImpar() {

    // Referenciação dos elementos html via ID 
    var inNumero = document.getElementById("inNumero");
    var outResultado = document.getElementById("outResultado");

    // Declaração de variável (input) e atribuição de valor
    var numero = inNumero.value

    // Processamento de informação e output
    if(numero % 2 == 0){
        outResultado.textContent = "Resposta: " + numero + " é Par.";
    }
    else{
        outResultado.textContent = "Resposta: " + numero + " é Ímpar."
    }

}
// Referenciação do "Input: button" com atribuição de evento "onclick"
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", calcularParOuImpar);