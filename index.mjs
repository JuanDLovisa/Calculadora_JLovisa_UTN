import {Calculadora} from "./calculadora_clase.mjs"
import {input} from "./utils.mjs"

while(true){
    console.clear()
    console.log()
    const opcion = await input(`Calculadora UTN
                                1-Sumar
                                2-Restar
                                3-Multiplicar
                                4-Dividir
                                5-Resto
                                6-Potencia
                                7-Salir
                                Opcion --> `)

    if(opcion === "7") process.exit()

    const n1 = Number(await input("Ingrese el primer numero: "))
    const n2 = Number(await input("Ingrese el segundo numero: "))
    const calculo = new Calculadora(n1,n2)

    switch(opcion){
        case "1": calculo.sumar(); await input(""); break;
        case "2": calculo.restar(); await input(""); break;
        case "3": calculo.multiplicar(); await input(""); break;
        case "4": calculo.dividir(); await input(""); break;
        case "5": calculo.resto(); await input(""); break;
        case "6": calculo.potencia(); await input(""); break;
        default: console.log("Opcion incorrecta")
                 await input("Presione enter para volver al menu...")
    }
}