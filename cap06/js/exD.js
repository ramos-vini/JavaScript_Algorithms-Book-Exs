function calcularDataValor() {
    var inData = document.getElementById("inData");
    var inValor = document.getElementById("inValor");
    var outData = document.getElementById("outData");
    var outValor = document.getElementById("outValor");

    var data = inData.value;
    var valor = Number(inValor.value);

    if (data == "") {
        alert("Por favor, preencha a Data corretamente");
        inData.focus();
        return;
    }

    if (valor == "" || valor == 0) {
        alert("Por favor, preencha o Valor corretamente");
        inValor.focus();
        return;
    }

    var partesData = data.split("-");

    var dataLimite = new Date();

    dataLimite.setFullYear(Number(partesData[0]));
    dataLimite.setMonth(Number(partesData[1]) - 1 + 3);
    dataLimite.setDate(Number(partesData[2]));

    var anoLimite = dataLimite.getFullYear();
    var mesLimite = dataLimite.getMonth() + 1;
    var diaLimite = dataLimite.getDate();

    var dataAtual = new Date();

    outData.textContent = "Data Limite para Pagamento com Desconto: " + (diaLimite < 10 ? "0" + diaLimite : diaLimite) + "/" + (mesLimite < 10 ? "0" + mesLimite : mesLimite) + "/" + anoLimite;
    outValor.textContent = (dataLimite >= dataAtual ? "Valor com Desconto: R$ " + (valor * 0.8).toFixed(2) : "Valor Total: R$ " + valor.toFixed(2));
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularDataValor);