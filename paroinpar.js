/*const Numero = prompt("¿Numero?");


if(Numero%2 == 0){
    document.write("Tu numero "+ Numero + " es par");
}
else {
    document.write("Tu numero "+ Numero + " es Inpar");
}*/


/* var Numero1, Numero2, aux;

Numero1 = parseInt(prompt("¿Numero 1?"));
Numero2 = parseInt(prompt("¿Numero 2?"));

if(Numero1 > Numero2){
    aux = Numero1;
    Numero2 = Numero2;
    Numero2 = aux;
}

for(var c = Numero1; c<= Numero2;c++){
    if(c%2  0)
    document.write(c +"<br>")
} */

/*
for(var i=0;) i<=100; i++){
    if(i%2==0){

    }
    document.write(i+ "<br>")
} */



/* for (var x = userInputInicio; x < userInputFinal; x++){     
    //numeros impares E pares.
    if( x % 2 == 0 && x % 3 == 0) {
        document.write(x + ",sbhs "); 
    } 
} */

/* function numeros.impares(numero1, Numero2){
for(let i = Numero1; i < numero2 + 1; i+= 1){
    if (i % 2 !==0) {
        let num_imp - []
        num-imp.push(i)
        console.log(`Los numeros impares son $(num_imp}`)
    }
}
}

n1 - parseInt(prompt("Introduce el primer Numero:"));
n2 = parseInt(prompt("Introduce el segundo numero")); */


num1= parseInt(prompt("inserta un numero"));
num2= parseInt(prompt("inserta un numero mayor al anterior"));
    


if(num1 < num2){

    for(let i= num1 + 1; i < num2; i++ ){

        if(i % 2 !=0) {
            document.write(` ${i} <br>`);
        }
    }
} 
else{ 
    document.write("ERROR");
}

    


