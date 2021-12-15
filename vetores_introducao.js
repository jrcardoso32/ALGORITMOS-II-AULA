
console.log("deu certo");

let nomes=[] // criando vetor sem itens
console.log(nomes);

//criando vetor com itens

let cursos=[ // abre a lista
"algoritmos 1",
"algoritmos 2",
"java fundamentos",
"html5",
"css",
"java avançado",
"MySQL",
"Typescript"
] // fecha a lista

console.log(cursos);

console.log(cursos[5]); // acessando o valor no index 5
//lembrando que começa com 0


console.log(cursos.indexOf("html5")); // pesquisar item da lista por nome
cursos.splice(0,1); // para deletar um item na lista necessario informar
//a posicao e quantidade de itens para deletar.

console.log(cursos);

cursos.push("Python") // inserindo item no final da lista
cursos.push("angular") // inserindo item no final da lista

console.log(cursos);

// iniciando o contador com zero pois o indice na pista começa com zero
// enquanto for menor que o tamanho da lista, ou seja tamanho -1

for(let contador=0; contador<cursos.length; contador++){
console.log("na poicao " + contador+ " tem o valor = " +cursos[contador]);

// iniciando o contador com um pois é mais intuitivo fazer a contagem iniciando com um//
// mas tem que ir ate o tamanho da lista
// incremento de um em 1.

for(let contador=1; contador<cursos.length;contador++){

// ajustando o acesso ao valor para localizar o indice correto
// pois comeca com zero 
// se inicio com 1 eu estaria pulando o primeiro item e acesso um item extra.

console.log("na posicao "+contador+ "tem o valor = " + cursos[contador-1]);
}




}









