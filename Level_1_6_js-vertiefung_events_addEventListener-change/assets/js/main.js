/*
In dieser Übung werden wir den Eventhandler change kennenlernen.

Der Eventhandler change wird bei einer erfolgten Änderung ausgelöst. Diese Wertänderung wird im Normalfall in einem Formularelement stattfinden.

Schreibe eine Funktion, die im Paragraph den Text anpasst, nachdem du ein Element aus der Liste ausgewählt hast.

Assets:
e.target.value
addEventListener("change", e => {...} )
innerHTML oder textContent
*/



const selectElement = document.querySelector('#mySelect');

selectElement.addEventListener('change', (event) => {
    const result = document.querySelector('#optionSelected');
    result.textContent = `Sie haben ausgewählt ${event.target.value}`;
});