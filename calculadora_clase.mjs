export class Calculadora{

    constructor(n1, n2){
        this.n1 = n1
        this.n2 = n2
    }

    sumar(){
        console.log(`El resultado ${this.n1} + ${this.n2} es: ${this.n1 + this.n2}`)
    }

    restar(){
        console.log(`El resultado ${this.n1} - ${this.n2} es: ${this.n1 - this.n2}`)
    }

    multiplicar(){
        console.log(`El resultado ${this.n1} * ${this.n2} es: ${this.n1 * this.n2}`)
    }

    dividir(){
        console.log(`El resultado ${this.n1} / ${this.n2} es: ${this.n1 / this.n2}`)
    }

    resto(){
        console.log(`El resultado ${this.n1} % ${this.n2} es: ${this.n1 % this.n2}`)
    }

    potencia(){
        console.log(`El resultado de ${this.n1} ** ${this.n2} es: ${this.n1 ** this.n2}`)
    }
}