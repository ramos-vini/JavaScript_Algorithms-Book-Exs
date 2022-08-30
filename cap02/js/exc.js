function calcularPromo(params) {

    var inProduto = document.getElementById("inProduto").value;
    var inPreco = Number(document.getElementById("inPreco").value);

    var produto3 = inPreco*0.5;
    var valorTotal = inPreco*2.5;

    var outPromo1 = document.getElementById("outPromo1");
    var outPromo2 = document.getElementById("outPromo2");

    outPromo1.textContent = inProduto + " - Promoção: Leve 3 por apenas R$ " + valorTotal.toFixed(2);
    outPromo2.textContent = "O 3º produto sairá por apenas R$ " + produto3.toFixed(2); 
}
var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", calcularPromo);