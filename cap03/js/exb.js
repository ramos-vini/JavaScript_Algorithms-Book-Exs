function verificarSituacao() {
    var inVelPermitida = document.getElementById("inVelPermitida");
    var inVelCondutor = document.getElementById("inVelCondutor");
    var outSituacao = document.getElementById("outSituacao");

    var velPermitida = Number(inVelPermitida.value);
    var velCondutor = Number(inVelCondutor.value);
    
    if (velPermitida <= 0) {
        alert("Por favor, digite uma velocidade permitida válida.");
        inVelPermitida.focus();
        return;
    }
    if (velCondutor < 0) {
        alert("Por favor, digite uma velocidade do condutor válida.");
        inVelCondutor.focus();
        return;
    }

    var situacao;

    if(velCondutor <= velPermitida){
        situacao = "Sem Infração";
    }
    else{
        if(velCondutor <= 1.2*velPermitida){
        situacao = "Infração Leve";
        }
        else{
        situacao = "Infração Grave";
        }
    }

    outSituacao.textContent = "Situação: " + situacao;

}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarSituacao);