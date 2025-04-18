// ## 8. Ejercicios Prácticos

// 1.  Crea una función que calcule el área de un círculo.
const calcularAreaDeCirculo = (radio) => 3.14*radio**2;
console.log(calcularAreaDeCirculo(3));

// 2.  Crea una función que determine si un número es par o impar.
const parOImpar = (numero) => (numero%2 ==0 ? "par" : "impar");
console.log(parOImpar(4));

// 3.  Crea un objeto "calculadora" con métodos para sumar, restar, multiplicar y dividir.
const calculadora ={
    sumar : (x,y) =>  x + y,
    restar : (x,y) =>  x - y,
    multiplicar : (x,y) => x *y,
    dividir : (x,y) => x / y
}

console.log(calculadora.sumar(1,1));
console.log(calculadora.restar(10,4));
console.log(calculadora.multiplicar(3,3))
console.log(calculadora.dividir(25,5));
// 4.  Crea una función que tome un array de números y devuelva un nuevo array con los números pares.

let numeros = [1,2,3,4,5]

const soloParesArrow = (array) => array.filter(n=> n%2 ===0);
function soloPares(array){
    let pares = [];
    for (const n of array) {
        (n%2 ==0 ? pares.push(n): null)
    }
    return pares;
}

console.log(soloPares(numeros))
console.log(soloParesArrow(numeros))

// 5.  Crea una función que simule un contador utilizando closures.
function contador(){
    let contador = 0;
    return function(){
        contador++;
        console.log(contador);
    }
}

const incrementar = contador();
incrementar();
incrementar();
// 6.  Crea un objeto "persona" con propiedades como "nombre", "edad" y un método "presentarse" que imprima una presentación de la persona.

const persona= {
    nombre : "Joaquin",
    edad : 30,
    saludar : function (){
        console.log(`Hola, me llamo ${this.nombre} y  tengo ${this.edad} años`)
    }
}

persona.saludar();
