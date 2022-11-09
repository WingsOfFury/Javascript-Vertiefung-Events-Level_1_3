/*
Schreibe wieder eine kleine App, die die Hintergrundfarbe ändert.
Schreibe 3 Funktionen:

1. Ändere die Hintergrundfarbe, wenn auf einen Button 
geklickt wird.

2. Ändere die Hintergrundfarbe wenn die Regler verschoben werden in den jeweiligen Farbwert.

3. Konvertiere Dezimal zu Hex.
Assets:

let count = 0; // global variable
HTML CSS Code befindet sich im Kommentar
*/


// Funktion Nr.1 
function changeBackground(color){
    document.body.style.background = color;
}

// Funktion Nr.2
function changeHandle() {
    let red = document.getElementById("rot").value;
    let green = document.getElementById("gruen").value;
    let blue = document.getElementById("blau").value;
    let color = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.backgroundColor = color;
    document.getElementById("output").innerHTML = ": " + color;
}

document.getElementById("changeHandle").addEventListener("input", changeHandle);
document.getElementById("changeHandle").addEventListener("input", changeHandle);
document.getElementById("changeHandle").addEventListener("input", changeHandle);


// Funktion Nr.3
// Mir fehlt nur noch der Text "Wir haben die Farbe 3,4,5 mal geändert"
//