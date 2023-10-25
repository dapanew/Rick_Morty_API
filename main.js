import { consultarPersonajes, buscarPersonajexNombre } from "./controller/controller.js";
let poster = document.getElementById("root");
let previusImg = "";
let nextImg = "";
async function mostrarPersonajes(url) {
   
    let arrayPersonajes = await consultarPersonajes(url);
    let html = "";
    previusImg = arrayPersonajes.previous;
    nextImg = arrayPersonajes.next;
    console.log("previus", previusImg);
    console.log("next", nextImg);
    arrayPersonajes.array.forEach(elementosPersonajes => {
        let posterPersonaje =
            `<div class="card">
<img src="${elementosPersonajes.image}" id="imagenes-card"/>
<br/>
<span>${elementosPersonajes.name}</span>
<span>${elementosPersonajes.id}</span>
<span>${elementosPersonajes.gender} </span>
</div>`;
        html += posterPersonaje;
    });
    poster.innerHTML = html;
}


let buscarButton = document.getElementById("buscar-button");
//async function mostrarPerEncontrados(){
let html = "";
buscarButton.addEventListener("click", async function (event) {
    event.preventDefault();
    let personajeInput = document.getElementById("personaje-input");
    let arrayPersonajesEnco = await buscarPersonajexNombre(personajeInput.value);
    arrayPersonajesEnco.forEach(elePersonajesEncon => {
        let posterPersonaje =
            `<div class="card">
<img src="${elePersonajesEncon.image}" id="imagenes-card"/>
<br/>
<span>${elePersonajesEncon.name}</span>
<span>${elePersonajesEncon.id} </span>
<span>${elePersonajesEncon.create} </span>
</div>`;
        html += posterPersonaje;
    })

    poster.innerHTML = html;


})

mostrarPersonajes();


let navPrevius = document.getElementById("nav-previus");
let navNext = document.getElementById("nav-next");

navPrevius.addEventListener("click", async (event) => {
    //lleva a la pagina anterior
    mostrarPersonajes(previusImg);
})


navNext.addEventListener("click", async (event) => {
    mostrarPersonajes(nextImg);
    //lleva a la pagina siguente 
})
