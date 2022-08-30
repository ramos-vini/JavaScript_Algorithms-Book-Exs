function mostrarPromo() {
    // input
    var inMedicamento = document.getElementById("inMedicamento").value;
    var inPreco = document.getElementById("inPreco").value;

    // process
    var promo = Math.floor(inPreco*2).toFixed(2);

    // output
    var outMedicamento = document.getElementById("outMedicamento");
    var outPreco = document.getElementById("outPreco");

    outMedicamento.textContent = "Promoção de " + inMedicamento;
    outPreco.textContent = "Leve 2 por apenas R$ " + promo;
}
// button link & event
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarPromo);