const par = document.querySelector(".parrafo");
const title = document.querySelector("#tittle");
const inpput = document.querySelector("#contrasena");
const presulta = document.querySelector("#presulta");
const btnadd = document.querySelector("#boton");

console.log({
    par,title,inpput
});



// insertar texto en html

title.innerHTML ="Este es el texto nuevo.";
title.innerHTML ="Este es el <br> texto nuevo.";
//añadir clases


title.classList.add("otraclase");
title.classList.remove("otraclase");

///crear elmentos en el html

document.createElement("img");//posdata debe ser llamado
console.log(document.createElement("img"))
function presult() {
    presulta.innerText = "hiciste click en el bototn";
}
function resutado2() {
    presulta.innerText = " <br> hiciste click en el boton ptra vez";
}


// para un html mas limpio añadir addevenlstener

btnadd.addEventListener('click',resutado2);

