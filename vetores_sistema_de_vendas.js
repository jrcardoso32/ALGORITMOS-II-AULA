// precisamos catalogar todos os veiculos e seus valores
// para isso precisamos de dois vetores
// um para os nome e outro para os valores, cada posicao sera respectivamente nome e valor
// a quantidade de veiculos é indefinida ate que informe que nao deseja continuar com o cadastro
// apos o cadastro exibir o nome e valor do primeiro veiculo e do ultimo

// primeiro é lista [0]
// ultimo lista [list.length-1]

let nomes=[]
let valores=[]
let resposta
let nome
let valor

do{

    nome=prompt("Informe o nome do veículo")
    nomes.push(nome)

    valor=Number(prompt("informe o valor do veículo "+nome))
    valores.push(valor)
    
    resposta = prompt ("deseja continuar S/N ? ")

}while(resposta== "S" || resposta == "s")

alert("O primeiro veiculo foi "+nomes[0] + " custando R$ "+valores[0])

alert("O primeiro veiculo foi "+nomes[nomes.length-1] + " custando R$ "+valores[valores.length-1])