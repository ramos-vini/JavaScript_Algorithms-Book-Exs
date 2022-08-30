function gerarCitacao() {
    var inNome = document.getElementById("inNome");
    var outCitacao = document.getElementById("outCitacao");

    var nome = inNome.value;

    if (nome == "" || nome.match(/[0-9]/g)) {
        alert("Preencha o nome do autor corretamente.");
        inNome.focus();
        return;
    }

    var partes = nome.split(" ");

    if (partes.length < 2 || partes[partes.length - 1].charAt(0) == "") {
        alert("Preencha o nome completo do autor.");
        inNome.focus();
        return;
    }

    var ultimoSobrenome = partes[partes.length - 1].toUpperCase();

    var iniciais = "";

    for (var i = 0; i < (partes.length - 1); i++) {
        iniciais += partes[i].charAt(0).toUpperCase() + ". ";
    }

    outCitacao.textContent = ultimoSobrenome + ", " + iniciais;

}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarCitacao);