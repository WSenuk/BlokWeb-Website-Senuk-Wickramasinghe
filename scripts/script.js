const openMenuButton = document.querySelector("header > button");
const nav = document.querySelector("header nav");
const kerstButton = document.querySelector("header section:first-of-type button");


openMenuButton.onclick = openMenu;

function openMenu() { /*1.1*/
    const isOpen = nav.getAttribute("open") === "true";
    nav.setAttribute("open", isOpen ? "false" : "true");
    openMenuButton.classList.toggle("transform", !isOpen); /*1.2*/
}

kerstButton.onclick = kerstThema;

function kerstThema() {

    document.body.classList.toggle("kerstActive");
}




const helpButton = document.querySelector("main button");/*1.3*/

const helpDialog = document.querySelector("main dialog");

helpButton.addEventListener("click", () => {
  helpDialog.show();
});



/*Bronnen
-1.1: Ronald heeft me geholpen met de hamburger menu, maar hij had het gedaan met document.getElementById.
-1.2:Hier heb ik wel een class gebruikt.Voorbeeld van Codepen. Dit helpt om de sluit button aan te roepen. 
 Ik heb ook de functie toggle gevonden door AI te vragen.Prompt:How do I turn off the kerst mode when I want to get out of it?
 -1.3: Ik heb de code van codepen gebruikt om een hulp know te maken: https://codepen.io/shooft/pen/vENrZvj

 */