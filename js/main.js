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

/* do {
  var difficolta = prompt("Inserisci livello difficoltà: facile, medio o difficile?");
} while ((difficolta < 0) || (difficolta != "FACILE") || (difficolta != "MEDIO") || (difficolta != "DIFFICILE")); */


while (mine.length < 16) {
  var CPUrandom = randomNumber(1, 100);
  if (isInArray(mine, CPUrandom) == false) {
    mine.push(CPUrandom);
  }
}
console.log("MINE: " + mine);

for (var i = 0; i < 84; i++) {

  var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  console.log(numeroUtente);

  if (isNaN(numeroUtente)) { // Queste condizioni le potrei mettere fuori dal ciclo?
    alert("Attenzione: inserire un numero.");
  }
  else if (isInArray(mine, numeroUtente)) { // Perché se posiziono questo else if (riga 37) al posto di quello
    alert("Hai perso! Ricarica la pagina e ritenta." + " -- Punteggio: " + numeriGiocati.length * 10);// di riga 40 allora non funziona?
    break;
  }
  else if (i == 84) {
    alert("Complimenti! Hai vinto! -- " + "Punteggio: " + numeriGiocati.length * 10);
  }
  else if (isInArray(numeriGiocati, numeroUtente)) {
    alert("Attenzione: numero già presente");
    i--;
  }
  else {
    numeriGiocati.push(numeroUtente);
  }
}

console.log("Il tuo punteggio: " + numeriGiocati.length * 10);
console.log("I TUOI NUMERI ESATTI: " + numeriGiocati);


// PARTE BONUS




// FINE PARTE BONUS



function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}


function isInArray(array, value) {
  for (i = 0; i < array.length; i++) {
    if (value == array[i]) {
      return true;
    }
  }
  return false;
}