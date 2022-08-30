function retornarTracos(nome) {

    nome = nome.toString();

    var tracos = "";

    for (var i = 0; i < nome.length; i++) {
        if (nome[i] != " ") {
            tracos += "-";
        } else {
            tracos += " ";
        }
    }
    return tracos;
}

function categorizarAluno(idade) {

    idade = Number(idade);

    if (idade < 12) {
        return "Infantil";
    } else {
        if (idade < 18) {
            return "Juvenil";
        } else {
            return "Adulto";
        }
    }
}

function exibirCategoria() {

    var inNome = document.getElementById("inNome");
    var inIdade = document.getElementById("inIdade");

    var nome = inNome.value;
    var idade = Number(inIdade.value);

    if (nome == "" || nome.match(/\d|_/g) || nome.match(/[^\w| ]/)) {
        alert("Digite um nome válido.");
        inNome.focus();
        return;
    }

    if (idade == "" || isNaN(idade) || idade <= 0) {
        alert("Digite uma idade válida.");
        inIdade.focus();
        return;
    }

    nome = nome.trim();

    var tracos = retornarTracos(nome);
    var categoria = categorizarAluno(idade);

    document.getElementById("outCategoria").textContent = nome + "\n" + tracos + "\n" + "Categoria: " + categoria;
}

var btCategorizar = document.getElementById("btCategorizar");
btCategorizar.addEventListener("click", exibirCategoria);