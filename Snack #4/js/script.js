/*
Snack #4:
Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.
*/


for (i = 0 ; i < 10 ; i++) {

    var randomGuest = randomNameSurname();
    console.log(randomGuest);
    document.getElementById("guest_list").innerHTML += "<li>" + randomGuest + "</li>";
    
}



// Functions
function randomNameSurname() {

    var names = ["Fabio", "Ginevra", "Giulio", "Silvia", "Vittorio", "Grazia"];
    var surnames = ["Rossi", "Gialli", "Blu", "Verdi", "Neri", "Bianchi"];

    var randomName = randomArrayElement(names)
    var randomSurname = randomArrayElement(surnames)
    
    return randomName + " " + randomSurname

}

function randomArrayElement(array) {

    return array[Math.floor(Math.random() * array.length)];

}