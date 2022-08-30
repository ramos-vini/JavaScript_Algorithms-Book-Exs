function calcularValor(params) {
    var inValor = Number(document.getElementById("inValor").value);
    var inTempo = Number(document.getElementById("inTempo").value);

    var valorFinal = (Math.ceil(inTempo/15))*inValor;

    var outPagamento = document.getElementById("outPagamento");

    outPagamento.textContent = "O valor a ser pago é de R$ " + valorFinal.toFixed(2);
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularValor);