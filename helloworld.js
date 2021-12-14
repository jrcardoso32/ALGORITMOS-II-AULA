
let nome="Osni Cardoso"// variavel string
let idade= 32 // varivavel do tipo number
let distanciaproway=0.3 // varivavel number
let str_qualquer=""


console.log("Olá meu nome é ", nome, " e tenho " ,idade, "anos e moro a ", distanciaproway, "km daqui");

// let bairro = prompt("informe o seu bairro")
//alert(bairro)
if(idade>=18){
    console.log("vc é maior de idade");

}else{
    console.log("voce é de menor");
} 
if(idade<15){
    console.log("voce é menor");
}else{
    console.log("vc n é menor");

    // fazer um if else

    console.log("escolha uma opcao");
    console.log("1 - primevera");
    console.log("2 - verao");
    console.log("3 - outono");
    console.log("4 - inverno");
    let opcao =3
    
    switch (opcao){
    case 1:
        console.log("vc escolheu verao");
        break
        
        case 2:
        console.log("voce escolheu verao");
        break

        case 3:
        console.log("voce escolheu outono");
        break

        case 4:
        console.log("voce escolheu inverno");
        break
}

}
let quantidade=15
for(let contador=1; contador <=quantidade; contador++){
    console.log("repetindo pela " , contador, " x ");

}
for(let variavel = 1; variavel<=5; variavel+=10){
    console.log("repetindo denovo pela " ,variavel, " ª x");
}
// let resposta
// do{
//      resposta= prompt("tinha dois dogs, pita e repita, pita morrem, quem ficou?")

// }while(resposta=="repita");


    
