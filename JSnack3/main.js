//* creo una lista di numeri
const numbers = [3, 2, 8, 4, 9, 7];

//* inizializzo una variabile d'appoggio dove conservare la somma dei dispari
let numbersOddTotal = 0;

//* creo un ciclo che controlli i numeri
for (let i = 0; i < numbers.length; i++) {
  //* **SE** l'indice è dispari, aggiungiamo l'elemento alla somma
  if (i % 2 !== 0) {
    numbersOddTotal += numbers[i];
  }
}

//* stampiamo la somma dei numeri dispari
console.log("La somma dei numeri in posizione dispari è: " + numbersOddTotal);
