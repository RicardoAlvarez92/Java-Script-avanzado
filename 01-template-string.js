const nombre = prompt("¿Cual es tu nombre?");
const edad = prompt("¿y que edad tienes?");

console.log("Hola " + nombre + " saludos. mencionas que tienes " + edad + " años");

const saludo = `<h1>hola ${nombre} saludos.<br> mencionas que tienes ${edad} años</h1>`;
document.write(saludo); 