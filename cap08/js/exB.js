function exibirLista() {

    if (!localStorage.getItem("produtos")) {
        return;
    } else {
        var listaProdutos = localStorage.getItem("produtos");
        listaProdutos = listaProdutos.toLowerCase();
        listaProdutos = listaProdutos.split(";");
        listaProdutos.sort();

        var outListaProdutos = "";

        for (var i = 0; i < listaProdutos.length; i++) {
            outListaProdutos += UpperCaseFirstLetter(listaProdutos[i]) + "\n";
        }

        document.getElementById("outLista").innerHTML = "Produtos Adicionados\n--------------------\n" + outListaProdutos;
    }
}

exibirLista();


function adicionarProduto() {
    var inProduto = document.getElementById("inProduto");
    var produto = (inProduto.value).trim();

    if (produto == "") {
        alert("Digite um Produto.");
        inProduto.focus();
        return;
    }

    if (!localStorage.getItem("produtos")) {
        localStorage.setItem("produtos", produto);
    } else {
        var listaProdutos = localStorage.getItem("produtos");
        listaProdutos += ";" + produto;

        localStorage.setItem("produtos", listaProdutos);

    }

    inProduto.value = "";

    exibirLista();

}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarProduto);

function limparLista() {
    localStorage.clear();
    document.getElementById("outLista").innerHTML = "";
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparLista);

function UpperCaseFirstLetter(string) {
    var newString = string.toString().charAt(0).toUpperCase();
    newString += string.substring(1);
    return newString;
}