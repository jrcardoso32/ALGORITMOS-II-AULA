/*
SOLICITE UMA QTDE DEFINIDA DE NUMEROS A SEREM CAPTURADOS,
PARA CADA CAPTURA DEVE VERIFICAR QUAL MENOR NUMERO E QUAL O MAIOR NUMERO
APOS A CAPTURA EXIBIR O MENOR E MAIOR E CALCULAR A MEDIA DESSES NUMEROS

*/

/*
repita indefinidamente até que o usuario decida parar
para cada loop deve perguntar o nome e marca do carro

*/


let numero
let qtde
let menor
let maior
let soma
let media

Let qtde = Number (prompt ("Quantos numeros serao capturados"))
let menor
let maior

for (let contador = 1 contador<= qtde; contador ++){
    let numero = number(prompt ("informe o" + contador+ " ª numero"))

    if(contador==1){
        menor = numero
        maior = numero

    }else{

        if(numero<menor){
            menor=numero
              
}
if (numero>maior){
    maior=numero
    
}
media=soma/qtde
alert("menor " +menor)
alert(" maior " + maior)
alert("media " +media)


}





