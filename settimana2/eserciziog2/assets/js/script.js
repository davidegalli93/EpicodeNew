//Esercizio 1

var aldo = 'Aldo';
const pgreco = '3.14';

{
    let cliente = 'cliente';
    document.getElementById('concatena').innerHTML = aldo + ', ' + cliente + ', ' + pgreco;

    //Esercizio 2
    var esercizio2 = aldo + ', ' + cliente + ', ' + pgreco;
    document.getElementById('concatena2').innerHTML = esercizio2;
}

//Esercizio 3

var nome1 = 'Mario';
{
    let nome1 = 'Carla';
    document.getElementById('let').innerHTML = nome1;
    document.getElementById('let3').innerHTML = nome1;
    document.getElementById('final2').innerHTML = nome1;
}

document.getElementById('var').innerHTML = nome1;
document.getElementById('final').innerHTML = nome1;
document.getElementById('let2').innerHTML = nome1;

//Esercizio 4

var iniziale = 15;
var addizione = iniziale + iniziale;
var sottrazione = iniziale - 10;
document.getElementById('iniziale').innerHTML += iniziale;
document.getElementById('valore1').innerHTML += addizione + ', ' + ++addizione;
document.getElementById('valore2').innerHTML += sottrazione + ', ' + --sottrazione;
document.getElementById('valore3').innerHTML += iniziale * 3;
document.getElementById('valore4').innerHTML += iniziale / 3;
document.getElementById('valore5').innerHTML += iniziale + ' è un numero';