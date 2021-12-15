console.log("deu certo");
document.body.append("que legal");


document.write("<br> criar um vetor de numeros e solicitar do usuario uma qtde de numeros");
document.write("<br> Conforme a quantidade repetir a captura de numero a numero ate acabar o laço.");
document.write("<br> percorrer a lista para determinar qual o maior numero e qual o menor")

let numeros = []
let numero

let qtde = Number(prompt("informe quantos numeros deseja capturar"));



for (let contador = 1; contador <= qtde; contador++) {
    numero = Number(prompt("Informe o " + contador + " ª numero"))
    numeros.push(numero)

}

console.log(numeros);

let menor
let maior

for (let contador = 0; contador < numeros.length; contador++) {

    if (contador == 0) {
        menor = numeros[contador]
        maior = numeros[contador]

    } else {

        if (numeros[contador] < menor) {
            menor = numeros[contador]
        }

        if (numeros[contador] > maior) {
            maior = numeros[contador]
        }
    }

}

document.write("<br> O maior numero é " + menor)
document.write("<br> O maior numero é " + maior)
