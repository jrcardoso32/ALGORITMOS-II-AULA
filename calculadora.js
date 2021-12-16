

function capturaNumero(acao) {
    let nA = promptNumero("Informe o primeiro numero")
    let nB = promptNumero("Informe o segundo numero")
    // escolher no swtich as operações
    switch(acao){
     case "somar":
        somar(nA,nB)
        break

     case "subtrair":
        subtrair (nA,nB);
        break
    case "divisao":
        divisao (nA,nB)
        break

        case "multiplicação":
        multiplicacao (nA,nB)
        break
        
        default:
        console.log("FAZER NADA PQ NAO TEM OPCAO CORRETA");
        break
        
    }
}


function promptNumero(frase) {
    let temporario = Number(prompt(frase))
    return temporario
}

function somar(numeroA,numeroB){
alert (numeroA+numeroB)
}

function subtrair(numeroA,numeroB) {
    alert (numeroA-numeroB)
}

function divisao(numeroA,numeroB) {
    alert (numeroA/numeroB)

    function multiplicao(numeroA,numeroB) {
        alert (numeroA*numeroB)
        
    }
    
}