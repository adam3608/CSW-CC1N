function clubes(){
    clubeseleciona=(document.getElementById("clube").value);
    resultado=(document.getElementById("gols"));

    var ngols = 0
    if(clubeseleciona === "corinthians"){
        ngols = 100
    }
    else if(clubeseleciona === "flamengo"){
        ngols = 120
    }
      else if(clubeseleciona === "vasco"){
        ngols = 12
    }else {
        resultado.textContent = "selecione um clube!!!";
        return;
    }
    resultado.textContent = "o " + clubeseleciona + " marcou " + ngols + " gols";

}