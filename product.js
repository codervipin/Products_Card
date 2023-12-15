fetch("https://fakestoreapi.com/products").then(Response => Response.json()).then(data => {console.log(data)
displayData(data)});


let mainDiv = document.querySelector("div");

function displayData(data){
    data.forEach(element => {
        console.log(element)

        mainDiv.innerHTML += `<div class="card">
        <img src="${element.image}" alt="">
        <h1>${element.title}</h1>
        <h3>$ ${element.price}</h3>
    </div>`
       
    
    });
}