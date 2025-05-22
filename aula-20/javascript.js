function verificaridade(){
    var idade = parseInt(document.getElementById("idade").value)
    var resultado = document.getElementById("resultado")
    if (idade<8)
    {
        resultado.textContent = "idade invalidada!"
    }
    else if (idade>8 && idade<10)
    {
        resultado.textContent = "você é uma criança"
    }
    else if (idade>10 && idade<16)
    {
        resultado.textContent = "você é adolescente"
    }
    else if (idade>16 && idade<25)
    {
        resultado.textContent = "você é jovem"
    }
    else if (idade>25 && idade<60)
    {
        resultado.textContent = "você é adulto"
    }
    else if (idade>60 && idade<80)
    {
        resultado.textContent = "você é  velho"
    }
    else if (idade>80 && idade<100)
    
    {
        resultado.textContent = "ancião"
    }
}