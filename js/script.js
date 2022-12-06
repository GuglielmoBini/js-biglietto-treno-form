/*
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/* STEP 
1- prendo gli elementi dal DOM.
2- raccolgo i dati dell'utente immessi tramite gli input.
3- calcolo il prezzo del biglietto senza sconti.
4- verifico eventuali sconti in base all'età.
5- stampo il prezzo finale in pagina.

*/

// 1- prendo gli elementi dal DOM.
// prezzo biglietto
const targetElement = document.getElementById("ticket-price");
// nome biglietto
const targetName = document.getElementById("ticket-name");

// bottone
const submitButton = document.getElementById("submit");

//inputs
const inputFsName = document.getElementById("firstname-secondname");
const inputkms = document.getElementById("kilometres");
const inputAge = document.getElementById("user-age");

// 2- raccolgo i dati dell'utente immessi tramite gli input.

submitButton.addEventListener("click", function () {
  const fsName = inputFsName.value.trim();
  console.log(fsName);
  const kilometres = inputkms.value.trim();
  console.log(kilometres);
  const userAge = inputAge.value;
  console.log(userAge);

  let price = kilometres * 0.21;
  if (userAge == "under18") {
    price *= 0.8;
  } else if (userAge == "over65") {
    price *= 0.6;
  }

  targetName.innerText = `Complimenti ${fsName}, ecco il prezzo del tuo biglietto:`;

  targetElement.innerText = `${price.toFixed(2)}€`;
});
