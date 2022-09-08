document.getElementById("inClube").focus();

function adicionarClube() {
    let inClube = document.getElementById("inClube");
    let clube = inClube.value;

    if (clube == "") {
        alert("Digite um Clube.");
        inClube.focus();
        return;
    }

    let clubeH5 = document.createElement("h4");
    clubeH5.appendChild(document.createTextNode(`${clube}`));

    let divClubes = document.getElementById("divClubes");
    divClubes.appendChild(clubeH5);

    inClube.value = "";
    inClube.focus();
}
let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarClube);

function montarTabela() {
    let divClubes = document.getElementById("divClubes");

    let clubes = divClubes.getElementsByTagName("h4");

    if (clubes.length < 1 || clubes.length % 2 != 0) {
        alert("É necessária uma quantidade Par de clubes para montar a tabela.");
        document.getElementById("inClube").focus();
        return;
    }

    let tabelaH2 = document.createElement("h2");
    tabelaH2.appendChild(document.createTextNode("Tabela de Jogos:"));

    divClubes.appendChild(tabelaH2);

    let table = document.createElement("table");
    table.style.border = "2px solid gray";
    table.style.width = "400px"

    let clubesIdx = 0;

    for (let i = 0; i < (clubes.length) / 2; i++) {
        table.insertRow();
        if (i % 2 == 0) {
            table.rows[i].style.backgroundColor = "gray";
        }

        for (let j = 0; j < 2; j++) {
            table.rows[i].insertCell();
            table.rows[i].cells[j].textContent = `${clubes[clubesIdx].textContent}`;
            clubesIdx++;
        }
    }


    for (let i = clubes.length - 1; i >= 0; i--) {
        divClubes.removeChild(clubes[i]);
    }

    divClubes.appendChild(table);

    document.getElementById("inClube").value = "";

    document.getElementById("inClube").disabled = "true";
    document.getElementById("btAdicionar").disabled = "true";
    document.getElementById("btMontar").disabled = "true";
}
let btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarTabela);

function limparClubes() {
    location.reload();
}
let btNovos = document.getElementById("btNovos");
btNovos.addEventListener("click", limparClubes);
