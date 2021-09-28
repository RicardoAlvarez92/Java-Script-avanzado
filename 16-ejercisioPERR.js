

/*  fetch("https://api.thecatapi.com/v1/images/search") */ 



/* const url = https://dog.ceo/api/breeds/image/random/3

fetch(ulr)
.then(Response => Response.json())
.then(data => {
    let element = document.getElementById("perros")
    element.innerHTML = 
    <p>${data.name}</p>
    <p>${data.order}</p>
    <img src={data.sprites.front_default}/>;

})
console.log
catch(err=>console.log(err)) */


const $btnDog = document.querySelector("#btnDog");
const $perr = document.querySelector("#perr");

$btnDog.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(Resp => Resp.json()).then(data => {
            console.log(data);

            const imgDog = document.createElement("img");
            imgDog.src = data.message;
             $perr.appendCHild(imgDog);

        });
})  
