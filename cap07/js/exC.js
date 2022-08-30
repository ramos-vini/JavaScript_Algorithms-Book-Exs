function exibirParagrafo() {
    var parConvenio = document.getElementById("parConvenio");

    if (rbConvenioNao.checked) {
        parConvenio.classList.add("off");
    } else {
        parConvenio.classList.remove("off");
    }
}
var rbConvenioNao = document.getElementById("rbConvenioNao");
rbConvenioNao.addEventListener("change", exibirParagrafo);
var rbConvenioSim = document.getElementById("rbConvenioSim");
rbConvenioSim.addEventListener("change", exibirParagrafo);

function exibirDesconto() {
    var inValor = document.getElementById("inValor");

    var valor = Number(inValor.value);

    if (valor <= 0 || valor == "" || isNaN(valor)) {
        alert("Digite o valor corretamente.");
        inValor.focus();
        return;
    }

    var desconto;

    if (rbConvenioNao.checked) {
        desconto = calcularDesconto(valor, 0.1);
    } else {
        if (selectConvenio.value == "Amigo dos Animais") {
            desconto = calcularDesconto(valor, 0.2);
        } else {
            desconto = calcularDesconto(valor, 0.5);
        }
    }

    document.getElementById("outDesconto").innerHTML = "Desconto: R$ " + desconto.toFixed(2) + "<br><br>" + "A pagar: R$ " + (valor - desconto).toFixed(2);

}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", exibirDesconto);

function calcularDesconto(valor, taxa) { // Função com passagem de argumento e retorno, para fácil reaproveitamento;
    return valor * taxa;
}


function limparDesconto() {
    document.getElementById("outDesconto").innerHTML = "";
}
rbConvenioNao.addEventListener("change", limparDesconto);
rbConvenioSim.addEventListener("change", limparDesconto);
var selectConvenio = document.getElementById("selectConvenio");
selectConvenio.addEventListener("change", limparDesconto);
