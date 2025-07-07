console.log('fa caldo')

// @wd-147
// Ciao ragazzi,
// Esercizio di oggi:
// nome repo: js-paliedispari

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedere all’utente di inserire una parola


// const parola = prompt('inserisci parola')

// // Creare una funzione per capire se la parola inserita è palindroma

// // qui voglio che mi venga restituito il valore o true o false 
// function palindroma(text) {

//   return text === text.split('').reverse().join('')

// }

// if per controllo finale 
// ho aggiunto che la lunghezza della parola deve esser minimo di 4 lettere e che la lunghezza della parola deve esser pari (in quanto palindrome devono esserlo )


// if (parola.length >= 4 && parola.length % 2 === 0 && palindroma(parola) ) {
//   console.log( `la parola è palindroma `)

// }else {
//   console.log( `la parola non è palindroma `)
// }


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// const SceltaOdds = prompt (`scegli pari o dispari`)
const SceltaNumero = parseInt(prompt(`scegli un numero da 1 a 5`))

function RandomNumberPc() {
  return Math.floor(Math.random() * 5 +1 )
}

const numeroPc = RandomNumberPc()

let somma = SceltaNumero + numeroPc;


console.log(somma)














// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// Domande da farsi quando si crea una funzione:
// Come dovrebbe chiamarsi?
// Ho bisogno di parametri?
// Devo restituire un valore?
// Se sì, di che tipo?

// Buon lavoro e buon divertimento! 🙂

// >
