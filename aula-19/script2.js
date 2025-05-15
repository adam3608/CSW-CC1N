function voltar()
{
window.open ("index.html","_blank")
}

function enviadados()
{
    document.getElementById("inputusuario").innerHTML = "nome enviado foi:" + window.prompt("digite seu nome");

}

function exibenome()
{
    window.alert("nome digitado foi:" + document.getElementById ("nome").value);
    
}