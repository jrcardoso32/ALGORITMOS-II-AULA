// criar uma classe calculadora com os atributos numeroA e numer B
// criar os metodos somar, subtrair, dividir, multiplicar, capturar numeros e todos recebem parametro de A e B com prompt
// esses metodos serao chamados por botoes no html usando onclick = "nome da funcao()"

class Calculadora {
    numeroA
    numeroB

    constructor(numeroA, numeroB) {

        this.numeroA = numeroA
        this.numeroB = numeroB
    }

    capturarNumeros(Na, Nb, operacao) {
        this.numeroA = Na
        this.numeroB = Nb

        switch (operacao) {
            case "somar":
                return this.somar()
                break;

            case "diminuir":
                return this.subtrair()
                breaK;
        }
    }
    somar() {
        return this.numeroA + this.numeroB
    }
    subtrair() {
        return this.numeroA - this.numeroB
    }
}



let calculadora = new Calculadora(1, 2)
console.log("A soma é " + calculadora.somar());
console.log("A subtração é " + calculadora.subtrair());
console.log("a operacao de soma é " + calculadora.capturarNumeros(5, 3, "somar"));
console.log("a operacao de subtração é " + calculadora.capturarNumeros(5, 3, "subtrair"))
