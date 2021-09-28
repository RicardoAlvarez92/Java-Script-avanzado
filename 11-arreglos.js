/* arreglos
estructurra de datos */

/* declaracion de arreglos */
const arreglo = [];
const arreglo2 = new Array();




let lenguajes = ["Javascript", "Java", "PHP", "Python", "C#", "C++", "Scala", "Rust", "Ruby", "cobol"];


/* forEach */

    document.write("<ul>");
lenguajes.forEach(function(lenguaje, index){
    document.write(`<li>${index} - ${lenguaje} </li>`);
});
document.write("</ul>")

/* map, crea un nuevo arreglo con los resultados  */
let numeros= Array([2, 3, 4, 27, 19, 12]);
let numeros2= numeros.map(function(numero){
    return numero * 2;

});
console.log(numeros);
console.log(numeros2);

/* includes  determina si un arreglo contine un valor*/
console.log(lenguajes.includes("PHP"));
console.log(lenguajes.includes("go"));

/* filter, crear un nuevo arreglo con todos los elementos que cumplan con la condicion */

let filtrados = numeros.filter(function(numero){
    if(numero > 10){
        return numero;
    }
});
console.log(filtrados);


for(let i = 0; i < 10; i++) {
    arraydiego.push(i);
}

console.log(arraydiego);





