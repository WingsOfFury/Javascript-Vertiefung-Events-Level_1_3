/*
In dieser Übung werden wir uns weiter mit JS Events beschäftigen.

Schreibe eine Funktion, die einen Klickzähler hochzählt, wenn du auf einen Button klickst.
Der HTML und CSS Code befindet sich im Kommentarbereich.


Assets:
getElementById()
anzahl = 0;   // Es ist wichtig, hier zu initiieren!
anzahl += 1;
innerHTML
*/




let button = document.getElementById("clickMe"),
    count = 0;
button.onclick = function () {
    count += 1;
    button.innerHTML = "Click me: " + count;
};
