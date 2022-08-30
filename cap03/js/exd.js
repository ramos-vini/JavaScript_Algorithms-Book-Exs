function testarLados() {

    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outPossibilidade = document.getElementById("outPossibilidade");
    var outTipo = document.getElementById("outTipo");

    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);

    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        alert("Por favor, digite valores válidos.");
        return;
    }

    if (ladoA >= (ladoB + ladoC) || ladoB >= (ladoA + ladoC) || ladoC >= (ladoA + ladoB)) {
        outPossibilidade.textContent = "Os Lados informados não podem formar um triângulo.";
        outTipo.textContent = "";   
    } 
    else {
        outPossibilidade.textContent = "Os Lados informados podem formar um triângulo.";

        if (ladoA == ladoB && ladoB == ladoC) {
            outTipo.textContent = "Tipo: Equilátero.";
        } 
        else {
            if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
                outTipo.textContent = "Tipo: Isósceles.";
            } 
            else {
                outTipo.textContent = "Tipo: Escaleno.";
            }
        }
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", testarLados);