var texto;

function criptografarTexto() {
    var inTexto = document.getElementById("inTexto");
    var outTexto = document.getElementById("outTexto");

    texto = inTexto.value;

    if (texto == "") {
        if (outTexto.textContent != "") {
            texto = outTexto.textContent;
        } else {
            alert("Digite um texto.");
            inTexto.focus();
            return;
        }
    }

    var textoCripto = "";

    for (var i = 0; i < texto.length; i++) {
        if (i % 2 != 0) {
            textoCripto += texto.charAt(i);
        }
    }

    outTexto.textContent = textoCripto;
    inTexto.value = "";
}
var btCriptografar = document.getElementById("btCriptografar");
btCriptografar.addEventListener("click", criptografarTexto);

function descriptografarTexto() {
    var outTexto = document.getElementById("outTexto");

    outTexto.textContent = texto;
}
var btDescriptografar = document.getElementById("btDescriptografar");
btDescriptografar.addEventListener("click", descriptografarTexto);