//* creo una lista di nomi e una di cognomi
const guestName = ["Luigi", "Carlo", "Enrico", "Mario", "Andrea"];

const guestSurname = ["Martino", "De Luca", "De Simone", "Del Sesto", "Rossi"];

//* genero un ciclo di 6 nomi e cognomi casuali
const guestList = [];
for (let i = 0; i < 6; i++) {
  const casualName = guestName[Math.floor(Math.random() * guestName.length)];
  const casualSurname =
    guestSurname[Math.floor(Math.random() * guestSurname.length)];

  //* li unisco
  const fullName = `${casualName} ${casualSurname}`;
  guestList.push(fullName);
}

//* Stampo la lista degli invitati
console.log("Lista di invitati:");
console.log(guestList);
