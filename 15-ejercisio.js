  const $btnCat = document.querySelector("#btnCat");

$btnCat.addEventListener("click", () => {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(Resp => Resp.json()).then(data => {
            console.log(data);
            const imgCat = document.createElement("img");
            imgCat.src = data[0].url;
            document.body.append(imgCat);
        });
})  

   /*  const $btnCat = document.querySelector("#btnCat");
      const $Cats = document.querySelector("#Cats");

$btnCat.addEventListener("click", () => {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(Resp => Resp.json()).then(data => {
            console.log(data);
            const imgCat = document.createElement("img");
            imgCat.src = data[0].url;
            $Cats.appendChild(imgCat);
        });
    })  */
 

    /* destructuracion 
    se usa para extraer de un arreglo u objeto*/

  /*   const $btnCat = document.querySelector("#btnCat");

    $btnCat.addEventListener("click", () => {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(Resp => Resp.json()).then(data => {
                console.log(data);

                const [cat] = data;
                const cat = data [0];


                console.log(cat);
                const imgCat = document.createElement("img");

                imgCat.src = data[0].url;
                $divCats.appendChild(imgCat);
            });
        }) */
 