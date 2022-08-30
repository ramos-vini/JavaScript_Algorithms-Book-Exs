function validarNome(nome) {
    nome = nome.trim();

    var validade = true;

    if (!nome.includes(" ") || nome == "" || nome.match(/[^\w| ]/g) || nome.match(/\d|_/g)) {
        validade = false;
    }

    return validade; // Retorna um valor booleano;
}

function obterSobrenome(nome) {
    nome = nome.trim()

    var indice = nome.lastIndexOf(" ");

    var sobrenome = nome.substring(indice + 1).toLowerCase();

    return sobrenome; // Retorna uma string;
}

function contarVogais(nome) {
    var cont = nome.match(/[aeiou]/ig).length;

    var contString = cont > 9 ? cont.toString() : "0" + cont.toString();

    return contString; // Retorna uma string;
}

function gerarSenha() {
    var inNome = document.getElementById("inNome");

    var nome = inNome.value;

    if (!validarNome(nome)) {
        alert("Digite o nome completo do aluno.");
        inNome.focus();
        return;
    }

    document.getElementById("outSenha").innerHTML = "Senha Inicial: " + obterSobrenome(nome) + contarVogais(nome);
}
var btGerarSenha = document.getElementById("btGerarSenha");
btGerarSenha.addEventListener("click", gerarSenha);

