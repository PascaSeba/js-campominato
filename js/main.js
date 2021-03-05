/* 
- Il computer deve generare 16 numeri casuali tra 1 e 100.
- I numeri non possono essere duplicati
- In seguito deve chiedere all’utente (100 - 16) volte di
  inserire un numero alla volta, sempre compreso tra 1 e 100.
- L’utente non può inserire più volte lo stesso numero.
- Se il numero è presente nella lista dei numeri generati, 
  la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
- La partita termina quando il giocatore inserisce un 
  numero “vietato” o raggiunge il numero massimo possibile di
  numeri consentiti.
- Al termine della partita il software deve comunicare il punteggio,
  cioè il numero di volte che l’utente ha
  inserito un numero consentito. 
  */

var mine = [];
var numeriGiocati = [];

do {
  var difficolta = prompt("Inserisci la difficoltà (facile, media o difficile):").toUpperCase();
} while ((difficolta != "DIFFICILE") && (difficolta != "MEDIA") && (difficolta != "FACILE")); 
/* 1, 1, 1;
   1, 1, 0; */


// PARTE BONUS

switch(difficolta) {

  case "DIFFICILE":
    alert("Hai scelto la difficoltà DIFFICILE, e così sei un temerario, eh?");
    break;
  case "MEDIA":
    alert("Hai scelto la difficoltà MEDIA. Mmmh... Sei uno che osa");
    CPUrandomMedium;
    break;

  case "FACILE":
    alert('Hai scelto la difficoltà FACILE, una partita "tranquilla"');
    CPUrandomEasy;
}

// FINE PARTE BONUS


while (mine.length < 16) {
  if (difficolta == "FACILE") {
    var CPUrandomEasy = randomNumber(1, 100);
    if (isInArray(mine, CPUrandomEasy) == false) {
      mine.push(CPUrandomEasy);
    }
  }
  else if (difficolta == "MEDIA") {
    var CPUrandomMedium = randomNumber(1, 80);
    if (isInArray(mine, CPUrandomMedium) == false) {
      mine.push(CPUrandomMedium);
    }
  }
  else if (difficolta == "DIFFICILE") {
    var CPUrandomHard = randomNumber(1, 50);
    if (isInArray(mine, CPUrandomHard) == false) {
      mine.push(CPUrandomHard);
    }
  }
}
console.log("MINE: " + mine);

for (var i = 0; i < 84; i++) {

  if (difficolta == "FACILE") {
    var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  }
  else if (difficolta == "MEDIA") {
    numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 80"));
  }
  else if (difficolta == "DIFFICILE") {
    numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 50"));
  }

  if (isNaN(numeroUtente)) {
    alert("Attenzione: inserire un numero.");
    continue;
  }
  else if (isInArray(numeriGiocati, numeroUtente)) {
    alert("Attenzione: numero già presente");
    continue;
  }     
  else {
    numeriGiocati.push(numeroUtente);
  }

  if ((difficolta == "FACILE") && (numeroUtente >= 101) || (numeroUtente <= 0)) {
    alert("Numero non consentito");
    numeriGiocati.pop();
  }

  if ((difficolta == "MEDIA") && (numeroUtente >= 81) || (numeroUtente <= 0)) {
    alert("Numero non consentito");
    numeriGiocati.pop();
  }

  if ((difficolta == "DIFFICILE") && (numeroUtente >= 51) || (numeroUtente <= 0)) {
    alert("Numero non consentito");
    numeriGiocati.pop();
  }

  if (isInArray(mine, numeroUtente)) {
    alert("Hai perso! Ricarica la pagina e ritenta." + " -- Punteggio: " + numeriGiocati.length * 10);
    numeriGiocati.pop();
    break;
  }

  if (i == 83) {
    alert("Complimenti! Hai vinto! -- " + "Punteggio: " + numeriGiocati.length * 10);
  }
}

console.log("Il tuo punteggio: " + numeriGiocati.length * 10);
console.log("I TUOI NUMERI ESATTI: " + numeriGiocati);



//FUNZIONI

function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}


function isInArray(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value == array[i]) {
      return true;
    }
  }
  return false;
}

// FINE FUNZIONI