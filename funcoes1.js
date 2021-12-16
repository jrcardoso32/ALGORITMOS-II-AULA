console.log("deu certo");

// declaração da funcao
// tem palavra reservada function
// tem nome de funcao 
// () gaveta de parametros
// {} escopo - td que sera executado 
// conteudo que eu quero executar
console.log("quero saber a essa funcao " + retornoInteiro());





let nome = capturaTexto("Informe seu nome") // usando a funcao captura texto passando o parametro frase
let idade = capturaNumero("Informe sua idade") // 
let anoAtual = capturaNumero("informe o ano atual") // 
let cidade = capturaTexto("Informe sua cidade") // 

console.log("oi meu nome é " + nome + " e tenho " + idade + " anos e estamos no ano de " + anoAtual+ " estou em cidade" +cidade)


function retornoSimples() {
    return "ta aqui oq voce precisa"
}

function retornoInteiro() {
    return 14
}

// qdo eu chamo essa funcao eu devo informar um valor para o parametro
function capturaTexto(texto) {
    let temporario = prompt(texto)
    return temporario
}
// nao ´precisa parametro foi nao tem
function capturaNumero() {
    let temporario = Number(prompt(" Informe um numero"))
    return temporario
}
// essa funcao recebe parametro onde a funcao caputura numero nao recebia, dessa forma a funcao se torna dinamica pq e parametrizavel
function capturaNumeroEspecial(Frase) {
    let temporario = Number(prompt(Frase))

    
}



