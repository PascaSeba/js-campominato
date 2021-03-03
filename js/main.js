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


while (mine.length < 16) {
  var CPUrandom = getRandomIntInclusive(1, 100); 
  if (!(isInArray(mine, CPUrandom))) {
    mine.push(CPUrandom);
  }
}
console.log("MINE: " + mine);

for (i = 0; i < 84; i++) {
  var tmp = 0;
  
  if (!(isInArray(numeriGiocati, CPUrandom))) {
    numeriGiocati.push(numeroUtente);
  }

  if (tmp =! 0) {
    alert("Attenzione! Inserisci un numero");
  }
  
  var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));

  tmp++
}

console.log(numeriGiocati)






function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function isInArray(array, value) {
  for (i = 0; i < array.length; i++) {
    if (value == array[i]) {
      return true;
    }
  }
  return false;
}