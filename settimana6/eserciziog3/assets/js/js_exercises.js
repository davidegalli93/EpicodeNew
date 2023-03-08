/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/

let myself = 'Davide';

/* ESERCIZIO 2
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish', 'chinchilla']

for (let i = 0; i < pets.length; i++) {
    console.log(pets[i])
}

/* ESERCIZIO 3
    Scrivi del codice per aggiungere all'array pets un nuovo elemento.
*/

pets.push('mouse')
console.log(pets)

/* ESERCIZIO 4
    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/

pets.pop()
console.log(pets)

/* ESERCIZIO 5
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.reverse()
console.log(pets)


/* ESERCIZIO 6
    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". 
    Stampa false in caso contrario.
*/

let es6 = pets.filter(function (franco) {
    return franco.charAt(0) === 'c'
})

console.log(es6)

/* ESERCIZIO 7
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà
     "licensePlate" con valore a tua scelta.
*/
const cars = [
    {
        brand: 'Ford',
        model: 'Fiesta',
        color: 'red',
        trims: ['titanium', 'st', 'active'],
    },
    {
        brand: 'Peugeot',
        model: '208',
        color: 'blue',
        trims: ['allure', 'GT'],
    },
    {
        brand: 'Volkswagen',
        model: 'Polo',
        color: 'black',
        trims: ['life', 'style', 'r-line'],
    },
]

const numeroTarga = ['AE345SD', 'AE234ER', 'TR543RE'];

for (let i = 0; i < cars.length; i++) {
    cars[i].licensePlate = numeroTarga[i];
}

console.log(cars);

/* ESERCIZIO 8
    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars",
     rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/

function addCar(brand, model, color, licensePlate, trims) {
    const newCar = { brand, model, color, licensePlate, trims };
    cars.push(newCar)
    return cars.length
}

const newLength = addCar("Volkswagen", "Golf", "black", "FE543ER", 'life', 'style', 'r-line');
console.log(cars);
console.log(newLength);


/* ESERCIZIO 9
    Scrivi una funzione per salvare il primo elemento della proprietà "trims" di ogni auto
     nel nuovo array "justFirstTrims", sotto definito.
*/


// inserisci la tua funzione qui

/* ESERCIZIO 10
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
    const car = cars[i];  // iterare attraverso l'array "cars"
    if (car.color.length <= 4) { // controllo la lunghezza della proprietà "color"
        console.log('Fizz');
    } else {
        console.log('Buzz');
    }
}

console.log(cars)

/* ESERCIZIO 11
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.
*/

const filteredCars = cars.filter(car => car.trims.length > 2);

console.log(filteredCars);

/* ESERCIZIO 12
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/



/* ESERCIZIO 13
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al 
    raggiungimento del numero 32.
*/
const numericArray = [
    6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0
while (numericArray[i] != 32) {
    console.log(numericArray[i])
    i++
}

/* ESERCIZIO 14
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
