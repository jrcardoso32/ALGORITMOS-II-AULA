
console.log("criar uim vetor com gostos pessoais");
console.log("pode criar um vetor usar um push para incluir de item a item");
console.log("exebir a lista com log");
console.log("percorrer a lista para apresentar cada valor com uma frase");



// criando vetores

let menu = [
    "antartica",
    "enseinbahn",
    "Capivara",
    "colorado",
    "patagonia"

]   // fecha lista

console.log(menu);

menu.push("itaipava")

console.log(menu.indexOf("colorado"))

console.log(menu);

console.log(menu[3]); // exibe o numero que escolhe em tela

console.log("o que eu gosto mesmo é de " + menu[1]);

for (let contador = 0; contador < menu.length; contador++){
    console.log("na poicao " + contador + " tem o valor = " + menu[contador]);
    console.log("gosto muito de " + menu[contador])
}

console.log("o que eu gosto mesmo é de " + menu[1]);

