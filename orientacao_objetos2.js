// criar uma classe professor com atributos
// nome string
//idade number
// qtdeAlunos number

// metodo, fazerChamada e recebe por parametro o nome do aluno e retorna presenca verificada
// calculaMedia, recebe tres notas e recebe media

//apos criar classe instanciar 1 objeto da classe professor para atribuir os valores
// atualizar algum valor de atributo do professor
// utilizar os metodos do professor

class Professor {
    nome
    idade
    qtdeAlunos



    constructor(nome, idade, qtdeAlunos) {
        this.nome = nome
        this.idade = idade
        this.qtdeAlunos = qtdeAlunos



    }
    fazerChamada(nomeAluno) {
        return + nomeAluno + " Presente em sala"

    }

    calculaMedia(nota1, nota2, nota3) {
        return (nota1 + nota2 + nota3) / 3

    }


}



let professor1 = new Professor("fulano", 60, 30)
professor1.qtdeAlunos = 20

console.log(professor1.fazerChamada("fulaninho"));

let media = professor1.calculaMedia(5, 7, 10)
console.log(media);

// instanciar outro professor e utilizem seus atributos e metodos
// ler valores separadamente
// atualizar valores e ver antes e depois
//fazer mais de uma chamada
// calcular mais de uma media









let professor2 = new Professor("Rubens", 92, 45)
console.log(professor2.qtdeAlunos);
console.log(professor2.idade);
console.log("qtde antes " + professor2.qtdeAlunos);


professor2.qtdeAlunos = 52
console.log("qtde depois " + professor2.qtdeAlunos);

console.log(professor2.professor2.qtdeAlunos);

console.log(professor2.fazerchamada ("fulaninho"));
console.log(professor2.fazerChamada("outra pessoa"));



