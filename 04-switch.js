/* switch
estructura de control de flujo, nos ayuda a tomar decisiones mediante la evalucacion de una condicion. (tipo if) */

/*se puede usar en menus*/



/* const edad= parseInt(prompt("Ingresa tu edad"))
let mensaje = ""; */

/* traduccion en if seria:
if(edad === 18){
    mensaje = "acaba de cumplir la mayoria de edad";
}*/

/* switch (edad) {
    case 18:
        mensaje = "Acabas de cumplir la mayoria de edad";
        break;
    case 25:
        mensaje = "ya eres un adulto";
        break;
        case 70:
        mensaje = "ya eres de la tercera edad";

 default:
     mensaje= "Fuera del rango de edad"
}

document.write(`<p>${mensaje}</p>`) */


const nombre= prompt("Ingresa tu Nombre");
let mensaje = "";

switch(nombre.toLowerCase()){
    case "carlos":
        mensaje= "Eres administrador";
        break;
    case "juan":
        mensaje = "Eres usuario";
        break;
    default:
        mensaje = "No tienes prmisos para usar el sistema";
        break; 

}

document.write(`<p>${mensaje}</p>`)

