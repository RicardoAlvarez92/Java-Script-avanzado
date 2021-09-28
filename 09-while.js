/* ciclo while nos permite:
repetir bloques de codigo mientras una condicion sea verdadera */

/* NaN ES NOT A Number
isNaN  ES PARA DECIR SI ESTO NO ES UN NUMERO 

ENTONCES EVALUA SI EL DATO QUE INGRESO EL USUARIO ES NUMERO */
/* 
let num1 = parseInt(prompt("ingresa un numero"));


while(isNaN(num1)) {
    num1 = parseInt(prompt("ingresa un numero"));
} */

/* let num1 = parseInt(prompt("ingresa un numero del 1 al 15"));
const num_secreto = 11;
let intentos =1;

while(num1 !== num_secreto) {
    console.log("No adivinaste el numero");
    console.log(`Intento: ${intentos}`);
    intentos++;
    num1 = parseInt(prompt("ingresa un numero"));
}

console.log("Felicidades eres un adivino")
 */


/*     num1 = parseInt(prompt("ingresa un numero"));

do {
    document.write(`<p> El numero introducido es ${num1}</p>`)
    num1 = parseInt(prompt("ingresa un numero"));

}
    while
    (num1 > 5); */

   

 /*    let num = parseInt(prompt("ingresa un numero"));
    let suma = 0;
    let contador =0;

    while( num > 0){
      suma = suma+num;     
          num = parseInt(prompt("ingresa un numero"));
          contador++
    }
*/
   

    let num = parseInt(prompt("Ingresa un numero"));
    let contador = 0;

    while(contador <= num) {
        contador++;

        if(num % contador == 0) { 
            document.write( contador + "<br>");
     }
    }
    if(num < 0){
        alert("Intenta ingresando un numero positivo");
    }
    else if (isNaN(num)){
        alert("No introduzcas letras");
    }


    
  

    







    






