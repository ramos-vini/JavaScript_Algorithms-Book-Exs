function exibirNomes() {
    let inNome = document.getElementById("inNome");
    let nome = inNome.value.trim();

    if (nome == "") {
        alert("Digite um nome.");
        inNome.focus();
        return;
    }

    let divNomes = document.getElementById("divNomes");
    let divNomesH3 = divNomes.getElementsByTagName("h3");

    if (divNomesH3.length > 0) {
        for (let i = divNomesH3.length - 1; i >= 0; i--) {
            divNomes.removeChild(divNomesH3[i]);
        }
    }

    let arrayNomes = nome.split(" ");

    let cores = ["red", "blue", "green", "yellow", "purple", "brown", "orange"];

    for (nome of arrayNomes) {
        let h3 = document.createElement("h3");
        h3.appendChild(document.createTextNode(nome));
        h3.style.color = cores[parseInt(Math.random() * 7)]
        divNomes.appendChild(h3);
    }

    inNome.value = "";
}
let btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirNomes);