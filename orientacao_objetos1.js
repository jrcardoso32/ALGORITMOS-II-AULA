console.log("deu certo");
//aluno
// atributos = variaveis (5)
// nome tipo string
// idade tipo number
// matricula
//senha
// nota tipo number // 
// metodos = funcoes sem o comando function
//conversa(ouviu) --> return resposta
// responderChamada(Professor)---> " professor, meu_nome presente"
//meApresentar()------->> "meu nome nome NOME tenho xx anos, minha matricula é xxx"

class Aluno {
    nome
    idade
    matricula
    senha
    nota


    //declaracao do construtor que sera chamado 
    //de forma externa para criar um OBJETO da classe aluno

    constructor(nome, idade, matricula, senha, nota) {
        //passando os valores do parametros para os meus atributos, diferenciando com (this)
        this.nome = nome
        this.idade = idade
        this.matricula = matricula
        this.senha = senha
        this.nota = nota

    }

    conversar(ouviu) {
        return ouviu + " legal fera"
    }
    chamarProfessor(mensagem) {
        return ", ja resolveu era isso (" + mensagem + ")"
    }

    meApresentar(){
        return " oi, meu nome é " +this.nome+ "tenho" +this.idade+ " anos, a matricula é= " + this.matricula+ "prefiro nao informar a senha"

    }
}


let nome = "osni"

let aluno1 = new Aluno("osni", 32, "000", "123#123", 10)

let alunoX = new Aluno("miranha", 20, "miranha3", "tonystark", 10)

console.log(aluno1);
console.log(aluno1.nome);
console.log(aluno1.matricula);
console.log(alunoX.senha);

aluno1.nome = "xxx"
console.log(aluno1);

alunoX.nome = "outro nome"
alunoX.idade = 13
alunoX.matricula = "002"
alunoX.senha = "123"
alunoX.nota = 2

console.log(alunoX);
console.log(alunoX.idade);
console.log(alunoX.senha);
console.log(alunoX.nota);

let colega = new Aluno("Robsu", 31, "saveiro123", "424242", 8)
console.log(colega);
colega.matricula = "saveiro123456"


console.log(aluno1.conversar("ubhiuhiu"));

document.write(aluno1.conversar("sobre o filme do miranha"))

let resposta = aluno1.conversar("sobre o filme do miranha")

console.log(resposta);

console.log(alunoX.conversar("nada a declarar"));



//instanciando um objeto da classe aluno com os valore dos atributos

let aluno10 = new Aluno("derik", 20, "909090", "eu sou derik", 2)
console.log(aluno10);

// como acessar cada atributo

console.log("ola, meu nome é" +aluno10.nome);

document.writeln("oi, eu tenho " + aluno10.idade + " anos")

let variavel = aluno10.matricula.matricula
// como atualizar o atributo de um objeto? (atualizar 3 atributos)

aluno10.nome = "cleberson"
aluno10.idade = 14
aluno10.senha = "1234"
console.log(aluno10);

console.log(aluno10.conversar("aprendi orientação de objetos"));

// executando metodos de um objeto da classe aluno
//

console.log(aluno10.chamarProfessor ("erro na linha 64"));

console.log(aluno10.meApresentar() );



