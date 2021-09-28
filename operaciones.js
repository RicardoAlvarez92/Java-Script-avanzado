n1= parseInt(prompt("inserta un numero"));
n2= parseInt(prompt("inserta otro numero"));


if(n1 < n2){
     function sumayresta(n1, n2){
         let S = n1 + n2;
         let R = n1 - n2;
         Document.write("la suma es = " + S + "<br>");        
         document.write("la resta es = " + R + "<br>");
     }
    }
     else if( n1 > n2){
        let M = n1 * n2;
        let D = n2 / n1;
        Document.write("la Multiplicación es = " + M + "<br>");        
         document.write("la Division es = " + D + "<br>");
     }

     else{
         alert("Ingresa 2 numeros diferentes")
     }


   /*  for(let i= num1 + 1; i < num2; i++ ){

        if(i % 2 !=0) {
            document.write(` ${i} <br>`);
        }
    }
} 
else{ 
    document.write("ERROR");
}

function suma (num1, num2) {
    var resultado1 = num1 + num2;
    console.log = (resultado1);
    document.write = (resultado1); */