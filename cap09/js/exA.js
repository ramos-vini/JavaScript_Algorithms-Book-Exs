function mostrarVelas() {
    let inIdade = document.getElementById("inIdade");
    let idade = parseInt(inIdade.value);

    if (isNaN(idade) || idade < 1 || idade > 120) {
        alert("Digite uma idade válida.");
        inIdade.focus();
        return;
    }

    idade = idade.toString();

    let divVelas = document.getElementById("divVelas");
    let imgVelas = divVelas.getElementsByTagName("img");

    if (imgVelas.length > 0) {
        for (let i = imgVelas.length - 1; i >= 0; i--) {
            divVelas.removeChild(imgVelas[i]);
        }
    }

    for (let i = 0; i < idade.length; i++) {
        let vela = document.createElement("img");
        vela.src = `../assets/img/exA_vela${idade.charAt(i)}.png`;
        vela.style.width = "100px";

        divVelas.appendChild(vela);
    }
}
let btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarVelas);

function excluirVelas() {
    let inIdade = document.getElementById("inIdade");

    let divVelas = document.getElementById("divVelas");
    let imgVelas = divVelas.getElementsByTagName("img");

    if (imgVelas.length < 1) {
        alert("Não há velas a serem excluidas.");
        inIdade.focus();
        return
    }

    for (let i = imgVelas.length - 1; i >= 0; i--) {
        divVelas.removeChild(imgVelas[i]);
    }

    inIdade.value = "";
    inIdade.focus();
}
let btExcluir = document.getElementById("btExcluir");
btExcluir.addEventListener("click", excluirVelas);