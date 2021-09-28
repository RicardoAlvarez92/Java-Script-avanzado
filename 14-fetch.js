/* fetch nos permite hacer peticiones http desde javascript */

/* json = javascript object notation */
/* 
const peticion = fetch("https://jsonplaceholder.typicode.com/posts")
.then (resp => resp.json()).then(data => {
    console.log(data);
});

console.log(peticion);
 */

/* const peticion = fetch("https://jsonplaceholder.typicode.com/posts")
.then(function (resp) {
    console.log (resp)
})
.then (resp => resp.json()).then(data => {
    console.log(data);
});

console.log(peticion); */


/* accedemos  */

const peticion = fetch("https://jsonplaceholder.typicode.com/posts")
.then (resp => resp.json()).then(data => {
    console.log(data);
}).catch(e => {
    console.log(e);
});

console.log(peticion);






