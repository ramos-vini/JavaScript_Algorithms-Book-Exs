exibirServico();

function adicionarServico() {
    var inServico = document.getElementById("inServico");
    var servico = inServico.value.trim();
    var inVeiculo = document.getElementById("inVeiculo");
    var veiculo = inVeiculo.value.trim();

    if (servico.match(/[^\w|\d| ]/) || veiculo.match(/[^\w|\d| ]/)) {
        alert("Não utilize caracteres especiais.");
        inServico.focus();
        return;
    } else {
        if (servico == "" && veiculo == "") {
            alert("Digite um Serviço e um Veículo.");
            inServico.focus();
            return;
        } else {
            if (servico == "") {
                alert("Digite um Serviço.");
                inServico.focus();
                return;
            } else {
                if (veiculo == "") {
                    alert("Digite um Veículo.");
                    inVeiculo.focus();
                    return;
                }
            }
        }
    }

    var servicoVeiculo = servico + " - " + veiculo;

    if (!localStorage.getItem("servicos")) {
        localStorage.setItem("servicos", servicoVeiculo);
    } else {
        localStorage.setItem("servicos", localStorage.getItem("servicos") + ";" + servicoVeiculo);
    }

    inServico.value = "";
    inVeiculo.value = "";

    exibirServico();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarServico);


function executarServico() {
    if (!localStorage.getItem("servicos")) {
        alert("Não há serviço a ser executado.");
        document.getElementById("inServico").focus();
        return;
    } else {
        var servicos = localStorage.getItem("servicos");
        servicos = servicos.split(";");
        servicos.shift();
        servicos = servicos.join(";");

        localStorage.setItem("servicos", servicos);
    }

    exibirServico();
}
var btExecutar = document.getElementById("btExecutar");
btExecutar.addEventListener("click", executarServico);


function exibirServico() {
    if (!localStorage.getItem("servicos")) {
        document.getElementById("outNumero").innerHTML = "";
        document.getElementById("outServico").innerHTML = "";
        return;
    } else {
        var servicos = localStorage.getItem("servicos");
        if (!servicos.match(";")) {
            document.getElementById("outNumero").innerHTML = "";
            document.getElementById("outServico").innerHTML = "Serviço em Execução: \n--------------------\n" + servicos;
        } else {
            servicos = servicos.split(";");
            document.getElementById("outNumero").innerHTML = "Serviços Pendentes: " + (servicos.length - 1);
            document.getElementById("outServico").innerHTML = "Serviço em Execução: \n--------------------\n" + servicos[0];
        }
    }
}