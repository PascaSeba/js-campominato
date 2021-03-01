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

var randomCPUNumbers = numberGenerator(16, 1, 100);
console.log("Mine: " + randomCPUNumbers);


function numberGenerator(n, min, max) {

    var mine = [];

    for (var i = 0; i < n; i++) {

        do {
            var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (mine.includes(numeroRandom));

        mine.push(numeroRandom);
    }
    return mine;
}

var numeriGiocati = [];

do {
  var numeroUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e 100:"));
  numeriGiocati.push(numeroUtente);
} while (numeriGiocati.length < 3);
console.log("Numeri giocati: " + numeriGiocati);

if (numeroUtente == numeriGiocati.length) {
    alert("Questo numero è già stato inserito. Inserisci un altro numero.");
    numeriGiocati.pop();

}

