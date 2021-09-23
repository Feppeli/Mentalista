var numeroSecreto = parseInt(Math.random() * 11)  //Variável que gera os números aleatóriamente

function Chutar() { //função ligada ao botão chutar
    var resultado = document.getElementById("resultado") // buscando as informações do "resultado" no HTML
    var chute = parseInt(document.getElementById("valor").value);

    if(chute == numeroSecreto) { // criando a condicionais para a função cutar
       resultado.innerHTML = "Você ACERTOU!!!!!" // imprimindo na tela pelo HTML
    
    }else if(chute > 10 || chute < 0) {
        resultado.innerHTML = "Você deve digitar um valor entre 0 e 10"

    }else {
        resultado.innerHTML = "você errou!!!"
    }


}
