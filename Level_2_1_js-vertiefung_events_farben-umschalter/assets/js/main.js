/*
Schreibe eine kleine App, die die Hintergrundfarbe ändert.
Nutze: onclick, HTML und CSS befinden sich im Kommentar.
*/




let backgroundColor = document.getElementById("body")
let headlineColor = document.getElementById("umschalter")

let h1 = document.getElementsByTagName("h1")
let p = document.getElementsByTagName("p")
console.log(p)


function color1() {
    backgroundColor.style.backgroundColor = "#696969";
    p[0].style.color = "#ffffff";
    h1[0].style.color = "#ffffff";
}
function color2() {
    backgroundColor.style.backgroundColor = "#FFFFFF";
    p[0].style.color = "#000000";
    h1[0].style.color = "#000000";
}
function color3() {
    backgroundColor.style.backgroundColor = "#0301ff";
    p[0].style.color = "#ffffff";
    h1[0].style.color = "#ffffff";
}
function color4() {
    backgroundColor.style.backgroundColor = "#ffff00";
    p[0].style.color = "#000000";
    h1[0].style.color = "#000000";
}

