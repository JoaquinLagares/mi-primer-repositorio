// 2.  **Manipulación de arrays**:
// - Crea una función que encuentre el número más grande en un array.
// - Crea una función que elimine los elementos duplicados de un array.
// - Crea una función que invierta el orden de los elementos en un array.


function numeroMasGrande(numeros){
    let x = 0;
    for (const numero of numeros) {
        if (numero > x){
            x = numero;
        }
        
    }
    return x
}
let numeros = [1,12,123,1234,12300]
//console.log(`El numero mas grande es: ${numeroMasGrande(numeros)}`)
console.log(numeros)

function eliminaDuplicados(lista){
    let resultado = [];
    for (const elemento of lista) {
        if (!resultado.includes(elemento)){
            resultado.push(elemento)
        }
    }
    lista = resultado
    console.log(lista)
}

//eliminaDuplicados(numeros)

function revertirArray(lista){
   console.log( lista = lista.reverse());
}



// 3.  **Objetos**:
// - Crea un objeto "persona" con propiedades como "nombre", "edad" y "profesión".
// - Crea una función que tome un array de objetos "persona" y devuelva un nuevo array con los nombres de todas las personas.

const persona = {nombre : "Joaquin ", edad : 30, profesion : "Mamahuevol"}
let personas = [persona,persona,persona]

function nombreDePersonas(personas){
    let nombres = [];
    for (const persona of personas) {
        nombres.push(persona.nombre)

    }

    return nombres
}
//console.log(nombreDePersonas(personas))

// 4.  **Combinación de tipos**:
// - Crea una función que tome un array de strings y devuelva un objeto donde las claves sean las strings y los valores sean sus longitudes.

const array = ["Perro","Gato","Arbol"];

function conversorAObjeto(array){
    let objeto= {};
    for (const clave of array) {
        objeto[clave] =clave.length;
    }
    return objeto
}
const objeto = conversorAObjeto(array);
console.log(objeto);