/*
Snack #5:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
Stampa l'array nella console.
*/

// Empty Array
var array = [];


for (i = 0 ; i <= 5 ; i++) {

    var userNumbers = parseInt(prompt("Inserisci un numero"));
    console.log(userNumbers);
    document.getElementById("numbers").innerHTML += "<li>" + userNumbers + "</li>";

    if (isOdd(userNumbers) == "dispari") {
        array.push(userNumbers);
    }

}

console.log(array);
document.getElementById("odd_numbers").innerHTML += "I numeri dispari sono: " + array;

// Functions
function isOdd(number) {

    if ( (number % 2) == 0) {
        return "pari"
    }
    else {
        return "dispari"
    }

}