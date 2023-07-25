//* chiedi all'utente un numero
const userNumber = parseInt(prompt("Inserisci un numero"));

//* **SE** il numero inserito è pari stampa il numero

if (userNumber % 2 == 0) {
  console.log(userNumber);
}

//* **ALTRIMENTI** aggiungi 1 al numero dato e stampa quel numero
else {
  console.log(userNumber + 1);
}
