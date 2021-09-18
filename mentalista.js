var numeroSecreto = parseInt(Math.random() * 11)

function Chutar() {
    var resultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value);

    if(chute == numeroSecreto) {
       resultado.innerHTML = "Você ACERTOU!!!!!"
    
    }else if(chute > 10 || chute < 0) {
        resultado.innerHTML = "Você deve digitar um valor entre 0 e 10"

    }else {
        resultado.innerHTML = "você errou!!!"
    }


}