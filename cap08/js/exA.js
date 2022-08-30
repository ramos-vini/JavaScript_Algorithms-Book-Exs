function adicionarVisita() {
    if(!localStorage.getItem("visitas")){
        localStorage.setItem("visitas", "1");
        document.getElementById("outVisitas").innerHTML = "Muito bem-vindo(a)! Esta é a sua primeira visita ao nosso site.";
    } else{
        var visitas = parseInt(localStorage.getItem("visitas"));
        visitas++;
        localStorage.setItem("visitas", visitas);
        document.getElementById("outVisitas").innerHTML = "Que bom que você voltou! Esta é a sua visita de número " + visitas + " ao nosso site.";
    }
}

adicionarVisita();