function calcularTempo(params) {

    var inValor = document.getElementById("inValor");
    var btCalcular = document.getElementById("btCalcular");
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outTroco");

    var valor = document.getElementById("inValor").value;
    var tempo;
    var troco;

    if (valor < 1) {
        alert("Valor insuficiente.");
        inValor.focus();
        return;
    }
    else {
        if (valor >= 1 && valor < 1.75) {
            tempo = 30;
            troco = valor - 1;
        }
        else{
            if(valor >= 1.75 && valor < 3){
                tempo = 60;
                troco = valor - 1.75;
            }
            else{
                tempo = 120;
                troco = valor - 3;
            }
        }
    }

    outTempo.textContent = "Tempo: " + tempo + " minutos.";
    outTroco.textContent = "Troco (R$): " + troco.toFixed(2);
}
var btConfirmar = document.getElementById("btConfirmar");
btConfirmar.addEventListener("click", calcularTempo);