class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.location = location
    }
    confrontaEta(persona2) {
        if (this.age > persona2.age) {
            console.log(this.firstName + ' è più vecchio di ' + persona2.firstName)
        } else {
            console.log(persona2.firstName + ' è più vecchio di ' + this.firstName)
        }
    }
}

const davide = new User('davide', 'galli', '29', 'Milano')
const franco = new User('franco', 'gigio', '36', 'Roma')

davide.confrontaEta(franco)

const listaAnimali = []
let nomeAnimale = document.getElementById('nomeAnimale')
let nomePadrone = document.getElementById('nomePadrone')
let tipoAnimale = document.getElementById('tipoAnimale')
let specieAnimale = document.getElementById('specieAnimale')
let bottone = document.getElementById('buttonForm')
let puntoLista = document.getElementById('Lista')

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName,
            this.ownerName = ownerName,
            this.species = species,
            this.breed = breed
    }
    stessoPadrone(pet2) {
        return this.ownerName === pet2.ownerName
    }
}

const pet1 = new Pet('gigi', 'pippi', 'dog', 'labrador')
const pet2 = new Pet('sergio', 'treee', 'dog', 'cocker')

pet1.stessoPadrone(pet2)

let aggiungiAnimale = () => {
    puntoLista.innerHTML = ' '
    listaAnimali.forEach((Pet) => {
        let nuovoPuntoElenco = document.createElement('li')
        nuovoPuntoElenco.innerHTML = Pet.petName + ' ' + Pet.ownerName + ' ' + Pet.species + ' ' + Pet.breed
        puntoLista.appendChild(nuovoPuntoElenco)
    })
};

bottone.addEventListener('click', () => {
    let nuovoAnimale = new Pet(nomeAnimale.value, nomePadrone.value, tipoAnimale.value, specieAnimale.value)
    listaAnimali.push(nuovoAnimale)
    nomeAnimale.value = ' '
    nomePadrone.value = ' '
    tipoAnimale.value = ' '
    specieAnimale.value = ' '
    aggiungiAnimale()
});

