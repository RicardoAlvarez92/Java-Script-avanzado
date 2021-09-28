/* operador ternario
es una estrucura de flujo (if abreviado)*/

/* const edad = 20; */
var edad = parseInt(prompt("cual es tu edad"));

/* if( edad > 18){
    console.log("Eres mayor de edad");
    else{
        console.log("eres menor de edad");
    }
}*/


/* const mensaje = condicion, la llave y se va a ejecutarsi es true o flase */
const mensaje = edad > 18 ? "eres mayor de edad" : "Eres menor de edad";

document.write(`<p>${mensaje}</p>`);



