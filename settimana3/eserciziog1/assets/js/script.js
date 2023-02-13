/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
2 4 6 10*/


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due
 numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, 
 ma se il valore dei due parametri è il medesimo 
 deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(numero,numero1) {
    somma = numero + numero1;
    if (numero != numero1) {
        return somma;
    } else {
        return somma = (numero + numero1) * 3;
    }
};

crazySum(4,5);
console.log(somma);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero
 intero n come parametro, e ritorna true se n è compreso 
 tra 20 e 100 (incluso) oppure  se n è uguale a 400.
*/

function boundary (numero){ 
if (numero >= 20 && numero <= 100 || numero === 400){
    return true;
} else {
    return false;
}
}

console.log(boundary(4))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta 
 un numero positivo come parametro. La funzione deve controllare
 che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
 if 3 = 0 if 70 0
*/

function check3and7 (numero){
    if (numero % 3 === 0 || numero % 7 === 0){
    return true
} else {
    return false;
}
}

console.log(check3and7(9));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")

 non fa niente
 */



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
non fa niente
 */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
 non fa niente
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", 
 che accetta come parametro un numero n e ritorna un'array 
 contenente n numeri casuali inclusi tra 0 e 10.
*/

var array = [];

function giveMeRandom (numero){
    if (typeof(numero) === "number"){
        for (let i = 0; i < numero; i++){
            array.push(Math.floor(Math.random()*11));
        }
        return array
    } else{
        return false;
    }
}

console.log(giveMeRandom(6));
