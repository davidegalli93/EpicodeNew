/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

const concatenate = function (str1, str2) {
  let partials = str1.slice(0, 2) + str2.slice(str2.length - 3)
  let finalString = partials.toUpperCase()
  console.log(finalString)
}

/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
 */

const createOdds = function aaa() {
  let array = []
  for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
      array.push(i)
    }
  }
  console.log(array);
}

function aaa();

/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */

const skipFive = function () {
  let array = []
  for (let i = 1; i < 100; i++) {
    if (i % 5 === 0) {
      array.push(i)
    }
  }
  console.log(array)
}

/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

const createRandomArray = function () {
  let array = []
  for (let i = 0; i < 10; i++) {
    array.push(Math.ceil(Math.random() * 100))
  }
  console.log(array)
}

/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

const findEvenNumbers = function (arr) {
  let evenArray = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i])
    }
  }
  console.log(evenArray)
}

let array = [34, 67, 35, 85, 100, 4]
findEvenNumbers(array)

/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
 */

let numbers = [4, 76, 357, 59, 1]

let sumArrayElements = function (arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  console.log(sum)
}

/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/

let incrementArrayElements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i]++
  }
  console.log(arr)
}

/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

const replaceWithLength = function (arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].length)
  }
  console.log(result)
}

/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/

const deleteEven = function (arr) {
  let counter = 0
  while (counter !== arr.length) {
    if (arr[counter] % 2 === 0) {
      arr.splice(counter, 1)
    } else {
      counter++
    }
  }
  console.log(arr)
}

/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

const createRandomArrayWithoutDuplicates = function () {
  let array = []
  for (let i = 0; i < 10; i++) {
    let added = false
    while (!added) {
      let numberToAdd = Math.ceil(Math.random() * 100)
      if (!array.includes(numberToAdd)) {
        array.push(numberToAdd)
        added = true
      }
    }
  }
  console.log(array)
}

/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

const reverseArray = function (arr) {
  let inverted = []
  for (let i = 0; i < arr.length; i++) {
    inverted.push(arr[arr.length - 1 - i])
  }
  console.log(inverted)
}
