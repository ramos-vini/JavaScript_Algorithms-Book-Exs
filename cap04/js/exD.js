function criarEstrelas() {
    var inNumero = document.getElementById("inNumero");
    var outEstrelas =  document.getElementById("outEstrelas");

    var numero = parseInt(inNumero.value);

    var numeroLinha = 1;
    var resposta = "";

    while (numeroLinha <= numero) {
        var estrelasLinha = 0;
        while (estrelasLinha < numeroLinha) {
            resposta = resposta + "*";
            estrelasLinha++;
        }
        resposta = resposta + "\n";
        numeroLinha++;
    }

    outEstrelas.textContent = resposta;
}
var btCriar = document.getElementById("btCriar");
btCriar.addEventListener("click", criarEstrelas);